import React from 'react'
import styled from 'styled-components'
import IconLogo from 'icons/IconLogo'

const Header: React.FC = () => {
  return (
    <Wrapper>
      <IconLogo />
      <h1>Create your own Mask!</h1>
      <p className="hit">
        Share your support for Mask <br />- the portal to the new, open internet.
      </p>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  h1 {
    margin-top: 24px;
    margin-bottom: 24px;
    font-size: 40px;
    color: rgba(17, 20, 50, 1);
    font-weight: bold;
  }

  p.hit {
    font-size: 24px;
    color: rgba(71, 79, 86, 1);
  }

  @media all and (max-width: 767px) {
    padding: 12px 0;

    svg {
      width: 168px;
      height: 48px;
    }
    h1 {
      font-size: 24px;
    }

    p.hit {
      font-size: 16px;
    }

   
  }
`

export default Header
