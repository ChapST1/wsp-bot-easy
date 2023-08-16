import { RobotIcon } from '@components/Icons'
import { Navigation } from '@components/Chatbot/Header/Navigation'
import { HandleModeIcon } from './handleMode'

export function Header () {
  return (
    <header className='w-full h-[70px] z-50 fixed top-0 left-0 bg-bg/75 dark:bg-bg-dark/75 border-b border-border-color dark:border-border-color-dark flex items-center justify-between px-[20px] gap-2 md:gap-5 md:backdrop-blur-sm'>
      <RobotIcon className='w-[50px]' />
      <Navigation />
      <div className='flex gap-1 items-center justify-center'>
        <HandleModeIcon />
        <img
          src='https://avatars.githubusercontent.com/u/117806728?s=48&v=4'
          alt='user image'
          className='w-[40px] h-[40px] object-cover rounded-full'
        />
      </div>
    </header>
  )
}
