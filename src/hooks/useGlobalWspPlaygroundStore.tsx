import { useWspPlaygroundStore } from '../store/wspPlaygroundStore'

export function useGlobalWspPlaygroundStore () {
  const botIsTyping = useWspPlaygroundStore((state) => state.botIsTyping)
  const currentMessages = useWspPlaygroundStore((state) => state.listOfCurrentMessages)
  const updateBotIsTyping = useWspPlaygroundStore((state) => state.updateBotIsTyping)
  const updateCurrentMessages = useWspPlaygroundStore((state) => state.updateListOfCurrentMessages)

  return {
    botIsTyping,
    currentMessages,
    updateBotIsTyping,
    updateCurrentMessages
  }
}
