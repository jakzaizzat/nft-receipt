import type { NextPage } from 'next'
import Head from 'next/head'
import Modal from '../components/Modal'
import Receipt from '../components/Receipt'
import useWallet from '../hooks/useWallet'
import { ellipseAddress } from '../lib/utilities'

const Home: NextPage = () => {
  const { address, connect, disconnect } = useWallet()

  return (
    <div className="antialiased">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="flex flex-col items-center justify-center mb-4">
          <h1 className="mb-4 font-bold ">
            NFT Receipt Generator 
            {address && (
              <span className='ml-1'>
                for {' '}
                <button
                  onClick={disconnect}
                  className="border-b hover:text-gray-500"
                >
                  {ellipseAddress(address)}
                </button>
              </span>
            )}
          </h1>

          {address ? (
            <Receipt address={address}></Receipt>
          ) : (
            <button
              className="flex items-center px-2 py-1 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mx-auto"
              onClick={connect}
            >
              Connect
            </button>
          )}
        </section>
        <Modal></Modal>
      </div>
    </div>
  )
}

export default Home
