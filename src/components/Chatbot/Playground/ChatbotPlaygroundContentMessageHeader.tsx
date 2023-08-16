import { AllFlow } from '../../../types/allFlows'

import { useGlobalWspPlaygroundStore } from '@/hooks/wspPlayground/useGlobalWspPlaygroundStore'
import { ConfigIcon, SearchIcon } from '@components/Icons'
import { ChatbotPlaygroundSidebarScreenOptions } from '@components/Chatbot/Playground/ChatbotPlaygroundSidebarScreenOptions'

interface ChatbotPlaygroundContentMessageHeaderProps {
  findChannel: AllFlow | undefined
}

export function ChatbotPlaygroundContentMessageHeader ({ findChannel }: ChatbotPlaygroundContentMessageHeaderProps) {
  const { botIsTyping } = useGlobalWspPlaygroundStore()

  return (
    <header className=' w-full h-[60px] absolute  bg-content-header-bg dark:bg-content-header-bg-dark top-0 z-20 flex items-center justify-between px-3'>
      <div className='flex gap-2 items-center '>
        <img
          src={`https://api.dicebear.com/6.x/bottts-neutral/svg?seed=${findChannel?.flowName ?? 'default'}&radius=15`}
          alt='imagen del usuario'
          className='w-[40px] h-[40px] rounded-full'
        />

        <div className='flex flex-col  items-start pt-3'>
          <span className='dark:text-[#e9edef]'>{findChannel?.flowName}</span>
          <span className={`dark:text-[#e9edef] text-xs duration-200 pointer-events-none pb-[6px] ${botIsTyping ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>escribiendo...</span>
        </div>
      </div>

      <div className='flex gap-5 items-center'>
        <ChatbotPlaygroundSidebarScreenOptions />
        <SearchIcon className='fill-content-footer-icons-color dark:fill-content-footer-icons-color-dark' />
        <ConfigIcon className='fill-content-footer-icons-color dark:fill-content-footer-icons-color-dark' />
      </div>
    </header>
  )
}
