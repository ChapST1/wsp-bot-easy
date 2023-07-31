import { useNavigate, useParams } from 'react-router-dom'
import { useRef } from 'react'
import { TemplateInfo } from '../layouts/TemplateInfo'

export function TemplatesDetail () {
  const elementRef = useRef<HTMLDivElement>(null)
  const { id } = useParams()
  const navigate = useNavigate()

  const handleCloset = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.target === elementRef.current) {
      navigate('/plantillas')
    }
  }

  return (
    <div className='w-full h-screen overflow-y-scroll  fixed top-0 left-0 bg-[#000000e4] py-[70px] flex items-start justify-center backdrop-blur-sm' ref={elementRef} id='flow-details-info-container' onClick={handleCloset}>
      <TemplateInfo id={id} />
    </div>
  )
}
