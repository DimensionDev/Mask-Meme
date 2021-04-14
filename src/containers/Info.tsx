import React from "react"
import { useDropzone } from "react-dropzone"
import { Row, Col } from "react-styled-flexboxgrid"
import styled from "styled-components"
import { rem } from "polished"

import Button, { ButtonColor, ButtonSize } from "../components/Button"
import { IconInfo } from "../icons"

interface Props {
  onDrop: (files: File[]) => void
}

const Info: React.FC<Props> = ({ onDrop }: Props) => {
  const { getRootProps, getInputProps } = useDropzone({ onDrop })

  return (
    <Wrapper>
      <Row middle="xs" center="xs">
        <Col xs={12}>
          <h1>Uniswap V3 Mask</h1>
          <p>
            Share your support for Uniswap V3. <br />
            Upload your photo, choose your mask, and download <br />
            or share with the Twitter button!
          </p>
          <Links>
            <a href="https://uniswap.org/blog/uniswap-v3" target="_blank" rel="noreferrer">
              <IconInfo />
              <span>V3 Blog Post</span>
            </a>
          </Links>
          <UploadWrapper>
            <div>
              <Button $color={ButtonColor.White} $size={ButtonSize.Lg} {...getRootProps()}>
                Pick Photo
                <input {...getInputProps()} name="file" accept="image/*" />
              </Button>
              <Hint>or drag and drop your file here</Hint>
            </div>
          </UploadWrapper>
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
    height: 100%;
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

const Links = styled.div`
  padding-bottom: ${rem(10)};

  svg path {
    fill: ${(props) => props.theme.colors.primary};
    transition: fill ${(props) => props.theme.transition.base};
  }

  a {
    color: ${(props) => props.theme.colors.primary};
    padding: ${rem(10)};
    white-space: nowrap;

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

const Hint = styled.div`
  margin: ${rem(14)} 0 0;
  opacity: 0.4;
  font-size: ${rem(14)};
  color: ${(props) => props.theme.colors.dark};
  letter-spacing: 0;
  text-align: center;
  pointer-events: none;

  @media all and (max-width: 767px) {
    display: none;
  }
`

const UploadWrapper = styled.div`
  padding: ${rem(20)};
  height: ${rem(148)};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  ${Button} {
    max-width: 100%;
    min-width: ${rem(210)};
  }

  @media all and (min-width: 768px) {
    input {
      display: block !important;
      opacity: 0;
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      appearance: none;
      cursor: pointer;
    }
  }

  @media all and (max-width: 767px) {
    height: auto;
    padding: 0;
  }

  @media all and (max-width: 480px) {
    display: block;

    ${Button} {
      width: 100%;
    }
  }
`

export default Info
