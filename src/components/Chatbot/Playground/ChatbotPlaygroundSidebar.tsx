import { NavLink } from 'react-router-dom'
import { useGlobalUserFlowsStore } from '@/hooks/user/useGlobalUserFlowsStore'
import { ConfigIcon, GroupIcon, NewChatIcon, StatesIcon } from '@components/Icons'

export function ChatbotPlaygroundSidebar () {
  const { userAllFlows } = useGlobalUserFlowsStore()

  return (
    <div className='col-span-2 h-full  border-r-2 dark:border-[#262f34] pt-[60px] relative overflow-hidden'>
      <header className='w-full h-[60px] bg-sidebar-header dark:bg-sidebar-bg-dark absolute top-0 z-20 flex items-center justify-between px-3'>
        <img
          src='https://avatars.githubusercontent.com/u/117806728?v=4'
          alt='imagen del usuario'
          className='w-[40px] h-[40px] rounded-full'
        />

        <div className='flex gap-3 items-center'>
          <GroupIcon className=' fill-sidebar-header-icons-color dark:fill-sidebar-header-icons-color-dark' />
          <StatesIcon className=' fill-sidebar-header-icons-color dark:fill-sidebar-header-icons-color-dark  dark:stroke-[#aebac1]' />
          <NewChatIcon className=' fill-sidebar-header-icons-color dark:fill-sidebar-header-icons-color-dark' />
          <ConfigIcon className=' fill-sidebar-header-icons-color dark:fill-sidebar-header-icons-color-dark' />
        </div>
      </header>

      <div className='overflow-y-scroll absolute top-0 left-0 h-full w-full pt-[60px]' id='wsp-sidebar'>
        {
        userAllFlows?.map(({ id, flowName }) => {
          return (
            <NavLink
              to={`/test/${id}`} key={id}
              className={({ isActive, isPending }) => {
                const customize = isPending ? ' bg-sidebar-chat-active  dark:bg-sidebar-chat-active-dark' : isActive ? 'bg-sidebar-chat-active  dark:bg-sidebar-chat-active-dark' : ''

                return `w-full h-[60px]  flex items-center justify-start gap-3  px-2 hover:bg-sidebar-chat-hover dark:hover:bg-sidebar-chat-hover-dark ${customize}`
              }}
            >
              <div className='w-[50px] max-w-[50px] min-w-[50px] min-h-[50px] max-h-[50px] h-[50px] flex-1 rounded-full dark:bg-[#202c33]'>
                <img
                  src={`https://api.dicebear.com/6.x/bottts-neutral/svg?seed=${flowName}&radius=15`}
                  alt={`imagen para ${flowName}`}
                  className='w-full h-full rounded-full'
                />
              </div>

              <div className='w-full h-full border-b dark:border-[#262f34] pt-2'>
                <p className='dark:text-[#e9edef] text-sm w-[90%] overflow-hidden whitespace-nowrap text-ellipsis'>{flowName}</p>
                <span className='block dark:text-[#e9edefda] text-xs'>chatbot</span>
              </div>
            </NavLink>
          )
        })
      }
      </div>
    </div>
  )
}
