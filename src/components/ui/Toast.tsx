import { useGlobalHandleModeStore } from '@/hooks/handleMode/useGlobalHandleModeStore'
import { Toaster } from 'sonner'

export function Toast () {
  const { mode } = useGlobalHandleModeStore()

  return (
    <Toaster theme={mode ? 'dark' : 'light'} />
  )
}
