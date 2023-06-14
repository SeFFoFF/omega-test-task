'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import { Button } from '@src/components'
import './info-block.style.scss'

interface IInfoBlockProps {
  title: string
  text: string
  buttonText: string
}

export const InfoBlock = ({ title, text, buttonText }: IInfoBlockProps) => {
  const params = usePathname()

  return params === '/' ?
    (
      <div className='info-block'>
        <h2 className='info-block__title'>{title}</h2>
        <p className='info-block__text'>{text}</p>
        <div className='button-wrapper'>
          <button className='button info-block__button'>{buttonText}</button>
        </div>
      </div>
    ) :
    (
      <div className='page-info-block'>
        <h2 className='page-info-block__title'>{title}</h2>
      </div>
    )
}
