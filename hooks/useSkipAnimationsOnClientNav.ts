'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export function useSkipAnimationsOnClientNav() {
  const pathname = usePathname()
  const [skipAnimations, setSkipAnimations] = useState(false)

  useEffect(() => {
    const lastPath = sessionStorage.getItem('lastClientPath')
    const isClientNav = lastPath?.startsWith('/clients/') && pathname.startsWith('/clients/')
    setSkipAnimations(!!isClientNav)
    sessionStorage.setItem('lastClientPath', pathname)
  }, [pathname])

  return skipAnimations
}
