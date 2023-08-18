import { Title } from '@/components/ui/Title'
import { AllFlow } from '../../../../types/allFlows'
import { UserFlowCard } from '@components/Chatbot/ChatbotHome/User/UserFlowCard'
import { AnimatePresence } from 'framer-motion'

export function UserFlowsList ({ userAllFlows }: { userAllFlows: AllFlow[] }) {
  return (
    <div className='px-[20px] flex flex-col gap-4 pt-8'>
      <Title position='center'>Tus chatbots</Title>
      <div className='w-full grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))]  gap-10 pb-7 '>
        <AnimatePresence>
          {
          userAllFlows.map(({ flowName, id }) => {
            return <UserFlowCard key={id} flowName={flowName} id={id} />
          })
        }
        </AnimatePresence>
      </div>
    </div>
  )
}
