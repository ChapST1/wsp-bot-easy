import { create } from 'zustand'

interface useWspPlaygroundStoreTypes {
  botIsTyping: boolean
  isActiveFullScreen: boolean
  listOfCurrentMessages: CurrentMessage[] | []
  updateListOfCurrentMessages: (newListOfCurrentMessages: CurrentMessage | null) => void
  updateBotIsTyping: (newBotIsTyping: boolean) => void
  updateIsActiveFullScreen: (newIsActiveFullScreen: boolean) => void
}

interface CurrentMessage {
  message: string
  made: string
  timestamp: string
}

export const useWspPlaygroundStore = create<useWspPlaygroundStoreTypes>((set, get) => ({
  botIsTyping: false,
  isActiveFullScreen: false,
  listOfCurrentMessages: [],

  updateBotIsTyping: (newBotIsTyping) => {
    set({ botIsTyping: newBotIsTyping })
  },

  updateIsActiveFullScreen: (newIsActiveFullScreen) => {
    set({ isActiveFullScreen: newIsActiveFullScreen })
  },

  updateListOfCurrentMessages: (newListOfCurrentMessages) => {
    if (newListOfCurrentMessages === null) {
      set({ listOfCurrentMessages: [] })
      return
    }

    const { listOfCurrentMessages } = get()
    set({ listOfCurrentMessages: [...listOfCurrentMessages, newListOfCurrentMessages] })
  }
}))
