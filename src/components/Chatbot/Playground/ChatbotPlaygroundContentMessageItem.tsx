import { FormatMessage } from '@/components/ui/FormatMessage'
import { MessageViewed, MessageWingLeftIcon, MessageWingRightIcon } from '@components/Icons'

interface ChatbotPlaygroundContentMessageItemProps {
  message: string
  made: string
  timestamp: string
}

export function ChatbotPlaygroundContentMessageItem ({ message, made, timestamp }: ChatbotPlaygroundContentMessageItemProps) {
  return (
    <div className={`flex items-center ${made === 'bot' ? 'justify-start' : 'justify-end'} z-10`}>
      <div className={`text-primary dark:text-primary-dark min-w-[90px] max-w-[70%] w-[max-content] ${made === 'bot' ? ' bg-content-message-bot-bg dark:bg-content-message-bot-bg-dark rounded-tl-none' : ' bg-content-message-user-bg dark:bg-content-message-user-bg-dark rounded-tr-none'} w-[max-content] px-2 py-1 rounded-[5px] relative pb-6`}>
        {
          made === 'bot'
            ? (
              <MessageWingLeftIcon className='absolute  top-0 stroke-[transparent] fill-content-message-bot-bg dark:fill-content-message-bot-bg-dark left-[-7px]' />
              )
            : (
              <MessageWingRightIcon className='absolute  top-0 stroke-[transparent] fill-content-message-user-bg dark:fill-content-message-user-bg-dark right-[-7px]' />

              )
        }

        <div>
          <FormatMessage message={message} />
        </div>
        <div className='flex items-center gap-1  absolute bottom-[5px] right-2'>
          <span className='text-[11px]  text-[#4d4d4d] dark:text-[#ffffff99] '>{timestamp}</span>
          <MessageViewed className='fill-[#53bdeb]' />
        </div>
      </div>
    </div>
  )
}
