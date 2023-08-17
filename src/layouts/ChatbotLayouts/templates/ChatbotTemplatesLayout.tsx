import { Outlet } from 'react-router-dom'
import { TemplatesCard } from '@components/Chatbot/Templates/TemplatesCard'
import { useGlobalFlowStore } from '@/hooks/templates/useGlobalFlowsStore'
import { Error } from '@/components/ui/Error'
import { Title } from '@/components/ui/Title'

export function ChatbotTemplatesLayout () {
  const { allFlows } = useGlobalFlowStore()

  if (allFlows.length === 0) return <Error />

  return (
    <div className='px-[20px]'>
      <Title position='center'>Tienda de  Plantillas</Title>

      <div className='grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))]  gap-7 mt-4'>
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
