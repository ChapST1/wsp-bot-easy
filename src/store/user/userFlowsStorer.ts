/*
  * La finalidad de este store es almacenar los siguientes datos:
  * userAllFlows => para almacenar todos los flujos que el usuario va creando o si usa un plantilla.
  *
  * addNewUserFlow => para agregar un nuevo flujo al store
  * deleteUserFlow => para eliminar un flujo del store
  * editUserFlow => para editar un flujo del store
  *
  * El persist es para que los datos no se pierdan al recargar la
  * pagina es un metodo de zustand para guardar el estado en el localstorage
*/

import { AllFlow as AllFlowsTypes } from '../../types/allFlows'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface UserAllFlowsTypes {
  userAllFlows: AllFlowsTypes[]
  addNewUserFlow: (newUserFlow: AllFlowsTypes) => void
  deleteUserFlow: (id: string) => void
  editUserFlow: (id: string | undefined, newUserFlow: AllFlowsTypes) => void
}

export const useUserFlowsStore = create(persist<UserAllFlowsTypes>(
  (set, get) => ({
    userAllFlows: [],
    addNewUserFlow: (newUserFlow: AllFlowsTypes) => {
      const { userAllFlows } = get()
      // not repeat values ->  cuando se agrega un nuevo flujo y tiene el mismo nombre que uno ya existente
      const notRepeatFlows = Array.from(new Set([...userAllFlows, newUserFlow]))
      set({ userAllFlows: notRepeatFlows })
    },

    deleteUserFlow: (id) => {
      const { userAllFlows } = get()
      const filteredFlows = userAllFlows.filter(flow => flow.id !== id)

      set({ userAllFlows: filteredFlows })
    },

    editUserFlow: (id, newUserFlow) => {
      const { userAllFlows } = get()
      const findIndexById = userAllFlows.findIndex(flow => flow.id === id)
      const filteredFlows = userAllFlows.filter(flow => flow.id !== id)
      const newFlows = [...filteredFlows]
      newFlows.splice(findIndexById, 0, newUserFlow)

      set({ userAllFlows: newFlows })
    }

  })
  , {
    name: 'userAllFlows'
  }))
