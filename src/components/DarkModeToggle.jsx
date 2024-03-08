import { useState, useEffect } from 'react'
import Button from './ui/Button'

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const isDarkModeEnabled = localStorage.getItem('darkMode') === 'true'
    setDarkMode(isDarkModeEnabled)
  }, [])

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode)
    document.body.classList.toggle('dark', darkMode)
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode)
  }

  return (
    <Button variant='primary' onClick={toggleDarkMode}>
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </Button>
  )
}

export default DarkModeToggle
