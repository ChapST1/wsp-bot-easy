import { Link } from 'react-router-dom'
import { RobotIcon } from '../components/Icons'

export function HomeLayout () {
  return (
    <section className='h-screen flex items-center justify-center'>
      <div className='flex flex-col items-center justify-between  gap-2 '>
        <RobotIcon className='w-[200px] border-b border-white/70' />

        <h1 className='font-extrabold  text-7xl text-[#eaeaea] text-center'>Chatbot <span className='text-7xl font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient'>Easy</span></h1>
        <p className='text-white/70 text-1xl text-center py-2'>
          Una plataforma para crear chatbots para Whatsapp  de forma fácil y rápida
        </p>

        <Link to='/login' className='inline-flex h-12 hover:animate-background-shine items-center justify-center rounded-md border border-[#1f2123] bg-[linear-gradient(110deg,#000103,60%,#1c1d1d,70%,#000103)] bg-[length:200%_100%] px-6 font-medium text-[#8b9095] transition-colors focus:outline-none hover:text-[#eaebec] duration-300 '>
          Empezar
        </Link>
      </div>
    </section>
  )
}
