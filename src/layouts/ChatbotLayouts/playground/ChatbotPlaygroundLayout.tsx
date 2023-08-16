import { Whatsapp } from '@components/Chatbot/Playground'
import { ErrorNoFlows } from '@components/Chatbot/Playground/ErrorNoFlows'
import { useGlobalUserFlowsStore } from '@/hooks/user/useGlobalUserFlowsStore'
import { useGlobalWspPlaygroundStore } from '@/hooks/wspPlayground/useGlobalWspPlaygroundStore'
import { AppleIcon } from '@/components/Icons'

export function ChatbotPlaygroundLayout () {
  const { userAllFlows } = useGlobalUserFlowsStore()
  const { isActiveFullScreen } = useGlobalWspPlaygroundStore()

  return (
    <>
      <div className={`${isActiveFullScreen && userAllFlows.length > 0 ? 'fixed md:w-full md:h-screen top-0 left-0 z-50 ' : ' relative md:w-[70%] md:h-[80vh] rounded-lg bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-gray-200 via-gray-400 to-gray-600 p-3 pb-10'} m-auto  flex items-center justify-center`}>
        {userAllFlows.length > 0 && <Whatsapp />}
        {userAllFlows.length === 0 && <ErrorNoFlows />}

        <AppleIcon className='absolute w-7 bottom-2' />
      </div>
    </>
  )
}
