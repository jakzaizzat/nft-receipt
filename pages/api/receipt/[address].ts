import type { NextApiRequest, NextApiResponse } from 'next'
import { groupBy, uniqBy } from 'lodash'

// import { OPENSEA_DATA } from '../../../data/opensea'
// import { MORALIS_DATA } from '../../../data/moralis'
import axios from 'axios'
import { OpenseaTypes, ReceiptData } from '../../../types'

type Data = {
  result: any
  total: string
  address: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const USER_ADDRESS = req.query.address as string
  let OPENSEA_DATA: any[] = []
  let MORALIS_DATA

  try {
    let openseaFlag = false
    let nextPageSlug

    while (!openseaFlag) {
      const params = {
        only_opensea: false,
        account_address: USER_ADDRESS,
        event_type: 'transfer',
        occurred_after: '1640995200', // 2022-01-01
        cursor: null,
      }

      nextPageSlug ? (params.cursor = nextPageSlug) : null

      console.log(`Fetching opensea API`)

      const response = await axios.get('https://api.opensea.io/api/v1/events', {
        headers: {
          'X-API-KEY': process.env.OPENSEA_KEY || '',
        },
        params,
      })

      OPENSEA_DATA = [...OPENSEA_DATA, ...response.data.asset_events]

      if (response.data.next) {
        nextPageSlug = response.data.next
      } else {
        openseaFlag = true
      }
    }

    const moralisResponse = await axios.get(
      `https://deep-index.moralis.io/api/v2/${USER_ADDRESS}/nft/transfers?chain=eth&format=decimal&direction=to`,
      {
        headers: {
          'X-API-KEY': process.env.MORALIS_KEY || '',
        },
      },
    )

    MORALIS_DATA = moralisResponse.data

    console.log(`fetch moralis done`)

    const opensea_assets = OPENSEA_DATA.map((item: OpenseaTypes) => {
      item.collection_name = item.asset.asset_contract.name
      item.transaction_hash = item.transaction.transaction_hash
      return item
    }).filter(
      (item: OpenseaTypes) =>
        item.to_account?.address === USER_ADDRESS.toLowerCase(),
    )

    let result = groupBy(opensea_assets, 'collection_name')

    const data: ReceiptData = {
      result: [],
    }

    for (let key of Object.keys(result)) {
      const item = result[key][0]

      const uniqTransactionsInCollection = uniqBy(
        result[key],
        'transaction_hash',
      )

      const transaction = MORALIS_DATA.result.find(
        (moralis_item: { transaction_hash: string }) =>
          moralis_item.transaction_hash === item.transaction.transaction_hash,
      )

      const transactionValue = transaction?.value || 0

      const value =
        (transactionValue / 1000000000000000000) *
        uniqTransactionsInCollection?.length

      const formattedValue = value.toFixed(3)

      data.result.push({
        name: key,
        id: item.transaction.transaction_hash,
        created_date: item.created_date,
        quantity: item.quantity,
        asset_contract: item.asset.asset_contract.address,
        amount: uniqTransactionsInCollection.length,
        value: formattedValue,
      })
    }


    data.result = data.result.filter((item) => Number(item.value) > 0)

    const total = data.result
      .reduce((acc, cur) => acc + Number(cur.value), 0)
      .toFixed(3)

    res.status(200).json({
      result: data.result,
      total,
      address: USER_ADDRESS,
    })
  } catch (error) {
    console.log(error)
  }
}
