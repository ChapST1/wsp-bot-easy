import { Whatsapp } from '../../components/Chatbot/Playground'
import { ErrorNoFlows } from '../../components/Chatbot/Playground/ErrorNoFlows'
import { useGlobalUserFlowsStore } from '../../hooks/useGlobalUserFlowsStore'

export function ChatbotPlaygroundLayout () {
  const { userAllFlows } = useGlobalUserFlowsStore()

  return (
    <>
      <h3 className='text-white text-center text-2xl py-4 pb-7'>Testea tu bot</h3>
      <div className='w-[70%] h-[80vh]  m-auto rounded-lg border-[10px] border-[#eff7ff9d] flex items-center justify-center'>
        {userAllFlows.length > 0 && <Whatsapp />}
        {userAllFlows.length === 0 && <ErrorNoFlows />}
      </div>
    </>
  )
}
