import { AllFlow as AllFlowTypes } from '../../../types/allFlows'

import { useState } from 'react'
import { useGlobalWspPlaygroundStore } from '@/hooks/wspPlayground/useGlobalWspPlaygroundStore'
import { AddIcon, EmojiIcon, SendMessageIcon, VoiceIcon } from '@components/Icons'
import { formatDate } from '@/utilities/formatDate'

export function ChatbotPlaygroundContentMessageFooter ({ findChannel }: { findChannel: AllFlowTypes | undefined }) {
  const [contentMessages, setContentMessage] = useState('')
  const { updateBotIsTyping, updateCurrentMessages } = useGlobalWspPlaygroundStore()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = (event.target.value)
    setContentMessage(value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    // verificamos que el valor del input no este vacio, si lo esta hacemos un return para que no se ejecute el resto de la función
    if (contentMessages.trim() === '') return

    // se busca la conversación que coincida con el valor del input en el array de conversaciones del flujo
    const matchConversation = findChannel?.conversations.find(({ trigger }) => trigger.name.toLowerCase() === contentMessages.toLowerCase())

    // si se encuentra una conversación que coincida con el valor del input se ejecuta el código de abajo
    if (matchConversation) {
      // se actualiza el estado de botIsTyping a true
      updateBotIsTyping(true)

      // se crea un objeto con los valores del mensaje del usuario
      const createUserObject = {
        message: contentMessages,
        made: 'user',
        timestamp: formatDate()
      }

      // se crea un objeto con los valores de la respuesta del bot
      const createBotObject = {
        message: matchConversation.trigger.response,
        made: 'bot',
        timestamp: formatDate()
      }

      // se actualiza el estado de currentMessages con el objeto del usuario
      updateCurrentMessages(createUserObject)

      // se limpia el valor del input
      setContentMessage('')

      // se ejecuta un setTimeout para simular que el bot esta escribiendo
      setTimeout(() => {
        // se actualiza el estado de currentMessages de la store de wspPlaygroundStore con el objeto del bot
        updateCurrentMessages(createBotObject)
        updateBotIsTyping(false)
      }, 1000)
    }

    // si no se encuentra una conversación que coincida con el valor del input se ejecuta el código de abajo
    if (!matchConversation) {
      updateBotIsTyping(true)

      const createUserObject = {
        message: contentMessages,
        made: 'user',
        timestamp: formatDate()
      }

      // se crea un objeto con los valores de la respuesta del bot cuando no se encuentra una conversación que coincida con el valor del input
      // usamos el valor de defaultValue
      const createBotObject = {
        message: findChannel?.defaultValue ?? 'No entiendo lo que dices',
        made: 'bot',
        timestamp: formatDate()
      }

      updateCurrentMessages(createUserObject)
      setContentMessage('')

      setTimeout(() => {
        updateCurrentMessages(createBotObject)
        updateBotIsTyping(false)
      }, 1000)
    }
  }

  return (
    <form className='w-full absolute bottom-0 left-0 h-[60px]  z-20 bg-content-footer-bg dark:bg-content-footer-bg-dark flex items-center gap-2 px-3' onSubmit={handleSubmit}>
      <EmojiIcon className='  fill-content-footer-icons-color  dark:fill-content-footer-icons-color-dark scale-90' />
      <AddIcon className='  fill-content-footer-icons-color  dark:fill-content-footer-icons-color-dark scale-90' />

      <input
        type='text'
        placeholder='Escribe un mensaje aqui'
        className=' grow-[1] bg-content-footer-input-bg dark:bg-content-footer-input-bg-dark h-[60%] rounded-lg px-3 outline-none text-primary dark:text-primary-dark'
        onChange={handleChange}
        value={contentMessages}
      />

      {
            contentMessages.length > 0
              ? (<button type='submit'><SendMessageIcon className=' fill-content-footer-icons-color dark:fill-content-footer-icons-color-dark scale-90' /></button>)
              : (<VoiceIcon className=' fill-content-footer-icons-color dark:fill-content-footer-icons-color-dark scale-90' />)
      }
    </form>
  )
}
