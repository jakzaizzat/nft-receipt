import { Fragment, useState } from 'react'
import { motion } from 'framer-motion'
import DomToImage from 'dom-to-image'

type Props = {
  onClose: () => void
  total: number
  children: React.ReactNode
}

const Modal = ({ onClose, children, total }: Props) => {
  return (
    <div className="bg-purple-500/25 absolute top-0 right-0 h-full w-full z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
        }}
      >
        <section className="bg-purple-900 border-4 border-orange-500 rounded-md p-4 w-[500px] ">
          <div className="flex items-center justify-between mb-4 text-white">
            <h1 className="font-bold">NFT Receipt</h1>
            <button onClick={onClose} className="hover:text-purple-600 text-lg">
              x
            </button>
          </div>
          <section className="h-96 overflow-y-scroll mb-4">
            <div className="flex items-center justify-center mb-4">
              {children}
            </div>
          </section>

          <div className="flex items-center justify-center gap-5">
            <button
              onClick={() => {
                DomToImage
                  //@ts-ignore
                  .toPng(document.querySelector('#receipt'))
                  .then(function (dataUrl: string) {
                    let link = document.createElement('a')
                    // link.download = `${
                    //   ens ? ens : ellipseAddress(address)
                    // }-receipt.jpeg`
                    link.download = 'receipt.jpeg'
                    link.href = dataUrl
                    link.click()
                  })
                  .catch(function (error: any) {
                    console.error('oops, something went wrong!', error)
                  })
              }}
              className="flex items-center  p-3 border border-transparent shadow-sm text-xs leading-4 font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mx-right"
            >
              Download
            </button>
            <a
              href={`https://twitter.com/intent/tweet?text=Yo!%20I%20just%20spent%20${total}%20eth%20on%20NFT%20this%20year.%20`}
              className="flex items-center  p-3 border border-transparent shadow-sm text-xs leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mx-right"
            >
              Shill
            </a>
          </div>
        </section>
      </motion.div>
    </div>
  )
}

export default Modal
