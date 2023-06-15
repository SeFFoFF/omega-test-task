'use client'

import React from 'react'
import { Button, RelatedInsights } from '@src/components'
import { useFetch } from '@src/hooks/useFetch'
import './page.style.scss'

const NewsPage = ({ params }: { id: number }) => {
  const { id } = params
  const URL = `http://localhost:3000/api/news/${id}`

  const { data: news } = useFetch(URL)

  const text = news.length !== 0 ? news[0].text : 'Loading...'

  return (
    <main className='news-page__main'>
      <div className='content-wrapper'>
        <p className='content-wrapper__text'>{text}</p>

        <Button text='Download Full Report' className='content-wrapper__button' />
      </div>

      <RelatedInsights />
    </main>
  )
}

export default NewsPage
