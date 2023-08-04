import { Whatsapp } from '../../components/Chatbot/Playground'
import { ErrorNoFlows } from '../../components/Chatbot/Playground/ErrorNoFlows'
import { useGlobalUserFlowsStore } from '../../hooks/useGlobalUserFlowsStore'
import { useGlobalWspPlaygroundStore } from '../../hooks/useGlobalWspPlaygroundStore'

export function ChatbotPlaygroundLayout () {
  const { userAllFlows } = useGlobalUserFlowsStore()
  const { isActiveFullScreen } = useGlobalWspPlaygroundStore()

  return (
    <>
      <h3 className='text-white text-center text-2xl py-4 pb-7'>Testea tu bot</h3>
      <div className={`${isActiveFullScreen ? 'fixed w-full h-screen top-0 left-0 z-50 ' : 'w-[70%] h-[70vh] rounded-lg border-[10px] border-[#eff7ff9d]'} m-auto  flex items-center justify-center`}>
        {userAllFlows.length > 0 && <Whatsapp />}
        {userAllFlows.length === 0 && <ErrorNoFlows />}
      </div>

    </>
  )
}
