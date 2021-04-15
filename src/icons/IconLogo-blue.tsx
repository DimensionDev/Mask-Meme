import React from 'react'
import SvgIcon from '../components/SvgIcon'
const IconLogoBlue = ({width="20", height="20"}: {width?:string, height?:string}) => {
  return (
    <SvgIcon width={width} height={height} viewBox="0 0 20 20">
    <g filter="url(#filter0_d)">
    <circle cx="31" cy="31" r="20.5" fill="white" stroke="white"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M31 11C42.0457 11 51 19.9543 51 31C51 42.0457 42.0457 51 31 51C19.9543 51 11 42.0457 11 31C11 19.9543 19.9543 11 31 11ZM43 26.3333H19V40.6C19 41.9255 20.0745 43 21.4 43H40.6C41.9255 43 43 41.9255 43 40.6V35.0001L39.1236 35.0001L39.0788 35.0899C37.5839 38.0426 34.5207 40.0667 30.9848 40.0667C26.6647 40.0667 23.0503 37.0451 22.1395 33.0001L43 33V26.3333ZM36.8218 35.0001H25.1479L25.1863 35.0557C26.4635 36.8853 28.5844 38.0821 30.9848 38.0821C33.4095 38.0821 35.549 36.861 36.8218 35.0001ZM25.8667 27.9333C27.7475 27.9333 29.3034 29.3241 29.5622 31.1334L27.5164 31.1334L27.5083 31.1089C27.2761 30.4252 26.6288 29.9333 25.8667 29.9333C25.0954 29.9333 24.4419 30.437 24.2169 31.1334L22.1711 31.1334L22.1793 31.0792C22.4611 29.2964 24.0047 27.9333 25.8667 27.9333ZM36.1333 27.9333C38.0141 27.9333 39.5701 29.3241 39.8289 31.1334L37.7831 31.1334L37.775 31.1089C37.5427 30.4252 36.8955 29.9333 36.1333 29.9333C35.3621 29.9333 34.7085 30.437 34.4836 31.1334L32.4378 31.1334L32.446 31.0792C32.7277 29.2964 34.2714 27.9333 36.1333 27.9333ZM40.6 19H21.4C20.0745 19 19 20.0745 19 21.4V24.3333H43V21.4C43 20.0745 41.9255 19 40.6 19Z" fill="#1C68F3"/>
    </g>
    <defs>
    <filter id="filter0_d" x="0" y="0" width="62" height="62" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
    <feOffset/>
    <feGaussianBlur stdDeviation="5"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0.109804 0 0 0 0 0.407843 0 0 0 0 0.952941 0 0 0 0.38 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
    </filter>
    </defs>
    </SvgIcon>
  )
}

export default IconLogoBlue