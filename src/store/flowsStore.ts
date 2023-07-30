import { create } from 'zustand'
import { AllFlow as AllFlowTypes } from '../types/allFlows'

interface FlowStore {
  allFlows: AllFlowTypes[]
  botIsTyping: boolean
  listOfCurrentMessages: CurrentMessage[] | []

  updateAllFlows: (newFlows: AllFlowTypes[]) => void
  updateListOfCurrentMessages: (newListOfCurrentMessages: CurrentMessage | null) => void
  updateBotIsTyping: (newBotIsTyping: boolean) => void

}

interface CurrentMessage {
  message: string
  made: string
  timestamp: string
}

export const useFlowsStore = create<FlowStore>((set, get) => ({
  allFlows: [],
  botIsTyping: false,
  listOfCurrentMessages: [],

  updateAllFlows (newFlows) {
    set({ allFlows: newFlows })
  },

  updateListOfCurrentMessages (newListOfCurrentMessages) {
    if (newListOfCurrentMessages === null) {
      set({ listOfCurrentMessages: [] })
      return
    }

    const { listOfCurrentMessages } = get()
    set({ listOfCurrentMessages: [...listOfCurrentMessages, newListOfCurrentMessages] })
  },

  updateBotIsTyping (newBotIsTyping) {
    set({ botIsTyping: newBotIsTyping })
  }

}))
