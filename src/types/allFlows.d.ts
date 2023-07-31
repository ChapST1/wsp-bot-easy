export interface AllFlows {
  allFlows: AllFlow[]
}

export interface AllFlow {
  id: string
  flowName: string
  defaultValue: string
  conversations: Conversation[]
}

export interface Conversation {
  trigger: Trigger
}

export interface Trigger {
  name: string
  response: string
}
