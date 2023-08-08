import { Outlet } from 'react-router-dom'
import { ChatbotBanner } from '@components/Chatbot/ChatbotHome/ChatbotBanner'
import { UserFlowsList } from '@components/Chatbot/ChatbotHome/User/UserFlowsList'
import { useGlobalUserFlowsStore } from '@/hooks/user/useGlobalUserFlowsStore'

export function ChatbotHomeLayout () {
  const { userAllFlows } = useGlobalUserFlowsStore()

  return (
    <section>
      <ChatbotBanner />

      {
      userAllFlows.length > 0 && <UserFlowsList userAllFlows={userAllFlows} />
      }

      <Outlet />
    </section>
  )
}
