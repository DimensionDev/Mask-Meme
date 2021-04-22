import React from 'react'
import { Row, Col } from 'react-styled-flexboxgrid'
import styled from 'styled-components'
import { rem } from 'polished'

import Header from './Header'
import Footer from './Footer'
import UploadFile from './upload_file'

interface Props {
  onDrop: (files: File[]) => void
}

const Info: React.FC<Props> = ({ onDrop }: Props) => {

  return (
    <Wrapper>
      <Row middle="xs" center="xs">
        <Col xs={12}>
          <Header />

          <UploadFile onDrop = {onDrop}/>

          <Footer />
        </Col>
      </Row>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  text-align: center;

  ${Row} {
    padding-top: 100px;
    margin: 0px;
  }

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
    ${Row} {
      padding-top: 32px;
      margin: 0px;
    }

    h1 {
      font-size: 32px;
    }

    p.hit {
      font-size: 16px;
    }

  }

 
  p {
    font-size: ${(props) => rem(props.theme.fontSize.lead)};
    margin-bottom: ${rem(28)};
  }

  @media all and (max-width: 480px) {
    p {
      margin-bottom: 20px;
    }
  }

  @media all and (max-width: 280px) {
    br {
      display: none;
    }
  }
`



export default Info
