import { useFlowEditById } from '@/hooks/edit/useFlowEditById'
import { ChatbotEditFormItem } from './ChatbotEditFormItem'

export function ChatbotEditFormListOfConversations () {
  const { conversations } = useFlowEditById()

  return (
    <div className='flex flex-col gap-5 [&>*:nth-child(1)]:mt-7'>

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
      : (<p className='text-white text-center'>Sin Conversaciones 🥲</p>)
}
    </div>
  )
}
