import { ButtonLink } from '../components/ButtonLink'
import { RobotIcon } from '../components/Icons'

export function ChatbotBanner () {
  return (
    <div className='flex flex-col items-center justify-center gap-3'>
      <RobotIcon className='w-[200px] block m-auto' />
      <ButtonLink title='Crear' to='/chatbot/crear' />
    </div>
  )
}
