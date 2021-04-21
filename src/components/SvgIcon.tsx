import styled from 'styled-components'
import { rem } from 'polished'

export enum SvgIconSize {
  Xs,
  Md,
  Lg,
}

export interface SvgIconProps {
  $size?: SvgIconSize
  children: JSX.Element | JSX.Element[]
  width?: string
  height?: string
}

const SvgIcon = styled.svg<SvgIconProps>`
  width: ${(props) => (props.width ? props.width + 'px' : rem(20))};
  height: ${(props) => (props.height ? props.height + 'px' : rem(20))};
  display: inline-block;
  vertical-align: middle;
  margin-right: ${rem(10)};
  transition: opacity ${(props) => props.theme.transition.base};

  ~ span {
    display: inline-block;
    vertical-align: middle;
  }

  path {
    transition: fill ${(props) => props.theme.transition.base};
  }
`

export default SvgIcon
