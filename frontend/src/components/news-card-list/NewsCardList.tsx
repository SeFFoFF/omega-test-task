import React from 'react'
import { NewsCard } from '@src/components'
import './news-card-list.style.scss'

interface INews {
  id: number
  imageUrl: string
  title: string
  text: string
  shortText: string
}

const news: INews[] = [
  {
    id: 0,
    imageUrl: 'https://data.si/en/wp-content/uploads/2018/05/business-address-slovenia-europe-800x445.jpg',
    title: 'Kym Marsh, 42, becomes a grandmother for the first time as daughter Emilie Mae',
    text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium',
    shortText: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium'
  },
  {
    id: 1,
    imageUrl: 'https://www.indiafilings.com/learn/wp-content/uploads/2016/09/Company-Management.jpg',
    title: 'Kym Marsh, 42, becomes a grandmother for the first time as daughter Emilie Mae',
    text: 'At vero eos et accusamus et iusto odio dignissimos ducimus ntium. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium',
    shortText: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis'
  },
  {
    id: 2,
    imageUrl: 'https://m-cdn.phonearena.com/images/article/64576-wide-two_1200/The-Best-Phones-to-buy-in-2023---our-top-10-list.jpg',
    title: 'Kym Marsh, 42, becomes a grandmother for the first time as daughter Emilie Mae',
    text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium',
    shortText: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui et iusto odio dignissimos ducimus qui blanditiis praesentium'
  },
  {
    id: 3,
    imageUrl: 'https://media.zenfs.com/ko/setn.com.tw/494f7fc943843bcf4402f673a077b4d6',
    title: 'Kym Marsh, 42, becomes a grandmother for the first time as daughter Emilie Mae',
    text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium',
    shortText: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium odio dignissimos vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis prae'
  },
]

export const NewsCardList = () => {
  return (
    <div className='news-card-list'>
      {
        news.map(item => (
          <NewsCard
            key={item.id}
            id={item.id}
            imageUrl={item.imageUrl}
            title={item.title}
            shortText={item.shortText}
          />
        ))
      }
    </div>
  )
}
