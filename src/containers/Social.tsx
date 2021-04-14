import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'

import Dropdown from '../components/Dropdown'
import { IconTwitter } from '../icons'

const Wrapper = styled.div`
  margin-bottom: ${rem(30)};
  color: ${(props) => props.theme.colors.gray};
  text-align: left;

  a {
    color: inherit;

    svg {
      opacity: 0.24;
    }

    &:hover {
      color: ${(props) => props.theme.colors.primary};

      svg {
        opacity: 0.48;
      }
    }
  }

  @media all and (max-width: 767px) {
    margin-bottom: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

const Copy = styled.div`
  color: ${(props) => props.theme.colors.black};
  margin-bottom: ${rem(16)};
  font-weight: ${(props) => props.theme.fontWeight.semibold};

  @media all and (max-width: 767px) {
    margin-bottom: 0;
    text-align: left;
  }
`

const List = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  svg {
    margin-right: 0;
    width: ${rem(24)};
    height: ${rem(24)};
  }
`

const Social: React.FC = () => {
  return (
    <Wrapper>
      <Copy>
        {'Forked from '}
        <a href="https://stake.fish/" target="_block">
          stakefish
        </a>
        {' & '}
        <a href="https://www.f2pool.com/" target="_block">
          f2pool
        </a>
      </Copy>
      <List>
        <Dropdown
          title={<IconTwitter />}
          data={[
            { name: 'f2pool', url: 'https://twitter.com/f2pool_official' },
            { name: 'stakefish', url: 'https://twitter.com/stakefish' },
          ]}
        />
      </List>
    </Wrapper>
  )
}

export default Social
