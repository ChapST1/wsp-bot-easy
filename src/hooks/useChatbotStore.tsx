import { useBotStore } from '../store/botStore'

export function useChatbotStore () {
  const isActiveCreateMode = useBotStore((state) => state.isActiveCreateMode)
  const updateIsActiveCreateMode = useBotStore((state) => state.updateIsActiveCreateMode)

  return {
    isActiveCreateMode,
    updateIsActiveCreateMode
  }
}
