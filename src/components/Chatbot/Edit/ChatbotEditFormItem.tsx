import { AllFlow, Conversation, Trigger } from '../../../types/allFlows'

import { toast } from 'sonner'
import { useGlobalUserFlowsStore } from '@/hooks/user/useGlobalUserFlowsStore'
import { Button } from '@components/ui/Button'
import { useFlowEditById } from '@/hooks/edit/useFlowEditById'

interface ChatbotEditFormItemProps {
  trigger: Trigger
}

export function ChatbotEditFormItem ({ trigger }: ChatbotEditFormItemProps) {
  const { editFromUserFlows } = useGlobalUserFlowsStore()
  const { conversations, id, flowName, defaultValue } = useFlowEditById()

  const { name, response } = trigger

  const handleDelete = () => {
    const filterConversations = conversations
      .filter(conversation => conversation.trigger.name !== name && conversation.trigger.response !== response)

    const newFlow = {
      id,
      flowName,
      defaultValue,
      conversations: filterConversations
    }

    editFromUserFlows(id as string, newFlow as AllFlow)

    toast.success('Se elimino la conversación')
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { actionInput, triggerInput } = Object.fromEntries(new FormData(e.currentTarget))

    if (actionInput.toString().trim() === '' || triggerInput.toString().trim() === '') return

    const findIndex = conversations.findIndex(({ trigger }) => trigger.name === name && trigger.response === response)
    const filterConversations = conversations.filter(({ trigger }) => trigger.name !== name && trigger.response !== response)

    const newConversation = {
      trigger: {
        name: actionInput,
        response: triggerInput
      }
    }

    const newData = [...filterConversations]
    newData.splice(findIndex, 0, newConversation as Conversation)

    const newFlow = {
      id,
      flowName,
      defaultValue,
      conversations: newData
    }

    editFromUserFlows(id, newFlow as AllFlow)
    toast.success('Se edito la conversación')
  }

  return (
    <>
      <form className='block px-2 duration-200 border border-transparent hover:border-neutral-800 rounded-md py-4 group' onSubmit={handleSubmit}>
        <label htmlFor='' className='w-full py-1 text-[#93989d]'>
          Palabra clave
          <input
            type='text'
            className='text-[#eaeaea] py-5 my-3 border-white/5 bg-neutral-950 text-slate-12 focus-visible:ring-slate-7 ease-in-out duration-200 placeholder:text-slate-11 h-8 rounded-[3px] px-2 text-sm relative w-full select-none appearance-none border outline-none focus-visible:border-white/10'
            name='actionInput'
            defaultValue={name}
          />
        </label>

        <label htmlFor='flowTrigger' className='w-full py-1 text-[#93989d]'>
          <span>Respuesta del chatbot</span>
          <textarea
            id=''
            className='w-full h-72  text-[#eaeaea] py-5 my-3 border-white/5 bg-neutral-950 text-slate-12 focus-visible:ring-slate-7 ease-in-out duration-200 placeholder:text-slate-11 rounded-[3px] px-2 text-sm relative select-none appearance-none border outline-none focus-visible:border-white/10  resize-none'
            name='triggerInput'
            defaultValue={response}
          />
        </label>

        <div className='flex gap-3 justify-between items-center'>
          <Button
            title='Guardar cambios'
            type='submit'
          />

          <Button
            title='Eliminar esta conversación'
            onClick={handleDelete}
            type='button'
          />

        </div>
      </form>
    </>
  )
}
