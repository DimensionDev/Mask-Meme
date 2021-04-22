import React from 'react'
import SvgIcon from '../components/SvgIcon'
const IconLogoBlue = ({ width = '32', height = '32' }: { width?: string; height?: string }) => {
  return (
    <SvgIcon width={width} height={height} viewBox="0 0 62 62">
      <path
        d="M28.5 57C44.2401 57 57 44.2401 57 28.5C57 12.7599 44.2401 0 28.5 0C12.7599 0 0 12.7599 0 28.5C0 44.2401 12.7599 57 28.5 57Z"
        fill="#1C68F3"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M45.7019 21.4945V30.959H16.853L15.6118 30.9591C16.9255 36.7018 22.1391 40.9913 28.3707 40.9913C33.5225 40.9913 37.9786 38.0595 40.1105 33.7985L45.7019 33.7984V41.7485C45.7019 43.6303 44.152 45.1557 42.24 45.1557H14.5451C12.6332 45.1557 11.0833 43.6303 11.0833 41.7485V21.4945H45.7019ZM36.7901 33.7985C34.9542 36.4403 31.8682 38.1739 28.3707 38.1739C24.8732 38.1739 21.7872 36.4403 19.9513 33.7985H36.7901ZM20.988 23.7659C18.2751 23.7659 16.0307 25.7404 15.6574 28.3089L18.6084 28.309C18.9328 27.3204 19.8756 26.6053 20.988 26.6053C22.1005 26.6053 23.0432 27.3204 23.3677 28.309L26.3186 28.3089C25.9453 25.7404 23.701 23.7659 20.988 23.7659ZM35.7971 23.7659C33.0842 23.7659 30.8398 25.7404 30.4665 28.3089L33.4174 28.309C33.7419 27.3204 34.6847 26.6053 35.7971 26.6053C36.9096 26.6053 37.8523 27.3204 38.1768 28.309L41.1277 28.3089C40.7544 25.7404 38.51 23.7659 35.7971 23.7659ZM42.24 11.0835C44.152 11.0835 45.7019 12.609 45.7019 14.4907V18.6551H11.0833V14.4907C11.0833 12.609 12.6332 11.0835 14.5451 11.0835H42.24Z"
        fill="white"
      />
    </SvgIcon>
  )
}

export default IconLogoBlue