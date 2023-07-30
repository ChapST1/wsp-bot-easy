import { useGlobalFlowStore } from '../hooks/useGlobalFlowsStore'
import { ChatbotPlaygroundContentMessageItem } from './ChatbotPlaygroundContentMessageItem'

interface ChatbotPlaygroundContentListOfMessagesProps {
  containerMessagesRef: React.RefObject<HTMLDivElement>
}

export function ChatbotPlaygroundContentListOfMessages ({ containerMessagesRef }: ChatbotPlaygroundContentListOfMessagesProps) {
  const { currentMessages } = useGlobalFlowStore()

  return (
    <div className=' w-full scroll-smooth   bg-transparent  px-5  flex flex-col  overflow-y-scroll gap-4 pt-[80px] pb-4' id='wsp-content-messages' ref={containerMessagesRef}>
      {
        currentMessages?.map(({ message, made, timestamp }, index) => {
          return (
            <ChatbotPlaygroundContentMessageItem key={index} message={message} made={made} timestamp={timestamp} />
          )
        })
    }
    </div>
  )
}
