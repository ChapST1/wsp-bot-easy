import { ChatbotCreateForm } from '@components/Chatbot/Create/ChatbotCreateForm'
import { motion } from 'framer-motion'

export function ChatbotCreateLayout () {
  return (
    <motion.section
      initial={{ opacity: 0, translateY: '-20px' }}
      animate={{ opacity: 1, translateY: '0' }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className='py-[17px] flex justify-center'
    >
      <ChatbotCreateForm />
    </motion.section>
  )
}
