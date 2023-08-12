import { Route, Routes } from 'react-router-dom'

import { ChatbotPlaygroundContentMessage } from '@components/Chatbot/Playground/ChatbotPlaygroundContentMessage'
import { ImageBlurHero } from '@components/ui/ImageBlurHero'
import { Header } from '@components/Chatbot/Header'

import { Chatbot } from '@/pages/ChatbotPages/home/Chatbot'
import { Templates } from '@/pages/ChatbotPages/templates/Templates'
import { ChatbotEdit } from '@/pages/ChatbotPages/edit/ChatbotEdit'
import { ChatbotCreate } from '@/pages/ChatbotPages/create/ChatbotCreate'
import { TemplatesDetail } from '@/pages/ChatbotPages/templates/TemplatesDetail'
import { ChatbotPlayground } from '@/pages/ChatbotPages/playground/ChatbotPlayground'
import { ChatbotUserFlowDetails } from '@pages/ChatbotPages/user/ChatbotUserFlowDetails'

import {
  ROUTE_CHATBOT_CREATE_PAGE,
  ROUTE_CHATBOT_EDIT_PAGE,
  ROUTE_CHATBOT_FLOW_DETAILS_PAGE,
  ROUTE_CHATBOT_PAGE,
  ROUTE_CHATBOT_TEMPLATES_DETAILS_PAGE,
  ROUTE_CHATBOT_TEMPLATES_PAGE,
  ROUTE_CHATBOT_TEST_DETAILS_PAGE,
  ROUTE_CHATBOT_TEST_PAGE
} from '@/routes'

export function ChatBotPages () {
  return (
    <main className='pt-[80px]'>
      <Header />
      <ImageBlurHero />

      <Routes>
        <Route path={ROUTE_CHATBOT_PAGE} element={<Chatbot />}>
          <Route path={ROUTE_CHATBOT_FLOW_DETAILS_PAGE} element={<ChatbotUserFlowDetails />} />
          <Route path={ROUTE_CHATBOT_EDIT_PAGE} element={<ChatbotEdit />} />
        </Route>

        <Route path={ROUTE_CHATBOT_CREATE_PAGE} element={<ChatbotCreate />} />
        <Route path={ROUTE_CHATBOT_TEMPLATES_PAGE} element={<Templates />}>
          <Route path={ROUTE_CHATBOT_TEMPLATES_DETAILS_PAGE} element={<TemplatesDetail />} />
        </Route>

        <Route path={ROUTE_CHATBOT_TEST_PAGE} element={<ChatbotPlayground />}>
          <Route path={ROUTE_CHATBOT_TEST_DETAILS_PAGE} element={<ChatbotPlaygroundContentMessage />} />
        </Route>
      </Routes>
    </main>
  )
}
