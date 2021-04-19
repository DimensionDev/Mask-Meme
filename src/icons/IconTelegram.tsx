import React from 'react'

import SvgIcon from '../components/SvgIcon'

const IconTelegram = ({ width = '20', height = '20' }: { width?: string; height?: string }) => {
  return (
    <SvgIcon width={width} height={height} viewBox="0 0 36 36">
     <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.886 26.2569L26.8393 12.3351C27.1003 11.1099 26.397 10.6277 25.5934 10.9286L8.23629 17.6181C7.05086 18.0797 7.07143 18.7431 8.03571 19.044L12.4753 20.43L22.7816 13.941C23.2637 13.6196 23.706 13.8009 23.3447 14.1223L15.0081 21.6553L14.6867 26.2363C15.1483 26.2363 15.3501 26.0357 15.5906 25.794L17.7596 23.7047L22.2596 27.0193C23.0837 27.4809 23.6661 27.2404 23.8873 26.2556L23.886 26.2569ZM36 18C36 27.9437 27.9437 36 18 36C8.05629 36 0 27.9437 0 18C0 8.05629 8.05629 0 18 0C27.9437 0 36 8.05629 36 18Z" fill="#111432"/>
</svg>
  </SvgIcon>
  )
}

export default IconTelegram
