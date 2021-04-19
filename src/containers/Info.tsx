import React from 'react'
import { useDropzone } from 'react-dropzone'
import { Row, Col } from 'react-styled-flexboxgrid'
import styled from 'styled-components'
import { rem } from 'polished'

import Button, { ButtonColor, ButtonSize } from '../components/Button'
import { IconLogo, IconInput, IconTwitter, IconTelegram, IconFacebook, IconDiscord, IconGithub } from '../icons'
import SocialMenu from 'components/menu'

interface Props {
  onDrop: (files: File[]) => void
}

const Info: React.FC<Props> = ({ onDrop }: Props) => {
  const { getRootProps, getInputProps } = useDropzone({ onDrop })

  return (
    <Wrapper>
      <Row middle="xs" center="xs">
        <Col xs={12}>
          <IconLogo />
          <h1>Create your own Mask!</h1>
          <p className='hit'>
            Share your support for Maskl <br />- the portal to the new, open internet.
          </p>
          <UploadWrapper>
            <div>
              <Button $color={ButtonColor.Blue} $size={ButtonSize.Lg} {...getRootProps()}>
                <IconInput />
                Pick Photo
                <input {...getInputProps()} name="file" accept="image/*" />
              </Button>
              <Hint>You can also drag your photo here </Hint>
            </div>
          </UploadWrapper>

          <SocialMenu
            link={{ url: 'https://mask.io', name: 'Mask.io' }}
            data={[
              {
                url: 'https://www.facebook.com/groups/324857694838456',
                icon: <IconFacebook width={rem(36)} height={rem(36)} />,
              },
              {
                url: 'https://twitter.com/realmaskbook',
                icon: <IconTwitter width={rem(36)} height={rem(36)} />,
              },
              {
                url: 'https://t.me/maskbook_group#telegram',
                icon: <IconTelegram width={rem(36)} height={rem(36)} />,
              },
              {
                url: 'https://discord.gg/4SVXvj7',
                icon: <IconDiscord width={rem(36)} height={rem(36)} />,
              },
              {
                url: 'https://github.com/DimensionDev',
                icon: <IconGithub width={rem(36)} height={rem(36)} />,
              },
            ]}
          />
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
  }

  h1 {
    margin-top: 24px;
    margin-bottom: 24px;
  }

  p.hit {
    font-size: 18px;
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

const Hint = styled.div`
  margin: ${rem(14)} 0 0;
  opacity: 1;
  font-size: ${rem(18)};
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
    text-transform: unset;
    max-width: 100%;
    min-width: ${rem(210)};
    padding-right: ${rem(64)};
    padding-left: ${rem(64)};
    border-radius: 8px;
    font-family: ${(props) => props.theme.font.base};
    font-size: 18px;
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
      font-size: ${rem(16)};
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
