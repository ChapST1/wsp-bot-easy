import { Outlet } from 'react-router-dom'
import { TemplatesCard } from '@components/Chatbot/Templates/TemplatesCard'
import { useFlows } from '@/hooks/templates/useFlows'
import { useGlobalFlowStore } from '@/hooks/templates/useGlobalFlowsStore'

export function ChatbotTemplatesLayout () {
  const { allFlows } = useGlobalFlowStore()
  const { loading, error } = useFlows()

  if (error) return <h1>Error</h1>

  return (
    <div className='px-[20px]'>
      <h3 className='text-white text-center text-2xl py-4 pb-7'>Tienda de  Plantillas</h3>

      <div className='grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))]  gap-7'>
        {
            allFlows.map(({ flowName, id }) => {
              return (
                <TemplatesCard
                  key={id}
                  flowName={flowName}
                  id={id}
                  isLoading={loading}
                />
              )
            })
        }
      </div>

      <Outlet />
    </div>
  )
}
