'use client'

import { createContext, useCallback, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

const ThemeContext = createContext<{ theme: Theme; toggle: () => void }>({
  theme: 'dark',
  toggle: () => {},
})

export const themeInitScript = `
(function(){try{
  var s=localStorage.getItem('aeternum-theme');
  var t=(s==='light'||s==='dark')?s:'dark';
  var c=document.documentElement.classList;
  c.remove('light','dark');
  c.add(t);
}catch(e){document.documentElement.classList.add('dark')}})();
`

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark')

  useEffect(() => {
    const stored = window.localStorage.getItem('aeternum-theme')
    if (stored === 'light' || stored === 'dark') setTheme(stored)
    else setTheme(document.documentElement.classList.contains('light') ? 'light' : 'dark')
  }, [])

  const toggle = useCallback(() => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark'
      window.localStorage.setItem('aeternum-theme', next)
      document.documentElement.classList.remove('light', 'dark')
      document.documentElement.classList.add(next)
      return next
    })
  }, [])

  return <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  return useContext(ThemeContext)
}
