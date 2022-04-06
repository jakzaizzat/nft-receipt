import axios from 'axios'
import { useEffect, useState } from 'react'

export default function useNfts(address: string) {
  const [nfts, setNfts] = useState([])
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(false)

  const fetchNft = async () => {
    try {
      setLoading(true)
      const response = await axios.get(`/api/receipt/${address}`)
      setNfts(response.data.result)
      setTotal(response.data.total)
    } catch (error) {
      // TODO: handle error
      console.log(error)
      setNfts([])
      setTotal(0)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!address) {
      setNfts([])
      setTotal(0)
      return
    }
    fetchNft()
  }, [address])

  return {
    nfts,
    total,
    loading
  }
}
