import { create } from 'zustand'

interface UseHandleModeStoreProps {
  mode: boolean
  updateMode: (newMode: boolean) => void
}

export const useHandleModeStore = create<UseHandleModeStoreProps>((set) => ({
  mode: false,
  updateMode: (newMode) => {
    set({ mode: newMode })
  }
}))
