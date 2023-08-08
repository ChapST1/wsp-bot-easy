import { useUserFlowsStore } from '@/store/user/userFlowsStorer'

export function useGlobalUserFlowsStore () {
  const userAllFlows = useUserFlowsStore((state) => state.userAllFlows)
  const addNewUserFlow = useUserFlowsStore((state) => state.addNewUserFlow)
  const deleteFromUserFlows = useUserFlowsStore((state) => state.deleteUserFlow)
  const editFromUserFlows = useUserFlowsStore((state) => state.editUserFlow)

  return {
    userAllFlows,
    addNewUserFlow,
    deleteFromUserFlows,
    editFromUserFlows
  }
}
