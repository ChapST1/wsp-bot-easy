import { getFlows } from '@services/getFlows'
import { useState, useEffect } from 'react'
import { useGlobalFlowStore } from '@hooks/useGlobalFlowsStore'

export function useFlows () {
  const { updateAllFlows } = useGlobalFlowStore()

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setLoading(true)
    getFlows()
      .then((res) => updateAllFlows(res))
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }, []) // eslint-disable-line

  return {
    loading,
    error
  }
}
