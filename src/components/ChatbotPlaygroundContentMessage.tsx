import { useState } from 'react'
import { AddIcon, ConfigIcon, EmojiIcon, MessageViewed, SearchIcon, SendMessageIcon, MessageWingRightIcon, VoiceIcon, MessageWingLeftIcon } from './Icons'
import { ChatbotPlaygroundContentMessageItem } from './ChatbotPlaygroundContentMessageItem'

export function ChatbotPlaygroundContentMessage () {
  const INITIAL_MESSAGES = [
    {
      message: 'Hola, soy un bot de whatsapp, ¿en que puedo ayudarte?',
      type: 'text',
      made: 'bot'
    },
    {
      message: '¿Quieres saber sobre mi?',
      type: 'text',
      made: 'user'
    }
  ]

  const [messages, setMessages] = useState(INITIAL_MESSAGES)
  const [contentMessages, setContentMessage] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setContentMessage(value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const createObject = {
      message: contentMessages,
      type: 'text',
      made: 'user'
    }

    setMessages([...messages, createObject])
  }

  return (
    <div className=' flex flex-col justify-end overflow-hidden relative col-span-5 w-full h-full after:content-[""] after:bg-[url(public/wsp-bg.png)] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:opacity-5 after:z-[-1]] after:select-none after:pointer-events-none'>
      <header className=' w-full h-[60px] absolute  bg-[#202c33] top-0 z-20 flex items-center justify-between px-3'>
        <div className='flex gap-2 items-center '>
          <img
            src='https://avatars.githubusercontent.com/u/88452156?v=4'
            alt='imagen del usuario'
            className='w-[40px] h-[40px] rounded-full'
          />

          <span className='text-[#e9edef]'>+51 987 654 321</span>
        </div>

        <div className='flex gap-5 items-center'>
          <SearchIcon className='fill-[#aebac1]' />
          <ConfigIcon className='fill-[#aebac1]' />
        </div>
      </header>

      <div className=' w-full   bg-transparent  px-5  flex flex-col  overflow-y-scroll gap-4 py-[80px]' id='wsp-content-messages'>
        {
            messages.map((messageInfo, index) => {
              return (
                <ChatbotPlaygroundContentMessageItem key={index} {...messageInfo} />
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
        />
        {
            contentMessages.length > 0 ? (<button type='submit'><SendMessageIcon className='fill-[#aebac1] scale-90' /></button>) : (<VoiceIcon className='fill-[#aebac1] scale-90' />)
        }
      </form>
    </div>
  )
}
