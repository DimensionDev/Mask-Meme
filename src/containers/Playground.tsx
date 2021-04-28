import React, { useState } from 'react'
import styled from 'styled-components'
import { rem } from 'polished'
import { Grid } from 'react-styled-flexboxgrid'

import Info from './Info'
import Sandbox from './Sandbox'
import Card from '../components/Card'

const Playground: React.FC = () => {
  const [file, setFile] = useState<string | undefined>()

  const onDrop = ([file]: File[]) => {
    setFile(URL.createObjectURL(file))
  }

  return (
    <Section>
      <Grid className="grid">
        <Wrapper>
          <Card className="info">
            <Info onDrop={onDrop}/>
          </Card>
          <Card>
            <Sandbox file={file} onDrop={onDrop} />
          </Card>
        </Wrapper>
      </Grid>
    </Section>
  )
}

export interface SectionProps {}

const Section = styled.section<SectionProps>`
  position: relative;
  width: 100%;

  ${Grid} {
    width: 1440px;
    height: 840px;
    padding-left: 0;
    padding-right: 0;
  }

  @media all and (max-width: 1024px) {
    width: 100%;

    ${Grid} {
      width: 100%;
      height: auto;
      padding: 0;
    }
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  height: 840px;

  transform: translate3d(0, 0, 0);
  background-color: ${(props) => props.theme.colors.odd};
  border-radius: 24px;

  .info {
    display: block;
  }

  ${Card} {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
    height: 100%;
    flex: 0 0 50%;

    &:first-child {
      padding: 0;
    }
  }

  @media all and (max-width: 1024px) {
    min-height: ${rem(840)};
  }

  @media all and (max-width: 767px) {
    height: auto;
    min-height: 0;
    flex-wrap: nowrap;
    flex-direction: column-reverse;
    background-color: ${(props) => props.theme.colors.grey};
    border-radius: 0px;

    .info {
      display: none;
    }

    ${Card} {
      flex: 0 0 100%;
      height: auto;
      background-color: ${(props) => props.theme.colors.grey};
      padding: 0;

      &:first-child {
        margin-bottom: 30px;
        background-color: ${(props) => props.theme.colors.grey};

        @media all and (min-width: 481px) {
          height: 400px;
        }
      }
    }
  }

  @media all and (max-width: 480px) {
    ${Card} {
      min-height: 0;
    }
  }
`

export default Playground
