import { ButtonLink } from '@/components/ui/ButtonLink'
import { useMode } from '@/hooks/handleMode/useMode'
import { RobotIcon } from '@components/Icons'
import { ImageBlurHero } from '@components/ui/ImageBlurHero'

export function HomeLayout () {
  useMode()

  return (
    <section className='h-screen flex items-center justify-center'>
      <ImageBlurHero />

      <div className='flex flex-col items-center justify-between gap-2'>
        <RobotIcon className=' w-[200px] border-b border-white/70' />
        <h1 className='font-extrabold  text-7xl text-primary dark:text-primary-dark text-center'>Chatbot <span className='text-7xl bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient'>Easy</span></h1>
        <p className='text-secondary dark:text-secondary-dark font-medium text-center py-2 w-full md:w-[70%]'>
          Una plataforma para crear chatbots para Whatsapp  de forma fácil y rápida
        </p>

        <ButtonLink title='Empezar' to='/login' />
      </div>
    </section>
  )
}
