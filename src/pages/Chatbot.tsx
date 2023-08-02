import { Outlet } from 'react-router-dom'
import { UserFlowCard } from '../components/UserFlowCard'
import { useGlobalUserFlowsStore } from '../hooks/useGlobalUserFlowsStore'
import { ChatbotBanner } from '../layouts/ChatbotBanner'

export function Chatbot () {
  const { userAllFlows } = useGlobalUserFlowsStore()

  return (
    <section>
      <ChatbotBanner />

      {
        userAllFlows.length > 0 && (
          <div className='px-[20px] flex flex-col gap-4 pt-4'>
            <h3 className='text-white text-center text-2xl py-2'>Tus Chatbots</h3>
            <div className='w-full justify-center flex flex-wrap gap-6 pb-5 '>
              {
              userAllFlows.map(({ flowName, id }) => {
                return <UserFlowCard key={id} flowName={flowName} id={id} />
              })
            }
            </div>
          </div>
        )
      }

      <Outlet />
    </section>
  )
}
