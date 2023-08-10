import { LoginSteps } from './LoginSteps'

export function LoginBanner () {
  return (
    <div className='w-full  bg-[#f3f3f3] md:rounded-md p-8 md:p-14'>
      <h3 className='text-gray-600 text-2xl text-center md:text-start md:text-3xl '>Inicia sesion con WhatsApp</h3>

      <div className='flex  flex-wrap justify-center items-start  md:justify-between md:items-center'>
        <LoginSteps />
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/QR-code-obituary.svg/220px-QR-code-obituary.svg.png'
          alt=''
          className='w-[300px]'
        />
      </div>

      <h2 className='text-gray-600 text-2xl text-center py-7'>Tutorial</h2>
      <img
        src='images/login-tutorial.gif'
        alt='tutorial'
        className='w-[550px] rounded-md block m-auto'
      />
    </div>
  )
}
