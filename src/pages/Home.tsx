import { RobotIcon } from '../components/Icons'
import { Link } from 'react-router-dom'

export function Home () {
  return (
    <section className='h-screen flex items-center justify-center'>
      <div className='flex flex-col items-center justify-between  gap-2 '>
        <RobotIcon className='w-[200px] border-b border-white/70' />

        <h1 className='font-extrabold text-transparent text-7xl text-white'>Chatbot <span className='text-7xl font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient'>Easy</span></h1>
        <p className='text-white/70 text-1xl text-center py-2'>
          Una plataforma para crear chatbots para Whatsapp <br /> de forma fácil y rápida
        </p>

        <Link to='/login' className='  inline-flex h-12 animate-background-shine items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'>
          Empezar
        </Link>
      </div>
    </section>
  )
}
