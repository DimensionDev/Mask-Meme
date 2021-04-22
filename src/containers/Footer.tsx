import React from 'react'
import styled from 'styled-components'

import SocialMenu from 'components/menu'
import IconFacebook from 'icons/IconFacebook'
import IconTwitter from 'icons/IconTwitter'
import IconTelegram from 'icons/IconTelegram'
import IconDiscord from 'icons/IconDiscord'
import IconGithub from 'icons/IconGithub'

const Footer: React.FC = () => {
  return (
    <Wrapper>
       <SocialMenu
            link={{ url: 'https://mask.io', name: 'Mask.io' }}
            data={[
              {
                url: 'https://www.facebook.com/groups/324857694838456',
                icon: <IconFacebook width="36" height="36" />,
              },
              {
                url: 'https://twitter.com/realmaskbook',
                icon: <IconTwitter width="36" height="36" />,
              },
              {
                url: 'https://t.me/maskbook_group#telegram',
                icon: <IconTelegram width="36" height="36" />,
              },
              {
                url: 'https://discord.gg/4SVXvj7',
                icon: <IconDiscord width="36" height="36" />,
              },
              {
                url: 'https://github.com/DimensionDev',
                icon: <IconGithub width="36" height="36" />,
              },
            ]}
          />
    </Wrapper>
  )
}

const Wrapper = styled.footer`
 

  @media all and (max-width: 480px) {
    svg {
      width: 24px;
      height: 24px;
    }
  }
`


export default Footer
