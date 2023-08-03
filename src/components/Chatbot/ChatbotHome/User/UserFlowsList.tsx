import { AllFlow } from '../../../../types/allFlows'
import { UserFlowCard } from './UserFlowCard'

export function UserFlowsList ({ userAllFlows }: { userAllFlows: AllFlow[] }) {
  return (
    <div className='px-[20px] flex flex-col gap-4 pt-4'>
      <h3 className='text-white text-2xl py-2'>Tus Chatbots</h3>
      <div className='w-full justify-start flex flex-wrap gap-6 pb-5 '>
        {
          userAllFlows.map(({ flowName, id }) => {
            return <UserFlowCard key={id} flowName={flowName} id={id} />
          })
        }
      </div>
    </div>
  )
}
