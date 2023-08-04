import { Outlet } from 'react-router-dom'
import { ChatbotPlaygroundSidebar } from './ChatbotPlaygroundSidebar'

export function Whatsapp () {
  return (
    <section className='w-full h-full'>
      <div className='grid grid-cols-7 h-full rounded-sm overflow-hidden bg-[#111b21] '>
        <ChatbotPlaygroundSidebar />
        <Outlet />
      </div>
    </section>
  )
}