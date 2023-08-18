
import { useNavigate } from 'react-router-dom'
import { TemplateInfo } from '@components/Chatbot/Templates/TemplateInfo'
import { useEffect, useRef } from 'react'
import { useGlobalUserFlowsStore } from '@/hooks/user/useGlobalUserFlowsStore'

import { motion } from 'framer-motion'

export function ChatbotUserFlowsDetailsLayout () {
  const { userAllFlows } = useGlobalUserFlowsStore()

  const elementRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()

  const handleCloset = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.target === elementRef.current) {
      navigate('/chatbot')
    }
  }

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  return (
    <motion.section
      initial={{ opacity: 0, translateY: '100%' }}
      animate={{ opacity: 1, translateY: '0%' }}
      exit={{ opacity: 0, translateY: '100%' }}
      transition={{ duration: 0.2 }}
      className='w-full h-screen overflow-y-scroll  fixed top-0 left-0 bg-bg/75 dark:bg-bg-dark/75 py-[70px] flex items-start justify-center backdrop-blur-sm'
      ref={elementRef}
      id='flow-details-info-container'
      onClick={handleCloset}
    >
      <TemplateInfo arrayFlows={userAllFlows} />
    </motion.section>
  )
}
