import axios from 'axios'
import { useEffect, useState } from 'react'

export default function useEns(address: string) {
  const [ens, setEns] = useState(null)

  const fetchEns = async () => {
    try {
      const response = await axios.get(
        `https://api.ensideas.com/ens/resolve/${address.toLowerCase()}`,
      )
      setEns(response.data.displayName)
    } catch (error) {}
  }

  useEffect(() => {
    if (!address) return
    fetchEns()
  }, [address])

  return {
    ens,
  }
}
