import { ellipseAddress } from '../lib/utilities'

type Props = {
  address?: string
  connect: () => void
  disconnect: () => void
}

const Navigation = ({ address, connect, disconnect }: Props) => {
  const handleClick = () => {
    address ? disconnect() : connect()
  }

  return (
    <nav className="absolute bottom-0 w-full">
      <div className=" h-10 w-96 rounded-t-md bg-purple-900 mx-auto"></div>
      <div className=" h-2 w-full bg-purple-800 mx-auto relative z-30"></div>
      <div className="bg-purple-700 shadow-md relative z-30">
        <div className="container mx-auto py-4 flex flex-col md:flex-row gap-4 items-center justify-between">
          <span className="text-white">Generate Tax</span>

          <button
            onClick={handleClick}
            className="flex items-center  p-3 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mx-right"
          >
            {address ? ellipseAddress(address) : 'Connect'}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
