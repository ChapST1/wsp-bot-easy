import { useState } from 'react'
import { AddIcon, ConfigIcon, EmojiIcon, SearchIcon, SendMessageIcon, VoiceIcon } from './Icons'
import { ChatbotPlaygroundContentMessageItem } from './ChatbotPlaygroundContentMessageItem'
import { formatDate } from '../utils/formatDate'

import { useParams } from 'react-router-dom'
import { useGlobalFlowStore } from '../hooks/useGlobalFlowsStore'

interface createObjectProps {
  message: string
  made: string
  timestamp: string
}

export function ChatbotPlaygroundContentMessage () {
  const [messages, setMessages] = useState<createObjectProps[]>([])
  const [contentMessages, setContentMessage] = useState('')

  const { allFlows } = useGlobalFlowStore()
  const { id } = useParams()

  const findChannel = allFlows.find((flow) => flow.id === Number(id)) ?? { flowName: 'No encontrado' }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setContentMessage(value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (contentMessages.trim() === '') return

    const createObject = {
      message: contentMessages,
      made: 'user',
      timestamp: formatDate()
    }

    setMessages([...messages, createObject])
    setContentMessage('')
  }

  return (
    <div className=' flex flex-col justify-end overflow-hidden relative col-span-5 w-full h-full after:content-[""] after:bg-[url(public/wsp-bg.png)] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:opacity-5 after:z-[-1]] after:select-none after:pointer-events-none'>
      <header className=' w-full h-[60px] absolute  bg-[#202c33] top-0 z-20 flex items-center justify-between px-3'>
        <div className='flex gap-2 items-center '>
          <img
            src={`https://robohash.org/${findChannel?.flowName}`}
            alt='imagen del usuario'
            className='w-[40px] h-[40px] rounded-full'
          />

          <span className='text-[#e9edef]'>{findChannel?.flowName}</span>
        </div>

        <div className='flex gap-5 items-center'>
          <SearchIcon className='fill-[#aebac1]' />
          <ConfigIcon className='fill-[#aebac1]' />
        </div>
      </header>

      <div className=' w-full   bg-transparent  px-5  flex flex-col  overflow-y-scroll gap-4 py-[80px]' id='wsp-content-messages'>
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
