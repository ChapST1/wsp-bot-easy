
import { useFlowEditById } from '@/hooks/edit/useFlowEditById'
import { ChatboEditFormConversations } from './ChatbotEditFormConversations'
import { ChatbotEditFormInitialsInputs } from './ChatbotEditFormInitialsInputs'
import { ChatbotEditFormHeader } from './ChatbotEditFormHeader'
import { Error } from '@/components/ui/Error'

export function ChatbotEditForm () {
  const { conversations, defaultValue, flowName } = useFlowEditById()
  if (!conversations && !defaultValue && !flowName) return (<Error />)
  /* 👆 eliminar cuando se guarder el stado en local storage con zustand */

  return (
    <section className='bg-bg dark:bg-bg-dark'>
      <ChatbotEditFormHeader />
      <ChatbotEditFormInitialsInputs />
      <span className='block my-7 h-[2px] bg-black/5 dark:bg-white/5 w-[90%] m-auto' /> {/* this is a divider */}
      <ChatboEditFormConversations />
    </section>
  )
}
