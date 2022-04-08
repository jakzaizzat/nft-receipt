type Props = {
  state?: 'printing' | 'off' | 'on'
}

const colorState = {
  printing: 'text-yellow-500',
  off: 'text-gray-200',
  on: 'text-green-500',
}

const PowerButton = ({ state = 'off' }: Props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 210 210"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={
        colorState[state] + state === 'printing' ? ' animate-ping' : '' + ' bg-white rounded-full'
      }
    >
      <path
        d="M80 5V10H70H60V15V20H50H40V25V30H35H30V35V40H25H20V50V60H15H10V70V80H5H0V105V130H5H10V140V150H15H20V160V170H25H30V175V180H35H40V185V190H50H60V195V200H70H80V205V210H105H130V205V200H140H150V195V190H160H170V185V180H175H180V175V170H185H190V160V150H195H200V140V130H205H210V105V80H205H200V70V60H195H190V50V40H185H180V35V30H175H170V25V20H160H150V15V10H140H130V5V-3.12924e-06H105H80V5ZM130 15V20H140H150V25V30H160H170V35V40H175H180V50V60H185H190V70V80H195H200V105V130H195H190V140V150H185H180V160V170H175H170V175V180H160H150V185V190H140H130V195V200H105H80V195V190H70H60V185V180H50H40V175V170H35H30V160V150H25H20V140V130H15H10V105V80H15H20V70V60H25H30V50V40H35H40V35V30H50H60V25V20H70H80V15V10H105H130V15Z"
        stroke="20"
        fill="currentColor"
        className={colorState[state]}
      />
      <path
        d="M100 65V100H105H110V65V30H105H100V65Z"
        fill="currentColor"
        className={colorState[state]}
      />
      <path
        d="M70 55V60H65H60V65V70H55H50V80V90H45H40V105V120H45H50V130V140H55H60V145V150H65H70V155V160H80H90V165V170H105H120V165V160H130H140V155V150H145H150V145V140H155H160V130V120H165H170V105V90H165H160V80V70H155H150V65V60H145H140V55V50H130H120V55V60H130H140V65V70H145H150V80V90H155H160V105V120H155H150V130V140H145H140V145V150H130H120V155V160H105H90V155V150H80H70V145V140H65H60V130V120H55H50V105V90H55H60V80V70H65H70V65V60H80H90V55V50H80H70V55Z"
        fill="currentColor"
        className={colorState[state]}
      />
    </svg>
  )
}

export default PowerButton
