import { useFlowsStore } from '../store/flowsStore'

export function useGlobalFlowStore () {
  const allFlows = useFlowsStore((state) => state.allFlows)
  const botIsTyping = useFlowsStore((state) => state.botIsTyping)
  const currentMessages = useFlowsStore((state) => state.listOfCurrentMessages)

  const updateAllFlows = useFlowsStore((state) => state.updateAllFlows)
  const updateBotIsTyping = useFlowsStore((state) => state.updateBotIsTyping)
  const updateCurrentMessages = useFlowsStore((state) => state.updateListOfCurrentMessages)

  return {
    allFlows,
    botIsTyping,
    currentMessages,

    updateAllFlows,
    updateBotIsTyping,
    updateCurrentMessages
  }
}
