
import { useFlowEditById } from '@/hooks/useFlowEditById'
import { ChatboEditFormConversations } from './ChatbotEditFormConversations'
import { ChatbotEditFormInitialsInputs } from './ChatbotEditFormInitialsInputs'
import { ChatbotEditFormHeader } from './ChatbotEditFormHeader'

export function ChatbotEditForm () {
  const { conversations, defaultValue, flowName } = useFlowEditById()
  if (!conversations && !defaultValue && !flowName) return (<p>No se encontro la id</p>)

  /* 👆 eliminar cuando se guarder el stado en local storage con zustand */

  return (
    <div>
      <ChatbotEditFormHeader />
      <ChatbotEditFormInitialsInputs />
      <span className='block my-7 h-[2px] bg-white/5 w-[90%] m-auto' /> {/* this is a divider */}
      <ChatboEditFormConversations />
    </div>
  )
}
