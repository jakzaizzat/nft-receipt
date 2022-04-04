import type { NextApiRequest, NextApiResponse } from 'next'
import { groupBy, uniqBy } from 'lodash'

import { OPENSEA_DATA } from '../../data/opensea'
import { MORALIS_DATA } from '../../data/moralis'

type Data = {
  result: any
}

const USER_ADDRESS = '0x517aea67196c8975dd100236689d0ca10b928f58'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const opensea_assets = OPENSEA_DATA.asset_events
    .map((item) => {
      item.collection_name = item.asset.asset_contract.name
      item.transaction_hash = item.transaction.transaction_hash
      return item
    })
    .filter((item) => item.to_account.address === USER_ADDRESS)


  let result = groupBy(opensea_assets, 'collection_name')


  const data = {
    result: [],
  }
  for (let key of Object.keys(result)) {
    const item = result[key][0]
    data.result.push({
      name: key,
      id: item.transaction.transaction_hash,
      created_date: item.created_date,
      quantity: item.quantity,
      asset_contract: item.asset.asset_contract.address,
      amount: uniqBy(result[key], 'transaction_hash').length,
      value:
        (MORALIS_DATA.result.find(
          (moralis_item) =>
            moralis_item.transaction_hash === item.transaction.transaction_hash,
        )?.value /
          1000000000000000000) *
        uniqBy(result[key], 'transaction_hash').length,
    })
  }

  data.result = data.result.filter((item) => item.value > 0)

  const total = data.result.reduce((acc, cur) => acc + cur.value, 0).toFixed(3)


  res.status(200).json({
    result: data.result,
    total,
    address: USER_ADDRESS,
  })
}
