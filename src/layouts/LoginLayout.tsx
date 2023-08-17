import { LoginHeader } from '@/components/Login/LoginHeader'
import { useGlobalHandleModeStore } from '@/hooks/handleMode/useGlobalHandleModeStore'
import { LoginBanner } from '@components/Login/LoginBanner'

export function LoginLayout () {
  const { mode } = useGlobalHandleModeStore()

  const graddient = mode ? 'linear-gradient(to bottom, #030303 0%, #030303 32%, rgb(0, 0, 0) 20%, rgb(0, 0, 0) 100%)' : 'linear-gradient(to bottom, #00a884 0%, #00a884 32%, #edeff2 20%, #edeff2 100%)'

  return (
    <section
      className=' min-h-screen pb-20 '
      style={{
        background: `${graddient}`
      }}
    >
      <div className=' md:max-w-5xl m-auto p-2 md:p-0 '>
        <LoginHeader />
        <LoginBanner />
      </div>
    </section>
  )
}
