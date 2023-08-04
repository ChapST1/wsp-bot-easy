import { useGlobalWspPlaygroundStore } from '../../../hooks/useGlobalWspPlaygroundStore'
import { DisableFullScreenIcon, EnableFullScreenIcon } from '../../Icons'

export function ChatbotPlaygroundSidebarScreenOptions () {
  const { isActiveFullScreen, updateIsActiveFullScreen } = useGlobalWspPlaygroundStore()

  const handleClick = () => {
    updateIsActiveFullScreen(!isActiveFullScreen)
  }

  return (
    <div className=' scale-75' onClick={handleClick}>
      {
        isActiveFullScreen
          ? (<DisableFullScreenIcon className='fill-white duration-300 stroke-[#aebac1] hover:stroke-[#e9ebed] w-8  cursor-pointer' />)
          : (<EnableFullScreenIcon className='fill-white duration-300 stroke-[#aebac1] hover:stroke-[#e9ebed] w-8  cursor-pointer' />)
      }
    </div>
  )
}
