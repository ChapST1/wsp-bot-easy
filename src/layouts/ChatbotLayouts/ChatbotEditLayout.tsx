import { ChatbotEditForm } from '../../components/Chatbot/Edit/ChatbotEditForm'

export function ChatbotEditLayout () {
  return (
    <section
      className='w-full h-[calc(100%-70px)] fixed top-[70px] left-0 bg-[#000000] overflow-y-scroll flex items-start justify-center '
    >
      <ChatbotEditForm />
    </section>
  )
}
