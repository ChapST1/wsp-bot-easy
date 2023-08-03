import { RobotIcon } from '../../Icons'
import { ButtonLink } from '../../ui/ButtonLink'

export function ErrorNoFlows () {
  return (
    <div className='flex flex-col items-center justify-center gap-4'>
      <RobotIcon className='w-[100px]' />
      <h3 className='text-[#eaeaea]'>🥲En este momento no tienes flujos guardados🥲</h3>
      <div className='flex gap-3 justify-center'>
        <ButtonLink title='Crear un flujo' to='/chatbot' />
        <ButtonLink title='Usar plantilla' to='/plantillas' />
      </div>
    </div>
  )
}
