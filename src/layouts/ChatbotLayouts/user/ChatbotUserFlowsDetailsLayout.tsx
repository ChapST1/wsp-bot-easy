import { useNavigate } from 'react-router-dom'
import { TemplateInfo } from '@components/Chatbot/Templates/TemplateInfo'
import { useEffect, useRef } from 'react'
import { useGlobalUserFlowsStore } from '@/hooks/user/useGlobalUserFlowsStore'

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
    <div className='w-full h-screen overflow-y-scroll  fixed top-0 left-0 bg-bg/75 dark:bg-bg-dark/75 py-[70px] flex items-start justify-center backdrop-blur-sm' ref={elementRef} id='flow-details-info-container' onClick={handleCloset}>
      <TemplateInfo arrayFlows={userAllFlows} />
    </div>
  )
}
