import { create } from 'zustand'

interface BotStore {
  isActiveCreateMode: boolean
  updateIsActiveCreateMode: (isActiveCreateMode: boolean) => void
}

export const useBotStore = create<BotStore>((set, get) => ({
  isActiveCreateMode: false,

  updateIsActiveCreateMode (isActiveCreateMode: boolean) {
    set({ isActiveCreateMode })
  }
}))
