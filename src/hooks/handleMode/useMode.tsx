import { useEffect } from 'react'
import { useGlobalHandleModeStore } from './useGlobalHandleModeStore'

export function useMode () {
  const { mode } = useGlobalHandleModeStore()

  useEffect(() => {
    document.documentElement.classList.toggle('dark', mode)
  }, [mode])
}
