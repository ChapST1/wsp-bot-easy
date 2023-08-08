import { useWspPlaygroundStore } from '@/store/playground/wspPlaygroundStore'

export function useGlobalWspPlaygroundStore () {
  const botIsTyping = useWspPlaygroundStore((state) => state.botIsTyping)
  const isActiveFullScreen = useWspPlaygroundStore((state) => state.isActiveFullScreen)
  const currentMessages = useWspPlaygroundStore((state) => state.listOfCurrentMessages)

  const updateBotIsTyping = useWspPlaygroundStore((state) => state.updateBotIsTyping)
  const updateCurrentMessages = useWspPlaygroundStore((state) => state.updateListOfCurrentMessages)
  const updateIsActiveFullScreen = useWspPlaygroundStore((state) => state.updateIsActiveFullScreen)

  return {
    botIsTyping,
    isActiveFullScreen,
    currentMessages,
    updateBotIsTyping,
    updateIsActiveFullScreen,
    updateCurrentMessages
  }
}
