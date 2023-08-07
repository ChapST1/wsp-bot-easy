import { useFlowEditById } from '@/hooks/useFlowEditById'
import { ChatbotEditFormItem } from './ChatbotEditFormItem'

export function ChatbotEditFormListOfConversations () {
  const { conversations, flowName, defaultValue, id } = useFlowEditById()

  return (
    <div className='flex flex-col gap-5 [&>*:nth-child(1)]:mt-7'>

      {
    conversations.length > 0
      ? (
          conversations.map(({ trigger }) => {
            return (
              <ChatbotEditFormItem
                key={trigger.name + trigger.response}
                trigger={trigger}
                currentFlowId={id as string}
                flowNmame={flowName}
                defaultValue={defaultValue}
                currentFlowConversations={conversations}
              />
            )
          })
        )
      : (<p className='text-white'>Sin Conversaciones</p>)
}
    </div>
  )
}
