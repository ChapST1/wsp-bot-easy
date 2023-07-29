import { RobotIcon } from '../components/Icons'
import { useChatbotStore } from '../hooks/useChatbotStore'

export function ChatbotBanner () {
  const { updateIsActiveCreateMode } = useChatbotStore()

  const handleClick = () => {
    updateIsActiveCreateMode(true)
  }

  return (
    <>
      <RobotIcon className='w-[200px] block m-auto' />
      <button className=' bg-[#000] border border-white/10 px-7 py-2 block my-2 mx-auto duration-300 text-white rounded-lg hover:scale-95' onClick={handleClick}>Crear</button>
    </>
  )
}
