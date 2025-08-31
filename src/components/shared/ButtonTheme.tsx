import { useTheme } from '@/context/ThemeContext'
import { Button } from '../ui'
import { Moon, Sun } from 'lucide-react'

export const ButtonTheme = () => {
  const { theme, toggleTheme } = useTheme()

  const isDark = theme === 'dark'
  const Icon = isDark ? Sun : Moon
  const label = isDark ? 'Light Mode' : 'Dark Mode'
  
  return (
    <Button
      variant='outline'
      onClick={toggleTheme}
      className='cursor-pointer flex items-center gap-2 md:w-40'
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <Icon className='h-4 w-4' />
      {label}
    </Button>
  )
}
