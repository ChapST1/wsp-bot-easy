import { ConfigIcon, GroupIcon, NewChatIcon, StatesIcon } from './Icons'

export function ChatbotPlaygroundSidebar () {
  return (
    <div className='relative col-span-2 w-full h-full border-r-2 border-[#262f34]'>
      <header className='w-full h-[60px] bg-[#202c33] absolute top-0 z-20 flex items-center justify-between px-3'>
        <img
          src='https://avatars.githubusercontent.com/u/117806728?v=4'
          alt='imagen del usuario'
          className='w-[40px] h-[40px] rounded-full'
        />

        <div className='flex gap-5 items-center'>
          <GroupIcon className='fill-[#aebac1]' />
          <StatesIcon className='fill-[#3ccab7] stroke-[#aebac1]' />
          <NewChatIcon className='fill-[#aebac1]' />
          <ConfigIcon className='fill-[#aebac1]' />
        </div>
      </header>
    </div>
  )
}
