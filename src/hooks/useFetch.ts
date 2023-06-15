'use client'

import { useEffect, useState } from 'react'

interface INews {
  id: number
  imageUrl: string
  title: string
  text: string
  shortText: string
}

interface IUseFetch {
  isLoading: boolean
  error: string
  data: INews[]
}

export const useFetch = (url: string): IUseFetch => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const [data, setData] = useState<INews[]>([])

  useEffect(() => {
    const getData = async (url) => {
      setIsLoading(true)
      try {
        const response = await fetch(url)
        const data = await response.json()
        setData(data.news)
        setIsLoading(false)
      } catch (error) {
        setIsLoading(false)
        setError(error)
      }
    }
    getData(url)
  }, [url])

  return { isLoading, error, data }
}
