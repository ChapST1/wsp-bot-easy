import { useChatbotStore } from '../hooks/useChatbotStore'
import { ChatbotBanner } from '../layouts/ChatbotBanner'
import { ChatbotCreate } from '../layouts/ChatbotCreate'

export function Chatbot () {
  const { isActiveCreateMode } = useChatbotStore()
  return (
    <section>
      {
        isActiveCreateMode ? <ChatbotCreate /> : <ChatbotBanner />
      }
    </section>
  )
}
