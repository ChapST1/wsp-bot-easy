import { AllFlow } from '../../../../types/allFlows'

import { UserFlowCard } from '@components/Chatbot/ChatbotHome/User/UserFlowCard'

export function UserFlowsList ({ userAllFlows }: { userAllFlows: AllFlow[] }) {
  return (
    <div className='px-[20px] flex flex-col gap-4 pt-4'>
      <h3 className='text-white text-center text-2xl py-4 pb-7'>Tus chatbots</h3>
      <div className='w-full grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))]  gap-10 pb-7 '>
        {
          userAllFlows.map(({ flowName, id }) => {
            return <UserFlowCard key={id} flowName={flowName} id={id} />
          })
        }
      </div>
    </div>
  )
}
