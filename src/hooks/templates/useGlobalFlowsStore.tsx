import { useFlowsStore } from '@/store/templates/flowsStore'

export function useGlobalFlowStore () {
  const allFlows = useFlowsStore((state) => state.allFlows)
  const updateAllFlows = useFlowsStore((state) => state.updateAllFlows)

  return {
    allFlows,
    updateAllFlows
  }
}
