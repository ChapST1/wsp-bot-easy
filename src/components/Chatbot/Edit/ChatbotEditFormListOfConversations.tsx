import { useFlowEditById } from '@/hooks/edit/useFlowEditById'
import { ChatbotEditFormItem } from './ChatbotEditFormConversationItem'

import { AnimatePresence } from 'framer-motion'

export function ChatbotEditFormListOfConversations () {
  const { conversations } = useFlowEditById()

  return (
    <div className='flex flex-col gap-5 '>

      <AnimatePresence>
        {
    conversations.length > 0
      ? (
          conversations.map(({ trigger }) => {
            return (
              <ChatbotEditFormItem
                key={crypto.randomUUID()}
                trigger={trigger}
              />
            )
          })
        )
      : (<p className='text-primary dark:text-primary-dark text-center'>Sin Conversaciones 🥲</p>)
}
      </AnimatePresence>
    </div>
  )
}
