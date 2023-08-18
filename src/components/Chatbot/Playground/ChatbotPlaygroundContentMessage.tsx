import { useEffect, useRef } from 'react'

import { useParams } from 'react-router-dom'
import { ChatbotPlaygroundContentMessageHeader } from '@components/Chatbot/Playground/ChatbotPlaygroundContentMessageHeader'
import { ChatbotPlaygroundContentMessageFooter } from '@components/Chatbot/Playground/ChatbotPlaygroundContentMessageFooter'
import { ChatbotPlaygroundContentListOfMessages } from '@components/Chatbot/Playground/ChatbotPlaygroundContentListOfMessages'
import { useGlobalWspPlaygroundStore } from '@/hooks/wspPlayground/useGlobalWspPlaygroundStore'
import { useGlobalUserFlowsStore } from '@/hooks/user/useGlobalUserFlowsStore'
import { motion } from 'framer-motion'

export function ChatbotPlaygroundContentMessage () {
  const containerMessagesRef = useRef<HTMLDivElement>(null)

  const { currentMessages, updateCurrentMessages } = useGlobalWspPlaygroundStore()
  const { userAllFlows } = useGlobalUserFlowsStore()

  const { id } = useParams()

  const findChannel = userAllFlows.find((flow) => flow.id === id)

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
    <motion.section
      initial={{ opacity: 0, translateY: '20px' }}
      animate={{ opacity: 1, translateY: '0' }}
      exit={{ opacity: 0, translateY: '20px' }}
      transition={{ duration: 0.2 }}
      className=' bg-content-message-container-bg dark:bg-content-message-container-bg-dark pb-[60px] flex flex-col justify-end overflow-hidden relative col-span-5 w-full h-full after:content-[" "] after:bg-[url(/public/wsp-bg.png)] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:opacity-[0.4] dark:after:opacity-[0.11] after:z-[-1]] after:select-none after:pointer-events-none'
    >
      <ChatbotPlaygroundContentMessageHeader
        findChannel={findChannel}
      />

      <ChatbotPlaygroundContentListOfMessages
        containerMessagesRef={containerMessagesRef}
      />

      <ChatbotPlaygroundContentMessageFooter
        findChannel={findChannel}
      />

    </motion.section>
  )
}
