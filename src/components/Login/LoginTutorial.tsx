import { useRef } from 'react'
import { LoginSteps } from '@components/Login/LoginSteps'
import { ImageBlurHero } from '@components/ui/ImageBlurHero'
import { Button } from '@components/ui/Button'

interface LoginTutorialProps {
  updateShowLoginTutorial: (value: boolean) => void
}

export function LoginTutorial ({ updateShowLoginTutorial }: LoginTutorialProps) {
  const modalRef = useRef<HTMLDivElement>(null)

  const handleCloseModal = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (e.target === modalRef.current) {
      updateShowLoginTutorial(false)
    }
  }

  const handleClick = () => {
    updateShowLoginTutorial(false)
  }

  return (
    <section className='w-full h-screen  fixed top-0 left-0 bg-[#000000d7] flex items-center justify-center backdrop-blur-sm' onClick={handleCloseModal} ref={modalRef}>
      <ImageBlurHero />
      <div className='bg-[#000] p-3'>
        <h3 className='text-[#eaeaea] text-2xl text-center pb-7'>¿Cómo se inicia sesión?</h3>
        <LoginSteps />

        <div className='flex flex-col justify-center items-center gap-4'>
          <span>👇👇</span>
          <img
            src='images/login-tutorial.gif'
            alt='tutorial'
            className='w-[550px] rounded-md'
          />
        </div>

        <Button
          style={{ display: 'block', margin: '30px auto 0 auto' }}
          title='Cerrar'
          onClick={handleClick}
        />
      </div>
    </section>
  )
}
