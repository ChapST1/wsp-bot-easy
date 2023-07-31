import { useGlobalUserFlowsStore } from '../hooks/useGlobalUserFlowsStore'
import { ConfigIcon, GroupIcon, NewChatIcon, StatesIcon } from './Icons'
import { NavLink } from 'react-router-dom'

export function ChatbotPlaygroundSidebar () {
  const { userAllFlows } = useGlobalUserFlowsStore()

  return (
    <div className='col-span-2 h-full  border-r-2 border-[#262f34] pt-[60px] relative overflow-hidden'>
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

      <div className='overflow-y-scroll absolute top-0 left-0 h-full w-full pt-[60px]' id='wsp-sidebar'>
        {
        userAllFlows?.map(({ id, flowName }) => {
          return (
            <NavLink
              to={`/test/${id}`} key={id}
              className={({ isActive, isPending }) => {
                const customize = isPending ? 'bg-[#253239]' : isActive ? 'bg-[#2a3942]' : ''

                return `w-full h-[60px]  flex items-center gap-3  px-2 hover:bg-[#202c33] ${customize}`
              }}
            >
              <img
                src={`https://robohash.org/${flowName}`}
                alt={`imagen para ${flowName}`}
                className='w-[50px] h-[50px] rounded-full bg-[#202c33]'
              />

              <div className='w-full h-full border-b border-[#262f34] pt-2'>
                <p className='text-[#e9edef] text-sm w-[90%] overflow-hidden whitespace-nowrap text-ellipsis'>{flowName}</p>
                <span className='block text-[#e9edefda] text-xs'>chatbot</span>
              </div>
            </NavLink>
          )
        })
      }
      </div>
    </div>
  )
}
