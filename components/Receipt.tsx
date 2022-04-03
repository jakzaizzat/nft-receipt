import { useRef } from 'react'
import ReceiptTable from './ReceiptTable'

import DomToImage from 'dom-to-image'

const Receipt = () => {
  const receiptRef = useRef(null)

  return (
    <div className='grid gap-4'>
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
          <p className="text-sm">last month</p>
        </section>

        <section className="font-serif leading-4 mb-4">
          <p>ORDER #0001 FOR 0x51***8F58 - jakz.eth</p>
          <p>MONDAY, APRIL 4, 2022</p>
        </section>

        <div className="mb-4">
          <ReceiptTable></ReceiptTable>
        </div>

        <section className="font-serif leading-4 mb-4">
          <p>Address: 0x51***8F58 - jakz.eth</p>
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
              link.download = 'my-image-name.jpeg'
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
