import { Title } from '@/components/ui/Title'
import { useFlowEditById } from '@/hooks/edit/useFlowEditById'

export function ChatbotEditFormHeader () {
  const { flowName } = useFlowEditById()
  return (
    <header className=' px-2 bg-bg/75 dark:bg-bg-dark/75 backdrop-blur-md w-full h-[70px] flex items-center justify-center  sticky top-0 z-50'>
      <Title position='center'>{flowName}</Title>
    </header>
  )
}
