import { useEffect, useRef } from 'react'

import { useParams } from 'react-router-dom'
import { useGlobalFlowStore } from '../hooks/useGlobalFlowsStore'
import { ChatbotPlaygroundContentMessageHeader } from './ChatbotPlaygroundContentMessageHeader'
import { ChatbotPlaygroundContentMessageFooter } from './ChatbotPlaygroundContentMessageFooter'
import { ChatbotPlaygroundContentListOfMessages } from './ChatbotPlaygroundContentListOfMessages'

export function ChatbotPlaygroundContentMessage () {
  const containerMessagesRef = useRef<HTMLDivElement>(null)
  const { allFlows, currentMessages, updateCurrentMessages } = useGlobalFlowStore()
  const { id } = useParams()

  const findChannel = allFlows.find((flow) => flow.id === id)

  useEffect(() => {
    if (containerMessagesRef.current !== null) {
      const element = containerMessagesRef.current
      const heightElement = Number(element.scrollHeight)

      element.scrollTop = heightElement
    }
  }, [currentMessages])

  useEffect(() => {
    updateCurrentMessages(null)
  }, [id, updateCurrentMessages])

  return (
    <div className=' pb-[60px] flex flex-col justify-end overflow-hidden relative col-span-5 w-full h-full after:content-[" "] after:bg-[url(/public/wsp-bg.png)] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:opacity-5 after:z-[-1]] after:select-none after:pointer-events-none'>
      <ChatbotPlaygroundContentMessageHeader
        findChannel={findChannel}
      />

      <ChatbotPlaygroundContentListOfMessages
        containerMessagesRef={containerMessagesRef}
      />

      <ChatbotPlaygroundContentMessageFooter
        findChannel={findChannel}
      />

    </div>
  )
}
