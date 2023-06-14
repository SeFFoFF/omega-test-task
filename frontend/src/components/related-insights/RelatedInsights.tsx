import React from 'react'
import { NewsCardList } from '@src/components'
import './related-insights.style.scss'

export const RelatedInsights = () => {
  return (
    <div className='related-insights'>
      <h2 className='related-insights__title'>Related Insights</h2>
      <NewsCardList/>
    </div>
  )
}
