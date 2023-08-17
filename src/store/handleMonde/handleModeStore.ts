import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface UseHandleModeStoreProps {
  mode: boolean
  updateMode: (newMode: boolean) => void
}

export const useHandleModeStore = create(persist<UseHandleModeStoreProps>(
  (set) => ({
    mode: false,
    updateMode: (newMode) => {
      set({ mode: newMode })
    }
  }), {
    name: 'mode'
  }
))
