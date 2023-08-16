import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '@pages/Home'
import { Toaster } from 'sonner'
import { ChatBotPages } from '@pages/ChatbotPages'
import { Login } from '@pages/Login'

import { ROUTE_HOME_PAGE, ROUTE_LOGIN_PAGE } from './routes'

function App () {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTE_HOME_PAGE} element={<Home />} />
          <Route path={ROUTE_LOGIN_PAGE} element={<Login />} />
          <Route path='/*' element={<ChatBotPages />} />
        </Routes>
        <Toaster theme='dark' />
      </BrowserRouter>

    </>
  )
}

export default App
