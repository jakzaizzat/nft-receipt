import { useRef } from 'react'
import ReceiptTable from './ReceiptTable'

import DomToImage from 'dom-to-image'
import useNfts from '../hooks/useNfts'
import useEns from '../hooks/useEns'

import { ellipseAddress } from '../lib/utilities'
import { format } from 'date-fns'

type Props = {
  address: string
}

const Receipt = ({ address }: Props) => {
  const receiptRef = useRef(null)
  const { nfts, total, loading } = useNfts(address)
  const { ens } = useEns(address)

  const today = format(new Date(), 'EEEE, MMMM dd, Y')

  if (loading)
    return (
      <div className='flex items-center gap-3'>
        Loading{' '}
        <svg
          className="motion-reduce:hidden animate-spin -ml-1 mr-3 h-4 w-4 text-red-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      </div>
    )

  return (
    <div className="grid gap-4">
      <div
        ref={receiptRef}
        style={{
          backgroundImage: `url('../images/bg.jpeg')`,
        }}
        className="p-4 uppercase bg-center w-64"
        id="receipt"
      >
        <section className="text-center mb-4">
          <h1 className="text-2xl font-bold">NFT Receipt</h1>
          <p className="text-sm">2022</p>
        </section>

        <section className="font-serif leading-4 mb-4">
          <p>
            ORDER #0001 FOR {ellipseAddress(address)} {ens && `- ${ens}`}
          </p>
          <p>{today}</p>
        </section>

        <div className="mb-4">
          <ReceiptTable nfts={nfts} total={total}></ReceiptTable>
        </div>

        <section className="font-serif leading-4 mb-4">
          <p>
            Address: {ellipseAddress(address)} - {ens && `- ${ens}`}
          </p>
          <p>Network: Ethereum</p>
        </section>

        <section className="font-serif">
          <h3 className="text-sm text-center">Thank you for visiting!</h3>
          <div className="flex items-center justify-center">
            <img src="/images/barcode.png" className="h-12" />
          </div>
          <p className="text-center text-sm">nft-receipt.xyz</p>
        </section>
      </div>
      <button
        className="flex items-center px-2 py-1 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mx-auto"
        // TODO: Refactor to component
        onClick={() => {
          DomToImage
            //@ts-ignore
            .toPng(receiptRef.current)
            .then(function (dataUrl: string) {
              let link = document.createElement('a')
              link.download = `${
                ens ? ens : ellipseAddress(address)
              }-receipt.jpeg`
              link.href = dataUrl
              link.click()
            })
            .catch(function (error: any) {
              console.error('oops, something went wrong!', error)
            })
        }}
      >
        Download
      </button>
    </div>
  )
}

export default Receipt
