/*
  * La finalidad de este store es almacenar los siguientes datos:
  * botIsTyping => para saber si el bot esta escribiendo (respondiendo) o no
  * isActiveFullScreen => para saber si el componente Chatbot/playground esta en modo pantalla completa o no
  * listOfCurrentMessages => para almacenar los mensajes que se van enviando y recibiendo
*/

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
