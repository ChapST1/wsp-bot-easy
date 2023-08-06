import { Route, Routes } from 'react-router-dom'

import { ChatbotPlaygroundContentMessage } from '@components/Chatbot/Playground/ChatbotPlaygroundContentMessage'
import { ImageBlurHero } from '@components/ui/ImageBlurHero'
import { Header } from '@components/Chatbot/Header'

import { Chatbot } from '@pages/ChatbotPages/Chatbot'
import { Templates } from '@pages/ChatbotPages/Templates'
import { ChatbotEdit } from '@pages/ChatbotPages/ChatbotEdit'
import { ChatbotCreate } from '@pages/ChatbotPages/ChatbotCreate'
import { ChatbotPlayground } from '@pages/ChatbotPages/ChatbotPlayground'
import { TemplatesDetail } from '@pages/ChatbotPages/TemplatesDetail'

export function ChatBotPages () {
  return (
    <main className='pt-[80px]'>
      <Header />
      <ImageBlurHero />

      <Routes>
        <Route path='/chatbot' element={<Chatbot />}>
          <Route path=':id' element={<TemplatesDetail redirect='/chatbot' />} />
          <Route path=':id/editar' element={<ChatbotEdit />} />
        </Route>
        <Route path='/chatbot/crear' element={<ChatbotCreate />}>
          <Route path=':id' element={<ChatbotCreate />} />
        </Route>
        <Route path='/plantillas' element={<Templates />}>
          <Route path=':id' element={<TemplatesDetail redirect='/plantillas' />} />
        </Route>
        <Route path='/test' element={<ChatbotPlayground />}>
          <Route path=':id' element={<ChatbotPlaygroundContentMessage />} />
        </Route>
      </Routes>
    </main>
  )
}
