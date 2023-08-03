import { Whatsapp } from '../../components/Chatbot/Playground'
import { ErrorNoFlows } from '../../components/Chatbot/Playground/ErrorNoFlows'
import { useGlobalUserFlowsStore } from '../../hooks/useGlobalUserFlowsStore'

export function ChatbotPlaygroundLayout () {
  const { userAllFlows } = useGlobalUserFlowsStore()

  return (
    <>
      <h3 className='text-[#eaeaea] text-center pb-4'>Testea tus bot</h3>
      <div className='w-[70%] h-[80vh]  m-auto rounded-lg border-[10px] border-white/25 flex items-center justify-center'>
        {userAllFlows.length > 0 && <Whatsapp />}
        {userAllFlows.length === 0 && <ErrorNoFlows />}
      </div>
    </>
  )
}
