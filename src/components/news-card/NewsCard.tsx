'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import arrow from '@public/arrow.svg'
import './news-card.style.scss'

interface INewsCardProps {
  id: number
  imageUrl: string
  title: string
  shortText: string
}

export const NewsCard = ({ id, imageUrl, shortText, title }: INewsCardProps) => {
  const [isOpened, setIsOpened] = useState(false)

  const toggleShowMoreButton = () => {
    setIsOpened(prevState => !prevState)
  }

  const isNeedToShowToggle = shortText.length > 95

  return (
    <div className='news-card'>
      <Image className='news-card__image' src={imageUrl} alt={title} width={274} height={167}/>

      <Link
        className={isOpened ? 'news-card__content-wrapper news-card__content-wrapper--active' : 'news-card__content-wrapper'}
        href={`/news/${id}`}
        scroll
      >
        <h3 className='news-card__title'>{title}</h3>
        <p className='news-card__short-text'>{shortText}</p>
      </Link>

      <div className={'show-more-button'} onClick={toggleShowMoreButton}>
        {
          isNeedToShowToggle &&
            <>
              <Image
                className={isOpened ? 'show-more-button__arrow show-more-button__arrow--active' : 'show-more-button__arrow'}
                src={arrow}
                alt='arrow'
                width={8}
                height={12}
              />
              <p className='show-more-button__text'>
                { isOpened ? 'Show less' : 'Show more' }
              </p>
            </>
        }
      </div>
    </div>
  )
}
