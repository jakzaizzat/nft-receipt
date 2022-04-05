export type OpenseaTypes = {
  collection_name: string
  created_date: string
  quantity: string
  asset: { asset_contract: { name: string; address: string } }
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
  value: string
}

export type ReceiptData = {
  result: NftData[]
}
