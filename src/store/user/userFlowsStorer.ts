import { AllFlow as AllFlowsTypes } from '../../types/allFlows'

import { create } from 'zustand'

interface UserAllFlowsTypes {
  userAllFlows: AllFlowsTypes[]
  addNewUserFlow: (newUserFlow: AllFlowsTypes) => void
  deleteUserFlow: (id: string) => void
  editUserFlow: (id: string | undefined, newUserFlow: AllFlowsTypes) => void
}

export const useUserFlowsStore = create<UserAllFlowsTypes>((set, get) => ({
  userAllFlows: [],
  addNewUserFlow: (newUserFlow: AllFlowsTypes) => {
    const { userAllFlows } = get()
    // not repeat values
    const notRepeatFlows = Array.from(new Set([...userAllFlows, newUserFlow]))
    set({ userAllFlows: notRepeatFlows })
  },

  deleteUserFlow: (id) => {
    const { userAllFlows } = get()
    const filteredFlows = userAllFlows.filter(flow => flow.id !== id)

    set({ userAllFlows: filteredFlows })
  },

  editUserFlow: (id, newUserFlow) => {
    const { userAllFlows } = get()
    const findIndexById = userAllFlows.findIndex(flow => flow.id === id)
    const filteredFlows = userAllFlows.filter(flow => flow.id !== id)
    const newFlows = [...filteredFlows]
    newFlows.splice(findIndexById, 0, newUserFlow)

    set({ userAllFlows: newFlows })
  }

}))
