import axios from 'axios'
import { useEffect, useState } from 'react'

export default function useNfts() {
  const [nfts, setNfts] = useState([])
  const [total, setTotal] = useState(0)
  const [address, setAddress] = useState('')
  const fetchNft = async () => {
    try {
      const response = await axios.get('/api/receipt')
      setNfts(response.data.result)
      setTotal(response.data.total)
      setAddress(response.data.address)
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
    address,
    nfts,
    total,
  }
}
