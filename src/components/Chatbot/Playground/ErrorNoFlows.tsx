import { RobotIcon } from '@components/Icons'
import { ButtonLink } from '@components/ui/ButtonLink'

export function ErrorNoFlows () {
  return (
    <div className='flex flex-col items-center justify-center gap-4'>
      <RobotIcon className='w-[100px]' />
      <h3 className='text-[#eaeaea] text-center'>🥲En este momento no tienes flujos guardados🥲</h3>
      <div className='flex gap-3 justify-center'>
        <ButtonLink title='Crear un flujo' to='/chatbot' />
        <ButtonLink title='Usar plantilla' to='/plantillas' />
      </div>
    </div>
  )
}
