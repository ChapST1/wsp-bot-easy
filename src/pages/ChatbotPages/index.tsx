import { Route, Routes } from 'react-router-dom'

import { ChatbotPlaygroundContentMessage } from '@components/Chatbot/Playground/ChatbotPlaygroundContentMessage'
import { ImageBlurHero } from '@components/ui/ImageBlurHero'
import { Header } from '@components/Chatbot/Header'

import { Chatbot } from '@/pages/ChatbotPages/home/Chatbot'
import { Templates } from '@/pages/ChatbotPages/templates/Templates'
import { ChatbotEdit } from '@/pages/ChatbotPages/edit/ChatbotEdit'
import { ChatbotCreate } from '@/pages/ChatbotPages/create/ChatbotCreate'
import { ChatbotPlayground } from '@/pages/ChatbotPages/playground/ChatbotPlayground'
import { TemplatesDetail } from '@/pages/ChatbotPages/templates/TemplatesDetail'
import { ChatbotUserFlowDetails } from './user/ChatbotUserFlowDetails'

export function ChatBotPages () {
  return (
    <main className='pt-[80px]'>
      <Header />
      <ImageBlurHero />

      <Routes>
        <Route path='/chatbot' element={<Chatbot />}>
          <Route path=':id' element={<ChatbotUserFlowDetails />} />
          <Route path=':id/editar' element={<ChatbotEdit />} />
        </Route>
        <Route path='/chatbot/crear' element={<ChatbotCreate />}>
          <Route path=':id' element={<ChatbotCreate />} />
        </Route>
        <Route path='/plantillas' element={<Templates />}>
          <Route path=':id' element={<TemplatesDetail />} />
        </Route>
        <Route path='/test' element={<ChatbotPlayground />}>
          <Route path=':id' element={<ChatbotPlaygroundContentMessage />} />
        </Route>
      </Routes>
    </main>
  )
}
