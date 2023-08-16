import { useHandleModeStore } from '@/store/handleMonde/handleModeStore'

export function useGlobalHandleModeStore () {
  const mode = useHandleModeStore((state) => state.mode)
  const updateMode = useHandleModeStore((state) => state.updateMode)

  return {
    mode,
    updateMode
  }
}
