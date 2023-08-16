import { Outlet } from 'react-router-dom'
import { ChatbotPlaygroundSidebar } from '@components/Chatbot/Playground/ChatbotPlaygroundSidebar'

export function Whatsapp () {
  return (
    <section className='w-full h-full'>
      <div className='grid grid-cols-7 h-full rounded-sm overflow-hidden bg-whatsapp-bg dark:bg-whatsapp-bg-dark '>
        <ChatbotPlaygroundSidebar />
        <Outlet />
      </div>
    </section>
  )
}
