import { EditIcon } from '@/components/Icons'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { useFlowEditById } from '@/hooks/edit/useFlowEditById'

export function ChatbotEditFormHeader () {
  const { flowName } = useFlowEditById()
  return (
    <header className=' px-2 bg-black/70 backdrop-blur-md w-full h-[70px] flex items-center justify-between sticky top-0 z-50'>
      <div className='flex gap-2'>
        <h2 className='text-2xl text-center text-white'>{flowName}</h2>
        <EditIcon className='w-6' />
      </div>
      <ButtonLink
        title='Salir'
        to='/chatbot'
      />

    </header>
  )
}
