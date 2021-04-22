import Button, { ButtonColor, ButtonSize } from 'components/Button'
import IconInput from 'icons/IconInput'
import { rem } from 'polished'
import React from 'react'
import { useDropzone } from 'react-dropzone'
import styled from 'styled-components'

interface Props {
    onDrop: (files: File[]) => void
    className?: string
}

const UploadFile: React.FC<Props> = ({onDrop, className}:Props) => {
const { getRootProps, getInputProps } = useDropzone({ onDrop })

  return (
<UploadWrapper className={className}>
    <div>
        <Button $color={ButtonColor.Blue} $size={ButtonSize.Lg} {...getRootProps()}>
        <IconInput width="24" height="24" />
        Pick Photo
        <input {...getInputProps()} name="file" accept="image/*" />
        </Button>
        <Hint>You can also drag your photo here </Hint>
    </div>
    </UploadWrapper>

  )
}

const Hint = styled.div`
  margin: ${rem(14)} 0 0;
  opacity: 1;
  font-size: 18px;
  color: rgba(123, 129, 146, 1);
  letter-spacing: 0;
  text-align: center;
  pointer-events: none;

  @media all and (max-width: 767px) {
    display: none;
  }
`

const UploadWrapper = styled.div`
  margin-top: 64px;
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
    padding: 16px 32px;
    border-radius: 8px;
    font-family: ${(props) => props.theme.fontSize.button};
    font-size: 20px;
    letter-spacing: normal;
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
    padding: 16px;
    margin-top: 16px;
  }

  @media all and (max-width: 480px) {
    display: block;

    ${Button} {
      width: 100%;
    }
  }
`


export default UploadFile
