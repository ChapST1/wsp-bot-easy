import { create } from 'zustand'
import { AllFlow as AllFlowTypes } from '../types/allFlows'

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
