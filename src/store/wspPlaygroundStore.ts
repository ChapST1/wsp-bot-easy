import { create } from 'zustand'

interface useWspPlaygroundStoreTypes {
  botIsTyping: boolean
  listOfCurrentMessages: CurrentMessage[] | []
  updateListOfCurrentMessages: (newListOfCurrentMessages: CurrentMessage | null) => void
  updateBotIsTyping: (newBotIsTyping: boolean) => void
}

interface CurrentMessage {
  message: string
  made: string
  timestamp: string
}

export const useWspPlaygroundStore = create<useWspPlaygroundStoreTypes>((set, get) => ({
  botIsTyping: false,
  listOfCurrentMessages: [],

  updateListOfCurrentMessages: (newListOfCurrentMessages) => {
    if (newListOfCurrentMessages === null) {
      set({ listOfCurrentMessages: [] })
      return
    }

    const { listOfCurrentMessages } = get()
    set({ listOfCurrentMessages: [...listOfCurrentMessages, newListOfCurrentMessages] })
  },

  updateBotIsTyping: (newBotIsTyping) => {
    set({ botIsTyping: newBotIsTyping })
  }
}))
