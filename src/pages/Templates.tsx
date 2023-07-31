import { Outlet } from 'react-router-dom'
import { TemplatesCard } from '../components/TemplatesCard'
import { useFlows } from '../hooks/useFlows'
import { useGlobalFlowStore } from '../hooks/useGlobalFlowsStore'

export function Templates () {
  const { allFlows } = useGlobalFlowStore()
  const { loading, error } = useFlows()

  if (loading) return <h1>Cargando...</h1>
  if (error) return <h1>Error</h1>

  return (
    <div className='px-[20px]'>
      <h1>Plantillas</h1>

      <div className='grid grid-cols-4 gap-4'>
        {
            allFlows.map(({ flowName, id }) => {
              return (
                <TemplatesCard key={id} flowName={flowName} id={id} />
              )
            })
        }
      </div>

      <Outlet />
    </div>
  )
}
