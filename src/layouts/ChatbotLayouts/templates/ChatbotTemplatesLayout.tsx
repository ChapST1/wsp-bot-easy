import { Outlet } from 'react-router-dom'
import { TemplatesCard } from '@components/Chatbot/Templates/TemplatesCard'
import { useGlobalFlowStore } from '@/hooks/templates/useGlobalFlowsStore'
import { Error } from '@/components/ui/Error'

export function ChatbotTemplatesLayout () {
  const { allFlows } = useGlobalFlowStore()

  if (allFlows.length === 0) return <Error />

  return (
    <div className='px-[20px]'>
      <h3 className='text-[#eaeaea] text-center text-2xl py-4 pb-7'>Tienda de  Plantillas</h3>

      <div className='grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))]  gap-7'>
        {
            allFlows.map(({ flowName, id }) => {
              return (
                <TemplatesCard
                  key={id}
                  flowName={flowName}
                  id={id}
                />
              )
            })
        }
      </div>

      <Outlet />
    </div>
  )
}
