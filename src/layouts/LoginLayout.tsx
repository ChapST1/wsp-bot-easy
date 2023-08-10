import { LoginHeader } from '@/components/Login/LoginHeader'
import { LoginBanner } from '@components/Login/LoginBanner'

export function LoginLayout () {
  return (
    <section
      className=' min-h-screen pb-20 '
      style={{
        background: 'linear-gradient(to bottom, #111 0%, #111 32%, rgb(0, 0, 0) 20%, rgb(0, 0, 0) 100%)'
      }}
    >
      <div className=' md:max-w-5xl m-auto p-2 md:p-0'>
        <LoginHeader />
        <LoginBanner />
      </div>
    </section>
  )
}
