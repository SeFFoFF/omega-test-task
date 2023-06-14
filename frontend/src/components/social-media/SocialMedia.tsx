import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface ISocialMediaProps {
  href: string
  icon: string
}

export const SocialMedia = ({ href, icon }: ISocialMediaProps) => {
  return (
    <Link className='social-media' href={href}>
      <Image className='social-media__image' src={icon} alt='facebook-icon' />
    </Link>
  )
}
