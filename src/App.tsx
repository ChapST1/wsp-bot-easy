import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Toaster } from 'sonner'
import { ChatBotPages } from './pages/ChatbotPages'

function App () {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/*' element={<ChatBotPages />} />
        </Routes>

        <Toaster theme='dark' expand />
      </BrowserRouter>

    </>
  )
}

export default App
