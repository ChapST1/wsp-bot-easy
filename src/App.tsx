import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Chatbot } from './pages/Chatbot'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { Toaster } from 'sonner'
import { ChatbotPlayground } from './pages/ChatbotPlayground'
import { ChatbotPlaygroundContentMessage } from './components/ChatbotPlaygroundContentMessage'
import { Templates } from './pages/Templates'
import { TemplatesDetail } from './pages/TemplatesDetail'
import { ChatbotCreate } from './layouts/ChatbotCreate'

function App () {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path='/' element={<Home />} />

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

        <Toaster theme='dark' expand />
      </BrowserRouter>
    </>
  )
}

export default App
