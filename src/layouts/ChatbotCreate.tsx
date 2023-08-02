import { useParams } from 'react-router-dom'
import { ChatbotCreateForm } from '../components/ChatbotCreateForm'

export function ChatbotCreate () {
  const { id } = useParams()
  return (
    <div className='py-[17px] text-white'>
      <ChatbotCreateForm editId={id} />
    </div>
  )
}
