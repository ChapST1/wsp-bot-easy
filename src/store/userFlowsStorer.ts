import { create } from 'zustand'
import { AllFlow as AllFlowsTypes } from '../types/allFlows'

interface UserAllFlowsTypes {
  userAllFlows: AllFlowsTypes[]
  updateUserAllFlows: (newUserFlow: AllFlowsTypes) => void
}

export const useUserFlowsStore = create<UserAllFlowsTypes>((set, get) => ({
  userAllFlows: [],
  updateUserAllFlows: (newUserFlow: AllFlowsTypes) => {
    const { userAllFlows } = get()
    // not repeat values
    const notRepeatFlows = Array.from(new Set([...userAllFlows, newUserFlow]))
    set({ userAllFlows: notRepeatFlows })
  }

}))
