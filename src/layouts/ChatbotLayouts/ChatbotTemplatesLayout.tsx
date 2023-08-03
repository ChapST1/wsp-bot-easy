import { Outlet } from 'react-router-dom'
import { TemplatesCard } from '../../components/Chatbot/Templates/TemplatesCard'
import { useFlows } from '../../hooks/useFlows'
import { useGlobalFlowStore } from '../../hooks/useGlobalFlowsStore'

export function ChatbotTemplatesLayout () {
  const { allFlows } = useGlobalFlowStore()
  const { loading, error } = useFlows()

  if (loading) return <h1>Cargando...</h1>
  if (error) return <h1>Error</h1>

  return (
    <div className='px-[20px]'>
      <h3 className='text-white text-center text-2xl pb-3'>Tienda de  Plantillas</h3>

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
