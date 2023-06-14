'use client'

import { usePathname } from 'next/navigation'

export const useParams = () => {
  const router = usePathname()

  console.log(router)

  return router
}
