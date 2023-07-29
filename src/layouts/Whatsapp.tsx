// import { ChatbotPlaygroundContentMessage } from '../components/ChatbotPlaygroundContentMessage'
import { ChatbotPlaygroundSidebar } from '../components/ChatbotPlaygroundSidebar'

import { Outlet } from 'react-router-dom'

export function Whatsapp () {
  return (
    <>
      <div className='grid grid-cols-7 h-full rounded-sm overflow-hidden bg-[#111b21] '>
        <ChatbotPlaygroundSidebar />
        <Outlet />
        {/* <ChatbotPlaygroundContentMessage /> */}
      </div>
    </>
  )
}
