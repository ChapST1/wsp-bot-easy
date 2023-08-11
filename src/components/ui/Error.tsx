import { ErrorIcon } from '../Icons'

export function Error () {
  return (
    <div className='flex flex-col items-center justify-center'>
      <ErrorIcon className=' w-36  stroke-[#fa6a6a]' />

      <h3 className='text-2xl text-[#eaeaea]'>
        Oops! Algo salió mal
      </h3>
    </div>
  )
}
