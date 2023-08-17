import { LightEffect } from '../ui/LightEffect'
import { Title } from '../ui/Title'
import { LoginSteps } from './LoginSteps'

export function LoginBanner () {
  return (
    <div className='w-full  bg-bg dark:bg-bg-dark shadow md:rounded-md p-8 md:p-14 md:pt-10 border border-white/10 border-b-0 relative overflow-hidden'>
      <LightEffect />
      <Title>Inicia sesión con WhatsApp</Title>

      <div className='flex  flex-wrap justify-center items-start  md:justify-between md:items-center'>
        <LoginSteps />
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/QR-code-obituary.svg/220px-QR-code-obituary.svg.png'
          alt=''
          className='w-[300px] rounded-md'
        />
      </div>

      <Title position='center'>Tutorial</Title>
      <img
        src='images/login-tutorial.gif'
        alt='tutorial'
        className='w-[550px] rounded-md block m-auto mt-4'
      />
    </div>
  )
}
