import React from 'react'
import Image from 'next/image'
import { Header, InfoBlock } from '@src/components'
import bgImage from '@public/hero-section__bg.jpg'
import './hero-section.style.scss'

export const HeroSection = () => {
  return (
    <section className='hero-section'>
      <div className='container'>
        <Header />
        <div className='content'>
          <InfoBlock
            title='Workforce Survey'
            text='At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi'
            buttonText='Start Now'
          />
        </div>
      </div>

      <Image
        className='bg-image'
        src={bgImage}
        alt='bg-image'
      />
    </section>
  )
}
