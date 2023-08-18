import { AllFlow, Conversation, Trigger } from '../../../types/allFlows'

import { toast } from 'sonner'
import { useGlobalUserFlowsStore } from '@/hooks/user/useGlobalUserFlowsStore'
import { Button } from '@components/ui/Button'
import { useFlowEditById } from '@/hooks/edit/useFlowEditById'
import { Label } from '@/components/ui/Label'
import { Input } from '@/components/ui/Input'
import { TextArea } from '@/components/ui/TextArea'
import { Form } from '@/components/ui/Form'

import { motion } from 'framer-motion'
import { DELETE_CONVERSATION_SUCCESS_MESSAGE, EDIT_CONVERSATION_SUCCESS_MESSAGE } from '@/constants/sonnerMessages'

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
    toast.success(DELETE_CONVERSATION_SUCCESS_MESSAGE)
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
    toast.success(EDIT_CONVERSATION_SUCCESS_MESSAGE)
  }

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.2 }}
    >
      <Form onSubmit={handleSubmit}>
        <Label>
          Palabra clave
          <Input
            type='text'
            name='actionInput'
            defaultValue={name}
          />
        </Label>

        <Label>
          Respuesta del chatbot
          <TextArea
            name='triggerInput'
            defaultValue={response}
          />
        </Label>

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
      </Form>
    </motion.section>
  )
}
