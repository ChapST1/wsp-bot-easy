import { AllFlow } from '@/types/allFlows'
import { useGlobalUserFlowsStore } from '../user/useGlobalUserFlowsStore'
import { useParams } from 'react-router-dom'

export function useFlowEditById () {
  const { userAllFlows } = useGlobalUserFlowsStore()
  const { id } = useParams()

  const findFlow = userAllFlows.find(flow => flow.id === id) as AllFlow ?? ''
  const { conversations, defaultValue, flowName } = findFlow

  return {
    conversations,
    defaultValue,
    flowName,
    id
  }
}
