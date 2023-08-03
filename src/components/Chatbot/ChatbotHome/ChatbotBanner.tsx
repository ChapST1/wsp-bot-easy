import { RobotIcon } from '../../Icons'
import { ButtonLink } from '../../ui/ButtonLink'

export function ChatbotBanner () {
  return (
    <div className='flex flex-col items-center justify-center gap-3'>
      <RobotIcon className='w-[200px] block m-auto' />
      <ButtonLink title='Crear un flujo' to='/chatbot/crear' />
    </div>
  )
}
