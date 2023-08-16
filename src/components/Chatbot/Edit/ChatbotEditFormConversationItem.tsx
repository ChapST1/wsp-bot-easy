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
    // primero se filtra la conversación que se quiere eliminar de un flujo con el nombre y la respuesta
    const filterConversations = conversations
      .filter(conversation => conversation.trigger.name !== name && conversation.trigger.response !== response)

    // luego se crea un nuevo objeto con el resto de las conversaciones
    const newFlow = {
      id,
      flowName,
      defaultValue,
      conversations: filterConversations
    }

    // se edita el flujo con el nuevo objeto en el store
    editFromUserFlows(id as string, newFlow as AllFlow)

    // se muestra un toast de éxito
    toast.success('Se elimino la conversación')
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // con esto se obtienen los valores de los inputs del formulario
    const { actionInput, triggerInput } = Object.fromEntries(new FormData(e.currentTarget))

    // verificamos que los valores no esten vacios, si lo estan hacemos un return para que no se ejecute el resto de la función
    if (actionInput.toString().trim() === '' || triggerInput.toString().trim() === '') return

    // se busca el indice de la conversación que se quiere editar
    const findIndex = conversations.findIndex(({ trigger }) => trigger.name === name && trigger.response === response)

    // se filtra la conversación que se quiere editar
    const filterConversations = conversations.filter(({ trigger }) => trigger.name !== name && trigger.response !== response)

    // se crea un nuevo objeto con la conversación editada
    const newConversation = {
      trigger: {
        name: actionInput,
        response: triggerInput
      }
    }

    // se crea un nuevo array con la conversación editada en el indice que se obtuvo anteriormente
    const newData = [...filterConversations]
    newData.splice(findIndex, 0, newConversation as Conversation)

    // se crea un nuevo objeto con el flujo editado
    const newFlow = {
      id,
      flowName,
      defaultValue,
      conversations: newData
    }

    // se edita el flujo con el nuevo objeto en el store
    editFromUserFlows(id, newFlow as AllFlow)

    // se muestra un toast de éxito
    toast.success('Se edito la conversación')
  }

  return (
    <>
      <form className='block px-2 duration-200 border border-transparent hover:border-border-color dark:border-border-color-dark rounded-md py-4 group' onSubmit={handleSubmit}>
        <label htmlFor='' className='w-full py-1 text-secondary dark:text-secondary-dark'>
          Palabra clave
          <input
            type='text'
            className='text-primary dark:text-primary-dark py-5 my-3 border-border-color dark:border-border-color-dark/50 bg-form-input-bg dark:bg-form-input-bg-dark  focus-visible:ring-slate-7 ease-in-out duration-200 placeholder:text-slate-11 h-8 rounded-[3px] px-2 text-sm relative w-full select-none appearance-none border outline-none focus-visible:border-white/10'
            name='actionInput'
            defaultValue={name}
          />
        </label>

        <label htmlFor='flowTrigger' className='w-full py-1 text-secondary dark:text-secondary-dark'>
          <span>Respuesta del chatbot</span>
          <textarea
            id=''
            className='w-full h-72  text-primary dark:text-primary-dark py-5 my-3 border-border-color dark:border-border-color-dark/50 bg-form-input-bg dark:bg-form-input-bg-dark  focus-visible:ring-slate-7 ease-in-out duration-200 placeholder:text-slate-11 rounded-[3px] px-2 text-sm relative select-none appearance-none border outline-none focus-visible:border-white/10  resize-none'
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
