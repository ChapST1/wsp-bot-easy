import { ConfigIcon, SearchIcon } from './Icons'
import { AllFlow } from '../types/allFlows'
import { useGlobalWspPlaygroundStore } from '../hooks/useGlobalWspPlaygroundStore'

interface ChatbotPlaygroundContentMessageHeaderProps {
  findChannel: AllFlow | undefined
}

export function ChatbotPlaygroundContentMessageHeader ({ findChannel }: ChatbotPlaygroundContentMessageHeaderProps) {
  const { botIsTyping } = useGlobalWspPlaygroundStore()

  return (
    <header className=' w-full h-[60px] absolute  bg-[#202c33] top-0 z-20 flex items-center justify-between px-3'>
      <div className='flex gap-2 items-center '>
        <img
          src={`https://robohash.org/${findChannel?.flowName ?? 'default'}`}
          alt='imagen del usuario'
          className='w-[40px] h-[40px] rounded-full'
        />

        <div className='flex flex-col  items-start pt-3'>
          <span className='text-[#e9edef]'>{findChannel?.flowName}</span>
          <span className={`text-[#e9edef] text-xs duration-200 pointer-events-none pb-[6px] ${botIsTyping ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>escribiendo...</span>
        </div>
      </div>

      <div className='flex gap-5 items-center'>
        <SearchIcon className='fill-[#aebac1]' />
        <ConfigIcon className='fill-[#aebac1]' />
      </div>
    </header>
  )
}
