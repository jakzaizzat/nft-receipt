import axios from 'axios'
import { useEffect, useState } from 'react'

export default function useNfts(address) {
  const [nfts, setNfts] = useState([])
  const [total, setTotal] = useState(0)
  const fetchNft = async () => {
    try {
      const response = await axios.get(`/api/receipt/${address}`)
      setNfts(response.data.result)
      setTotal(response.data.total)
    } catch (error) {
      // TODO: handle error
      console.log(error)
      setNfts([])
      setTotal(0)
    }
  }

  useEffect(() => {
    fetchNft()
  }, [])

  return {
    nfts,
    total,
  }
}
