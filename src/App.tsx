import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '@pages/Home'
import { Toaster } from 'sonner'
import { ChatBotPages } from '@pages/ChatbotPages'
import { Login } from '@pages/Login'

function App () {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/*' element={<ChatBotPages />} />
        </Routes>

        <Toaster theme='dark' expand />
      </BrowserRouter>

    </>
  )
}

export default App
