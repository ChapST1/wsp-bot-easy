import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Chatbot } from './pages/Chatbot'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { Toaster } from 'sonner'
import { ChatbotPlayground } from './pages/ChatbotPlayground'

function App () {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/chatbot' element={<Chatbot />} />
          <Route path='/plantillas' element={<h1>Plantillas</h1>} />
          <Route path='/test' element={<ChatbotPlayground />} />
        </Routes>

        <Toaster theme='dark' />
      </BrowserRouter>
    </>
  )
}

export default App
