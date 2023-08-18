import { useEffect, useRef } from 'react'
import { ChatbotEditForm } from '@components/Chatbot/Edit/ChatbotEditForm'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
export function ChatbotEditLayout () {
  const elementRef = useRef<HTMLElement>(null)
  const navigate = useNavigate()

  const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (e.target === elementRef.current) {
      navigate('/chatbot')
    }
  }

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  return (
    <motion.section
      initial={{ opacity: 0, translateY: '100%' }}
      animate={{ opacity: 1, translateY: '0%' }}
      exit={{ opacity: 0, translateY: '100%' }}
      transition={{ duration: 0.2 }}
      className='w-full h-[calc(100%-70px)] fixed top-[70px] left-0 bg-bg/75 dark:bg-bg-dark/75 overflow-y-scroll flex items-start justify-center md:backdrop-blur-sm'
      ref={elementRef}
      onClick={handleClick}
    >
      <ChatbotEditForm />
    </motion.section>
  )
}
