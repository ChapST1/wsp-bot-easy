import { UserFlowCard } from '../components/UserFlowCard'
import { useChatbotStore } from '../hooks/useChatbotStore'
import { useGlobalUserFlowsStore } from '../hooks/useGlobalUserFlowsStore'
import { ChatbotBanner } from '../layouts/ChatbotBanner'
import { ChatbotCreate } from '../layouts/ChatbotCreate'

export function Chatbot () {
  const { isActiveCreateMode } = useChatbotStore()
  const { userAllFlows } = useGlobalUserFlowsStore()

  return (
    <section>
      {
        isActiveCreateMode ? <ChatbotCreate /> : <ChatbotBanner />
      }

      {
        userAllFlows.length > 0 && (
          <div className='px-[20px]'>
            <h3 className='text-white text-3xl py-2'>Tus Chatbots</h3>
            <div className='mt-4 flex gap-4'>
              {
              userAllFlows.map(({ flowName, id }) => {
                return <UserFlowCard key={id} flowName={flowName} id={id} />
              })
            }
            </div>
          </div>
        )
      }
    </section>
  )
}
