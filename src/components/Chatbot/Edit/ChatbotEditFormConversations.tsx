import { ChatbotEditFormListOfConversations } from './ChatbotEditFormListOfConversations'
import { Button } from '@/components/ui/Button'

export function ChatboEditFormConversations () {
  const handleAddConversation = () => {
    console.log('add a new conversations')
  }

  return (
    <form>
      <p className='text-center text-white'>Conversaciones</p>

      <div className='flex flex-col gap-5 [&>*:nth-child(1)]:mt-7'>
        <ChatbotEditFormListOfConversations />
      </div>

      <div className=' my-5 bg-[#000000c2] backdrop-blur-md py-3  rounded-md sticky bottom-0  flex gap-2 items-center justify-center'>
        <Button
          title='Agregar una conversacion'
          type='button'
          onClick={handleAddConversation}
        />
      </div>
    </form>
  )
}
