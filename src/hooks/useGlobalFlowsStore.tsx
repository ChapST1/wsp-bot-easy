import { useFlowsStore } from '../store/flowsStore'

export function useGlobalFlowStore () {
  const allFlows = useFlowsStore((state) => state.allFlows)
  const updateAllFlows = useFlowsStore((state) => state.updateAllFlows)

  return {
    allFlows,
    updateAllFlows
  }
}
