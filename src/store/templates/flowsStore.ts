/*
  * La finalidad de este store es almacenar los siguientes datos:
  * allFlows => para almacenar todas las plantillas de flujos que se encuentra en
  * el archivo flows.json
*/

import { AllFlow as AllFlowTypes } from '../../types/allFlows'
import { allFlows } from '@public/templates/flows.json'

import { create } from 'zustand'
interface FlowStore {
  allFlows: AllFlowTypes[]
}

export const useFlowsStore = create<FlowStore>(() => ({
  allFlows
}))
