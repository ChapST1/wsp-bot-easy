import { useFlowsStore } from '@/store/templates/flowsStore'

export function useGlobalFlowStore () {
  const allFlows = useFlowsStore((state) => state.allFlows)

  return {
    allFlows
  }
}
