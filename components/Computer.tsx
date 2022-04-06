import useEns from '../hooks/useEns'
import useNfts from '../hooks/useNfts'
import useWallet from '../hooks/useWallet'
import DotLoader from './DotLoader'
import Receipt from './Receipt'

type Props = {
  loading: boolean
}

const Computer = () => {
  const { address, connect, disconnect } = useWallet()
  const { nfts, total, loading } = useNfts(address || '')
  const { ens } = useEns(address || '')

  const handleClick = () => {
    console.log('clicked')
    address ? disconnect() : connect()
  }

  const StatusScreen = () => {
    if (address && loading) {
      return (
        <g>
          <text
            x="210"
            y="161"
            fill="white"
            font-size="20"
            className="font-serif"
          >
            Loading
          </text>
          <DotLoader></DotLoader>
        </g>
      )
    }

    if (address && nfts.length > 0) {
      return (
        <g>
          <text
            x="219"
            y="161"
            fill="white"
            font-size="30"
            className="font-serif"
          >
            Done
          </text>
        </g>
      )
    }

    return (
      <g>
        <path
          d="M153.438 92.0625H184.125V153.438H153.438V92.0625Z"
          fill="white"
        />
        <path
          d="M153.438 184.125H184.125V214.812H153.438V184.125Z"
          fill="white"
        />
      </g>
    )
  }

  return (
    <>
      <svg
        width="491"
        height="491"
        viewBox="0 0 491 350"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="z-10"
      >
        <path d="M0 0H61.375V276.188H0V0Z" fill="transparent" />
        <path
          d="M61.375 0H429.625V276.188H491V421H0V276.188H61.375V0Z"
          fill="black"
        />
        <path d="M429.625 0H491V276.188H429.625V0Z" fill="transparent" />
        <path
          d="M92.0625 30.6875H398.938V276.188H92.0625V30.6875Z"
          fill="white"
        />

        <rect
          d="M306.875 337.562H429.625V368.25H306.875V337.562Z"
          fill="currentColor"
          x="123"
          y="61"
          height="184"
          width="245"
          className="text-black"
        ></rect>

        {StatusScreen()}
        <g
          onClick={handleClick}
          className="text-blue-500 hover:text-red-500 cursor-pointer"
        >
          <rect
            d="M306.875 337.562H429.625V368.25H306.875V337.562Z"
            fill="currentColor"
            x="350"
            y="310"
            height="20"
            width="80"
          ></rect>
          {address ? (
            <text
              x="355"
              y="324"
              fill="white"
              fontFamily="receipt"
              font-size="20"
            >
              Disconnect
            </text>
          ) : (
            <text
              x="365"
              y="324"
              fill="white"
              fontFamily="receipt"
              font-size="20"
            >
              Connect
            </text>
          )}
        </g>
        {/* <path d="M61 363H430V394H61V363Z" fill="white" /> */}

        <rect
          d="M306.875 337.562H429.625V368.25H306.875V337.562Z"
          fill="currentColor"
          x="90"
          y="400"
          height="27"
          width="310"
          className="text-gray-800 z-0"
        ></rect>

        <rect
          d="M306.875 337.562H429.625V368.25H306.875V337.562Z"
          fill="currentColor"
          x="95"
          y="405"
          height="12"
          width="300"
          className="text-gray-700"
        ></rect>
      </svg>
      <svg width="490.99">
        <rect
          d="M306.875 337.562H429.625V368.25H306.875V337.562Z"
          fill="currentColor"
          height="27"
          width="490"
          className="text-black-500 z-0"
        ></rect>
      </svg>

      {/* <div className="h-64 w-64 bg-white receipt"></div> */}
      
      {address && !loading && <Receipt address={address} nfts={nfts} total={total} ens={ens}  ></Receipt>}
    </>
  )
}

export default Computer
