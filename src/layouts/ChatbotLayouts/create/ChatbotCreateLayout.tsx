import { useParams } from 'react-router-dom'
import { ChatbotCreateForm } from '@components/Chatbot/Create/ChatbotCreateForm'

export function ChatbotCreateLayout () {
  const { id } = useParams()

  return (
    <div className='py-[17px] text-white'>
      <ChatbotCreateForm editId={id} />
    </div>
  )
}
