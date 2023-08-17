import { ErrorIcon } from '../Icons'
import { ButtonLink } from './ButtonLink'
import { Title } from './Title'

export function Error () {
  return (
    <div className='flex flex-col items-center justify-center'>
      <ErrorIcon className=' w-36  stroke-[#fa6a6a]' />

      <Title position='center'>
        Oops! Algo salió mal
      </Title>

      <ButtonLink to='/chatbot' title='Ir al inicio' style={{ margin: '20px 0' }} />
    </div>
  )
}
