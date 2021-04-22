import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'

/**
 * Types
 */
type data = {
  url: string
  icon: JSX.Element
}
type link = {
  url: string
  name: string
}

export interface SocialMenuProps {
  data: data[]
  link: link
}

const SocialMenu: React.FC<SocialMenuProps> = ({ link, data, ...props }: SocialMenuProps) => {
  return (
    <Menu>
      <Links>
        <a href={link.url} target="_blank" rel="noreferrer">
          {link.name}
        </a>
      </Links>
      <Inner>
        {data.map((meta: data) => (
          <a href={meta.url} target="_blank" rel="noreferrer">
            {meta.icon}
          </a>
        ))}
      </Inner>
    </Menu>
  )
}
const Inner = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: ${rem(8)} ${rem(32)};

  > a {
    margin-right: 16px;
  }

  > a:last-child {
    margin-right: 0;
  }

  @media all and (max-width: 767px) {
    padding-bottom: 8px;
  }
`

const Menu = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding-bottom: ${rem(16)};

  &:after {
  }

  @media all and (max-width: 767px) {
    transform: none !important;
    position: relative;
    padding-top: 32px;
    &:after {
      left: 80%;
    }
  }
`

const Links = styled.div`
  padding-bottom: ${rem(10)};

  text-align: center;

  svg path {
    fill: ${(props) => props.theme.colors.primary};
    transition: fill ${(props) => props.theme.transition.base};
  }

  a {
    color: ${(props) => props.theme.colors.blue};
    padding: ${rem(10)};
    white-space: nowrap;
    font-size: 18px;
    text-decoration: revert;
    & + a {
      margin-left: ${rem(12)};
    }

    &:hover {
      color: #ff8cc3;

      svg path {
        fill: #ff8cc3;
      }
    }
  }

  @media all and (max-width: 767px) {
    margin-bottom: 24px;
    padding-bottom: 0;
  }
`

export default SocialMenu
