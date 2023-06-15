'use client'

import React from 'react'
import { Loader, NewsCard } from '@src/components'
import { useFetch } from '@src/hooks/useFetch'
import './news-card-list.style.scss'

const URL = 'http://localhost:3000/api/news'

export const NewsCardList = () => {
  const { isLoading, error, data: news } = useFetch(URL)

  const renderNewsList = () => {
    if (isLoading) return <Loader />
    if (error) return <div>{error}</div>

    return news.map(item => (
      <NewsCard
        key={item.id}
        id={item.id}
        imageUrl={item.imageUrl}
        title={item.title}
        shortText={item.shortText}
      />
    ))
  }

  return (
    <div className='news-card-list'>
      {
        renderNewsList()
      }
    </div>
  )
}
