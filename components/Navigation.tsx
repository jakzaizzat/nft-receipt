import { ellipseAddress } from '../lib/utilities'

type Props = {
  address?: string
  connect: () => void
  disconnect: () => void
  stop: () => void
}

const Navigation = ({ address, connect, disconnect, stop }: Props) => {

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

          <div className="flex items-center gap-4">
            <button
              onClick={handleClick}
              className="flex items-center  p-3 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mx-right"
            >
              {address ? ellipseAddress(address) : 'Connect'}
            </button>
            <button>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 0H18V16H16V18H10V14H14V12H16V6H12V4H16V2H8V14H6V16H0V12H4V10H6V0Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
