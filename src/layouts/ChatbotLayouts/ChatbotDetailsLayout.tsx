import { useNavigate } from 'react-router-dom'
import { TemplateInfo } from '@components/Chatbot/Templates/TemplateInfo'
import { useEffect, useRef } from 'react'

export function ChatbotDetailsLayout ({ redirect }: { redirect: string }) {
  const elementRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()

  const handleCloset = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.target === elementRef.current) {
      navigate(redirect)
    }
  }

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  return (
    <div className='w-full h-screen overflow-y-scroll  fixed top-0 left-0 bg-[#000000e4] py-[70px] flex items-start justify-center backdrop-blur-sm' ref={elementRef} id='flow-details-info-container' onClick={handleCloset}>
      <TemplateInfo />
    </div>
  )
}
