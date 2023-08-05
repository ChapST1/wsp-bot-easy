import { useUserFlowsStore } from '../store/userFlowsStorer'

export function useGlobalUserFlowsStore () {
  const userAllFlows = useUserFlowsStore((state) => state.userAllFlows)
  const updateUserAllFlows = useUserFlowsStore((state) => state.updateUserAllFlows)
  const deleteFromUserFlows = useUserFlowsStore((state) => state.deleteUserFlow)
  const editFromUserFlows = useUserFlowsStore((state) => state.editUserFlow)

  return {
    userAllFlows,
    updateUserAllFlows,
    deleteFromUserFlows,
    editFromUserFlows
  }
}
