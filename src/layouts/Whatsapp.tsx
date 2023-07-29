import { ChatbotPlaygroundContentMessage } from '../components/ChatbotPlaygroundContentMessage'
import { ChatbotPlaygroundSidebar } from '../components/ChatbotPlaygroundSidebar'

export function Whatsapp () {
  return (
    <>
      <div className='grid grid-cols-7 h-full rounded-sm overflow-hidden bg-[#111b21] '>
        <ChatbotPlaygroundSidebar />
        <ChatbotPlaygroundContentMessage />
      </div>
    </>
  )
}
