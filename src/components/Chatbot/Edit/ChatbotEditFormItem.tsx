import { AllFlow, Conversation, Trigger } from '../../../types/allFlows'

import { toast } from 'sonner'
import { useGlobalUserFlowsStore } from '@hooks/useGlobalUserFlowsStore'
import { Button } from '@components/ui/Button'

interface ChatbotEditFormItemProps {
  flowNmame?: string
  defaultValue?: string
  trigger: Trigger
  currentFlowId: string
  currentFlowConversations: Conversation[]
}

export function ChatbotEditFormItem ({ trigger, currentFlowId, currentFlowConversations, flowNmame, defaultValue }: ChatbotEditFormItemProps) {
  const { editFromUserFlows } = useGlobalUserFlowsStore()

  const { name, response } = trigger

  const handleDelete = () => {
    const filterConversations = currentFlowConversations
      .filter(conversation => conversation.trigger.name !== name && conversation.trigger.response !== response)

    const newFlow = {
      id: currentFlowId,
      flowName: flowNmame,
      defaultValue,
      conversations: filterConversations
    }

    editFromUserFlows(currentFlowId, newFlow as AllFlow)

    toast.success('Se elimino la conversación')
  }

  return (
    <div className='block px-2 duration-200 border border-transparent hover:border-neutral-800 rounded-md py-4 group'>
      <label htmlFor='' className='w-full py-1 text-[#eff7ff9d]'>
        Palabra clave
        <input
          type='text'
          className=' text-[#e6e7e8] py-5 my-3 border-white/5 bg-neutral-950 text-slate-12 focus-visible:ring-slate-7 ease-in-out duration-200 placeholder:text-slate-11 h-8 rounded-[3px] px-2 text-sm relative w-full select-none appearance-none border outline-none focus-visible:border-white/10'
          defaultValue={name}
        />
      </label>

      <label htmlFor='flowTrigger' className='w-full py-1 text-[#eff7ff9d]'>
        <span>Respuesta del chatbot</span>
        <textarea
          id=''
          className='w-full h-72  text-[#e6e7e8] py-5 my-3 border-white/5 bg-neutral-950 text-slate-12 focus-visible:ring-slate-7 ease-in-out duration-200 placeholder:text-slate-11 rounded-[3px] px-2 text-sm relative select-none appearance-none border outline-none focus-visible:border-white/10  resize-none'
          defaultValue={response}
        />
      </label>

      <Button
        title='Eliminar esta conversación'
        style={{ margin: '0 auto', display: 'block' }}
        onClick={handleDelete}
        type='button'
      />
    </div>
  )
}
