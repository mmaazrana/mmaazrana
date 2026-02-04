import { useEffect, useMemo, useState } from 'react'
import { useMediaQuery } from 'react-responsive'

const COLOR_SCHEME_KEY = 'colorScheme'

function usePersistedBoolean(key: string) {
  const [state, setState] = useState<boolean | undefined>(undefined)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const stored = window.localStorage.getItem(key)
    if (stored === null) return
    setState(stored === 'true')
  }, [key])

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (state === undefined) return
    window.localStorage.setItem(key, String(state))
  }, [key, state])

  return [state, setState] as const
}

export function useColorScheme() {
  const systemPrefersDark = useMediaQuery({ query: '(prefers-color-scheme: dark)' }, undefined)

  const [isDark, setIsDark] = usePersistedBoolean(COLOR_SCHEME_KEY)
  const value = useMemo(
    () => (isDark === undefined ? systemPrefersDark : isDark),
    [isDark, systemPrefersDark],
  )

  useEffect(() => {
    if (value) {
      document.body.classList.remove('light')
      document.body.classList.add('dark')
      document.documentElement.classList.remove('light')
      document.documentElement.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
      document.body.classList.add('light')
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('light')
    }
  }, [value])

  return { isDark: value, setIsDark }
}
