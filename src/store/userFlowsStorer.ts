import { create } from 'zustand'
import { AllFlow as AllFlowsTypes } from '../types/allFlows'

interface UserAllFlowsTypes {
  userAllFlows: AllFlowsTypes[]
  updateUserAllFlows: (newUserFlow: AllFlowsTypes) => void
  deleteUserFlow: (id: string) => void
  editUserFlow: (id: string, newUserFlow: AllFlowsTypes) => void
}

export const useUserFlowsStore = create<UserAllFlowsTypes>((set, get) => ({
  userAllFlows: [],
  updateUserAllFlows: (newUserFlow: AllFlowsTypes) => {
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
    const filteredFlows = userAllFlows.filter(flow => flow.id !== id)
    const newFlows = [...filteredFlows, newUserFlow]

    set({ userAllFlows: newFlows })
  }

}))
