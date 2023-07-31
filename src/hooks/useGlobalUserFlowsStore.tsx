import { useUserFlowsStore } from '../store/userFlowsStorer'

export function useGlobalUserFlowsStore () {
  const userAllFlows = useUserFlowsStore((state) => state.userAllFlows)
  const updateUserAllFlows = useUserFlowsStore((state) => state.updateUserAllFlows)

  return {
    userAllFlows,
    updateUserAllFlows

  }
}
