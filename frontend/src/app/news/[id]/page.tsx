import React from 'react'
import { Button, RelatedInsights } from '@src/components'
import './page.style.scss'

interface IPageProps {
  id: string
}

const text: string = 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium'

const NewsPage = ({ params }: IPageProps) => {
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
