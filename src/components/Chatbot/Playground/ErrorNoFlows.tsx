import { Title } from '@/components/ui/Title'
import { RobotIcon } from '@components/Icons'
import { ButtonLink } from '@components/ui/ButtonLink'

export function ErrorNoFlows () {
  return (
    <div className='flex flex-col items-center justify-center gap-4 w-full h-full bg-bg dark:bg-bg-dark'>
      <RobotIcon className='w-[100px]' />
      <Title>🥲En este momento no tienes flujos guardados🥲</Title>
      <div className='flex gap-3 justify-center'>
        <ButtonLink title='Crear un flujo' to='/chatbot' />
        <ButtonLink title='Usar plantilla' to='/plantillas' />
      </div>
    </div>
  )
}
