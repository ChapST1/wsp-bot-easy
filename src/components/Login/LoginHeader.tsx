import { RobotIcon } from '../Icons'

export function LoginHeader () {
  return (
    <header className='h-[100px] w-full flex items-center justify-start gap-2'>
      <RobotIcon className='w-14' />
      <span>Chatbot easy</span>
    </header>
  )
}
