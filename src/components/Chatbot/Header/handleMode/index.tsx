import { MoonIcon, SunIcon } from '@/components/Icons'
import { useGlobalHandleModeStore } from '@/hooks/handleMode/useGlobalHandleModeStore'
import { useEffect } from 'react'

export function HandleModeIcon () {
  const { mode, updateMode } = useGlobalHandleModeStore()

  const handleClick = () => {
    updateMode(!mode)
  }

  useEffect(() => {
    document.documentElement.classList.toggle('dark', mode)
  }, [mode])

  return (
    <div onClick={handleClick} className='w-9 select-none'>
      {
        mode ? (<SunIcon className=' w-7  stroke-primary-dark' />) : (<MoonIcon className=' w-7 stroke-primary' />)
     }
    </div>
  )
}
