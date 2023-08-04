import { RobotIcon } from '../../Icons'
import { Navigation } from './Navigation'

export function Header () {
  return (
    <header className='w-full h-[70px] z-50 fixed top-0 left-0 bg-[#000000d7] border-b border-white/10 backdrop-blur-md flex items-center justify-between px-[20px] gap-5 md:backdrop-blur-sm'>
      <RobotIcon className='w-[50px]' />
      <Navigation />
      <img
        src='https://avatars.githubusercontent.com/u/117806728?s=48&v=4'
        alt='user image'
        className='w-[40px] h-[40px] object-cover rounded-full'
      />
    </header>
  )
}
