import Image from 'next/image'
import ReceiptTable from './ReceiptTable'

const Receipt = () => {
  return (
    <div
      style={{
        backgroundImage: `url('../images/bg.jpeg')`,
      }}
      className="p-4 uppercase bg-center w-64"
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
          <Image src={'/images/barcode.png'} width={200} height={40} />
        </div>
        <p className="text-center text-sm">nft-receipt.xyz</p>
      </section>
    </div>
  )
}

export default Receipt
