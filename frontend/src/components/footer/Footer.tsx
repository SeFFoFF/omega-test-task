import React from 'react'
import { SocialMedia } from '@src/components'
import facebook from '@public/fb.svg'
import twitter from '@public/tw.svg'
import linkedin from '@public/ln.svg'
import './footer.style.scss'

export const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <h4 className='footer__title'>Ukraine 2000-2015</h4>

        <div className='social-media-list'>
          <SocialMedia href='https://facebook.com' icon={facebook} />
          <SocialMedia href='https://twitter.com' icon={twitter} />
          <SocialMedia href='https://linkedin.com' icon={linkedin} />
        </div>
      </div>
    </footer>
  )
}
