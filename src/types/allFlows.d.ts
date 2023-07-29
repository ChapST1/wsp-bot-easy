export interface AllFlows {
  allFlows: AllFlow[]
}

export interface AllFlow {
  id: number
  flowName: string
  conversations: Conversation[]
}

export interface Conversation {
  trigger: Trigger
}

export interface Trigger {
  nombre: string
  respuesta: string
}
