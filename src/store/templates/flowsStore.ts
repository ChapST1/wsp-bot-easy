import { AllFlow as AllFlowTypes } from '../../types/allFlows'

import { create } from 'zustand'

interface FlowStore {
  allFlows: AllFlowTypes[]
  updateAllFlows: (newFlows: AllFlowTypes[]) => void
}

export const useFlowsStore = create<FlowStore>((set) => ({
  allFlows: [],
  updateAllFlows: (newFlows) => {
    set({ allFlows: newFlows })
  }

}))
