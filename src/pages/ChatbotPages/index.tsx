import { Route, Routes } from 'react-router-dom'
import { Chatbot } from './Chatbot'
import { TemplatesDetail } from './TemplatesDetail'
import { Templates } from './Templates'
import { ChatbotPlayground } from './ChatbotPlayground'
import { ChatbotCreate } from '../../layouts/ChatbotLayouts/ChatbotCreate'
import { ChatbotPlaygroundContentMessage } from '../../components/Chatbot/Playground/ChatbotPlaygroundContentMessage'
import { Header } from '../../components/Chatbot/Header'

export function ChatBotPages () {
  return (
    <main className='pt-[80px]'>
      <Header />

      <Routes>
        <Route path='/chatbot' element={<Chatbot />}>
          <Route path=':id' element={<TemplatesDetail redirect='/chatbot' />} />
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
