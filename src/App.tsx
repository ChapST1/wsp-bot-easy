import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Chatbot } from './pages/Chatbot'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { Toaster } from 'sonner'
import { ChatbotPlayground } from './pages/ChatbotPlayground'
import { ChatbotPlaygroundContentMessage } from './components/ChatbotPlaygroundContentMessage'
import { Templates } from './pages/Templates'
import { TemplatesDetail } from './pages/TemplatesDetail'

function App () {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/chatbot' element={<Chatbot />} />

          <Route path='/plantillas' element={<Templates />}>
            <Route path=':id' element={<TemplatesDetail />} />
          </Route>

          <Route path='/test' element={<ChatbotPlayground />}>
            <Route path=':id' element={<ChatbotPlaygroundContentMessage />} />
          </Route>
        </Routes>

        <Toaster theme='dark' />
      </BrowserRouter>
    </>
  )
}

export default App
