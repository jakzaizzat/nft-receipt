export type OpenseaTypes = {
  collection_name: string
  asset: { asset_contract: { name: string } }
  transaction_hash: string
  transaction: { transaction_hash: string }
  to_account: { address: string }
}

export type NftData = {
  name: string
  id: string
  created_date: string
  quantity: string
  asset_contract: string
  amount: number
  value: number
}

export type ReceiptData = {
  result: NftData[]
}
