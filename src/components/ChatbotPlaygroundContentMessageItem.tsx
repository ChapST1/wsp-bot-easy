import { MessageViewed, MessageWingLeftIcon, MessageWingRightIcon } from './Icons'

interface ChatbotPlaygroundContentMessageItemProps {
  message: string
  made: string
  timestamp: string
}

export function ChatbotPlaygroundContentMessageItem ({ message, made, timestamp }: ChatbotPlaygroundContentMessageItemProps) {
  return (
    <div className={`flex items-center ${made === 'bot' ? 'justify-start' : 'justify-end'}`}>
      <div className={`text-white min-w-[90px] max-w-[70%] w-[max-content] ${made === 'bot' ? 'bg-[#1f2b32] rounded-tl-none' : 'bg-[#005c4b] rounded-tr-none'} w-[max-content] px-2 py-1 rounded-[5px] relative pb-6`}>
        {
          made === 'bot'
            ? (
              <MessageWingLeftIcon className='absolute  top-0 stroke-[transparent] fill-[#1f2b32] left-[-7px]' />
              )
            : (
              <MessageWingRightIcon className='absolute  top-0 stroke-[transparent] fill-[#005c4b] right-[-7px]' />

              )
        }
        <p>{message}</p>

        <div className='flex items-center gap-1  absolute bottom-[5px] right-2'>
          <span className='text-[11px] text-[#ffffff99]'>{timestamp}</span>
          <MessageViewed className='fill-[#53bdeb]' />
        </div>
      </div>
    </div>
  )
}
