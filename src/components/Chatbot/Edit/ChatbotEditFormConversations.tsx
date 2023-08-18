import { ADD_CONVERSATION_SUCCESS_MESSAGE } from '@/constants/sonnerMessages'
import { ChatbotEditFormListOfConversations } from './ChatbotEditFormListOfConversations'
import { Button } from '@/components/ui/Button'
import { useFlowEditById } from '@/hooks/edit/useFlowEditById'
import { useGlobalUserFlowsStore } from '@/hooks/user/useGlobalUserFlowsStore'
import { AllFlow } from '@/types/allFlows'
import { toast } from 'sonner'

export function ChatboEditFormConversations () {
  const { editFromUserFlows } = useGlobalUserFlowsStore()
  const { conversations, defaultValue, flowName, id } = useFlowEditById()

  const handleAddConversation = () => {
    const newConversation = {
      trigger: {
        name: '',
        response: ''
      }
    }

    const newFlow = {
      id,
      flowName,
      defaultValue,
      conversations: [...conversations, newConversation]
    }

    editFromUserFlows(id, newFlow as AllFlow)

    toast.success(ADD_CONVERSATION_SUCCESS_MESSAGE)
  }

  return (
    <div className='relative'>
      <div className='flex flex-col gap-5'>
        <ChatbotEditFormListOfConversations />
      </div>

      <div className=' my-5 bg-bg/75 dark:bg-bg-dark/75 backdrop-blur-md py-3  rounded-md sticky bottom-0  flex gap-2 items-center justify-center'>
        <Button
          title='Agregar una conversacion'
          type='button'
          onClick={handleAddConversation}
        />
      </div>
    </div>
  )
}
