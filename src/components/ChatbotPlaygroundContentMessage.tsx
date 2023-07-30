import { useEffect, useState, useRef } from 'react'
import { AddIcon, ConfigIcon, EmojiIcon, SearchIcon, SendMessageIcon, VoiceIcon } from './Icons'
import { ChatbotPlaygroundContentMessageItem } from './ChatbotPlaygroundContentMessageItem'
import { formatDate } from '../utils/formatDate'

import { useParams } from 'react-router-dom'
import { useGlobalFlowStore } from '../hooks/useGlobalFlowsStore'
import { ChatbotPlaygroundContentMessageHeader } from './ChatbotPlaygroundContentMessageHeader'

interface createObjectProps {
  message: string
  made: string
  timestamp: string
}

export function ChatbotPlaygroundContentMessage () {
  const containerMessagesRef = useRef<HTMLDivElement>(null)

  const [messages, setMessages] = useState<createObjectProps[]>([])
  const [contentMessages, setContentMessage] = useState('')
  const [botIsTyping, setBotIsTyping] = useState(false)

  const { allFlows } = useGlobalFlowStore()
  const { id } = useParams()

  const findChannel = allFlows.find((flow) => flow.id === Number(id))

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = (event.target.value).toLowerCase()
    setContentMessage(value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (contentMessages.trim() === '') return

    const matchConversation = findChannel?.conversations.find(({ trigger }) => trigger.name === contentMessages.toLowerCase())

    if (matchConversation) {
      setBotIsTyping(true)

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

      setMessages((prev) => [...prev, createUserObject])
      setContentMessage('')

      setTimeout(() => {
        setMessages((prev) => [...prev, createBotObject])
        setBotIsTyping(false)
      }, 1000)
    }

    if (!matchConversation) {
      setBotIsTyping(true)

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

      setMessages((prev) => [...prev, createUserObject])
      setContentMessage('')

      setTimeout(() => {
        setMessages((prev) => [...prev, createBotObject])
        setBotIsTyping(false)
      }, 1000)
    }
  }

  useEffect(() => {
    if (containerMessagesRef.current !== null) {
      const element = containerMessagesRef.current
      const heightElement = Number(element.scrollHeight)

      element.scrollTop = heightElement
    }
  }, [messages])

  useEffect(() => {
    setMessages([])
  }, [id])

  return (
    <div className=' pb-[60px] flex flex-col justify-end overflow-hidden relative col-span-5 w-full h-full after:content-[" "] after:bg-[url(/public/wsp-bg.png)] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:opacity-5 after:z-[-1]] after:select-none after:pointer-events-none'>
      <ChatbotPlaygroundContentMessageHeader
        botIsTyping={botIsTyping}
        findChannel={findChannel}
      />

      <div className=' w-full scroll-smooth   bg-transparent  px-5  flex flex-col  overflow-y-scroll gap-4 pt-[80px] pb-4' id='wsp-content-messages' ref={containerMessagesRef}>
        {
            messages.map(({ message, made, timestamp }, index) => {
              return (
                <ChatbotPlaygroundContentMessageItem key={index} message={message} made={made} timestamp={timestamp} />
              )
            })
        }
      </div>

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
            contentMessages.length > 0 ? (<button type='submit'><SendMessageIcon className='fill-[#aebac1] scale-90' /></button>) : (<VoiceIcon className='fill-[#aebac1] scale-90' />)
        }
      </form>
    </div>
  )
}
