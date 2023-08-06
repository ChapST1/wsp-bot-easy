import { AllFlow as AllFlowTypes } from '../../../types/allFlows'

import { useState } from 'react'
import { useGlobalWspPlaygroundStore } from '@hooks/useGlobalWspPlaygroundStore'
import { AddIcon, EmojiIcon, SendMessageIcon, VoiceIcon } from '@components/Icons'
import { formatDate } from '@utils/formatDate'

export function ChatbotPlaygroundContentMessageFooter ({ findChannel }: { findChannel: AllFlowTypes | undefined }) {
  const [contentMessages, setContentMessage] = useState('')
  const { updateBotIsTyping, updateCurrentMessages } = useGlobalWspPlaygroundStore()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = (event.target.value)
    setContentMessage(value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (contentMessages.trim() === '') return

    const matchConversation = findChannel?.conversations.find(({ trigger }) => trigger.name.toLowerCase() === contentMessages.toLowerCase())

    if (matchConversation) {
      updateBotIsTyping(true)

      const createUserObject = {
        message: contentMessages,
        made: 'user',
        timestamp: formatDate()
      }

      const createBotObject = {
        message: matchConversation.trigger.response,
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

    if (!matchConversation) {
      updateBotIsTyping(true)

      const createUserObject = {
        message: contentMessages,
        made: 'user',
        timestamp: formatDate()
      }

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
    <form className='w-full absolute bottom-0 left-0 h-[60px]  z-20 bg-[#202c33] flex items-center gap-2 px-3' onSubmit={handleSubmit}>
      <EmojiIcon className='fill-[#aebac1] scale-90' />
      <AddIcon className='fill-[#aebac1] scale-90' />

      <input
        type='text'
        placeholder='Escribe un mensaje aqui'
        className=' grow-[1] bg-[#2a3942] h-[60%] rounded-lg px-3 outline-none text-[#e9edef]'
        onChange={handleChange}
        value={contentMessages}
      />

      {
            contentMessages.length > 0
              ? (<button type='submit'><SendMessageIcon className='fill-[#aebac1] scale-90' /></button>)
              : (<VoiceIcon className='fill-[#aebac1] scale-90' />)
      }
    </form>
  )
}
