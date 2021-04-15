import React from 'react'
import styled from 'styled-components'
import OutsideClickHandler from 'react-outside-click-handler'
import { SliderInput, SliderTrack, SliderRange, SliderHandle, SliderMarker } from '@reach/slider'
import { rem, rgba } from 'polished'

import {
  CONTROLLER_ROTATION_MAX,
  CONTROLLER_ROTATION_MIN,
  CONTROLLER_SIZE_MIN,
  CONTROLLER_SIZE_MAX,
  CONTROLLER_SIZE_STEP,
  CONTROLLER_TRANSPARENCY_STEP,
  CONTROLLER_TRANSPARENCY_MAX,
  CONTROLLER_TRANSPARENCY_MIN,
} from '../helpers/const'

import { slideUpPopover } from '../core/GlobalStyles'

type Icons = {
  icon: JSX.Element
}

interface Props {
  icons?: Icons[]
  rotation: number
  scale: number
  transparency: number
  onScale: (size: number) => void
  onRotation: (angle: number) => void
  onTransparency: (transparency: number) => void
  onClose: () => void
}

const Controller: React.FC<Props> = ({ icons, rotation, scale, transparency, onRotation, onScale, onTransparency, onClose }: Props) => {
  return (
    <OutsideClickHandler onOutsideClick={onClose}>
      <Wrapper>
        <Inner>
          <Group>
            <SliderInfo>
              <h4>Size</h4>
              <span>{(scale * 100).toFixed(0)}%</span>
            </SliderInfo>

            <SliderInput
              value={scale}
              min={CONTROLLER_SIZE_MIN}
              max={CONTROLLER_SIZE_MAX}
              step={CONTROLLER_SIZE_STEP}
              onChange={onScale}>
              <SliderTrack>
                <SliderRange />
                <SliderHandle />
                <SliderMarker value={scale} />
              </SliderTrack>
            </SliderInput>
          </Group>

          <Group>
            <SliderInfo>
              <h4>Angle</h4>
              <span>{rotation.toFixed(0)}°</span>
            </SliderInfo>

            <SliderInput
              value={rotation}
              min={CONTROLLER_ROTATION_MIN}
              max={CONTROLLER_ROTATION_MAX}
              onChange={onRotation}>
              <SliderTrack>
                <SliderRange />
                <SliderHandle />
                <SliderMarker value={rotation} />
              </SliderTrack>
            </SliderInput>
          </Group>

            <Group>
            <SliderInfo>
              <h4>Transparency</h4>
              <span>{(transparency * 100).toFixed(0)}%</span>
            </SliderInfo>

            <SliderInput
              value={transparency}
              min={CONTROLLER_TRANSPARENCY_MIN}
              max={CONTROLLER_TRANSPARENCY_MAX}
              step={CONTROLLER_TRANSPARENCY_STEP}
              onChange={onTransparency}>
              <SliderTrack>
                <SliderRange />
                <SliderHandle />
                <SliderMarker value={transparency} />
              </SliderTrack>
            </SliderInput>
          </Group>

          <Group>
            <SliderInfo>
              <h4>Select Mask</h4>
            </SliderInfo>

            <List>
              {icons?.map((icon: Icon) => {

              })}
            </List>
          </Group>

        </Inner>
      </Wrapper>
    </OutsideClickHandler>
  )
}

const List = styled.div`
`


const Wrapper = styled.div`
  position: absolute;
  padding-top: 32px;
  padding-bottom: 32px;
  bottom: 100%;
  left: 175px;
  border-radius: 0 24px 0 0;
  transform: translate(-50%, 0);
  box-shadow: 0 3px 12px 0 rgba(83, 86, 92, 0.1), 0 2px 3px 0 rgba(83, 86, 92, 0.2);
  background-color: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.blue};
  width: ${rem(400)};
  z-index: 11;
  transform: translate3d(0, 10px, 0);
  animation: 0.3s ${slideUpPopover} forwards cubic-bezier(0.2, 1.64, 0.86, 0.86);
  backface-visibility: visible;

  ${Button} {
    margin-top: ${rem(10)};
  }

  [data-reach-slider-input][data-orientation='horizontal'] {
    height: 6.86px;
    border-radius: 10px
  }

  [data-reach-slider-marker][data-orientation='horizontal'] {
    width: ${rem(20)};
    height: ${rem(20)};
    background-color: transparent;
    cursor: pointer;
    margin: 0;

   
  }

  [data-reach-slider-track] {
    background-color: ${(props) => rgba(props.theme.colors.dark, 0.16)};

    &[data-orientation='horizontal'] {
      &::after,
      &::before {
        content: '';
        width: ${rem(15)};
        height: ${rem(20)};
        top: ${rem(-10)};
        z-index: 1;
        position: absolute;
        background-color: ${(props) => props.theme.colors.white};
      }

      &::before {
        left: auto;
        right: 100%;
      }

      &::after {
        content: '';
        left: 100%;
        right: auto;
      }
    }
  }

  [data-reach-slider-handle] {
    width: 14px;
    height: 14px;
    outline: none;
    border: 0;
    box-shadow: 0 0 0 ${rem(2)} ${(props) => props.theme.colors.blue};
    background-color: ${(props) => props.theme.colors.white};
    transition: box-shadow ${(props) => props.theme.transition.base};
    cursor: pointer;
    z-index: 10;

    &:hover,
    &:active {
      box-shadow: 0 0 0 ${rem(2)} ${(props) => props.theme.colors.blue};

      ~ [data-reach-slider-marker][data-orientation='horizontal'] {
        &:before {
          width: ${rem(80)};
          background: linear-gradient(90deg, rgba(2, 0, 36, 0) 0%, rgba(255, 0, 0, 1) 50%, rgba(0, 212, 255, 0) 100%);
        }
      }
    }
  }

  [data-reach-slider-range] {
    background-color: ${(props) => props.theme.colors.blue};
  }

  @media all and (max-width: 767px) {
    width: 90%;
  }

  @media all and (max-width: 480px) {
    [data-reach-slider-input] {
      position: absolute;
      left: 60px;
      right: 40px;
      top: 8px;
    }

    ${Button} {
      margin-top: 0;
    }

    [data-reach-slider-track] {
      background-color: ${(props) => rgba(props.theme.colors.dark, 0.16)};

      &[data-orientation='horizontal'] {
        &::after,
        &::before {
          width: 30px;
        }
      }
    }
  }
`

const SliderInfo = styled.div`
  margin-bottom: ${rem(14)};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${rem(10)};

  h4 {
    margin-bottom: 0;
    font-size: ${(props) => props.theme.fontSize.base};
    font-weight: ${(props) => props.theme.fontWeight.medium};
    text-transform: unset;
    color: ${(props) => props.theme.colors.dark};
  }

  span {
    font-weight: ${(props) => props.theme.fontWeight.medium};
    color: ${(props) => props.theme.colors.dark};
    font-size: ${(props) => props.theme.fontSize.base};
  }

  @media all and (max-width: 767px) {
    font-size: 10px;
    position: relative;
    z-index: 10;

    span {
      width: 30px;
    }
  }
`

const Group = styled.div`
  padding-bottom: ${rem(14)};
  position: relative;
`

const Inner = styled.div`
  overflow: hidden;
  padding: ${rem(14)} ${rem(14)};
  width: 100%;
  height: 100%;
`

export default Controller
