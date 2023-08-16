import { ErrorIcon } from '../Icons'
import { ButtonLink } from './ButtonLink'

export function Error () {
  return (
    <div className='flex flex-col items-center justify-center'>
      <ErrorIcon className=' w-36  stroke-[#fa6a6a]' />

      <h3 className='text-2xl text-primary dark:text-primary-dark'>
        Oops! Algo salió mal
      </h3>

      <ButtonLink to='/chatbot' title='Ir al inicio' style={{ margin: '20px 0' }} />
    </div>
  )
}
