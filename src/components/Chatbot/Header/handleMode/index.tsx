import { MoonIcon, SunIcon } from '@/components/Icons'
import { useGlobalHandleModeStore } from '@/hooks/handleMode/useGlobalHandleModeStore'
import { useMode } from '@/hooks/handleMode/useMode'

export function HandleModeIcon () {
  useMode()
  const { mode, updateMode } = useGlobalHandleModeStore()

  const handleClick = () => {
    updateMode(!mode)
  }

  return (
    <div onClick={handleClick} className='w-9 select-none'>
      {
        mode ? (<SunIcon className=' w-7  stroke-primary-dark' />) : (<MoonIcon className=' w-7 stroke-primary' />)
     }
    </div>
  )
}
