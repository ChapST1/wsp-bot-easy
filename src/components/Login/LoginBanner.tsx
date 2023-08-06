import { Button } from '@components/ui/Button'
import { LightEffect } from '@components/ui/LightEffect'
import { useState } from 'react'
import { LoginTutorial } from '@components/Login/LoginTutorial'

export function LoginBanner () {
  const [openTutorial, setOpenTutorial] = useState(false)

  const handleTutorial = () => {
    setOpenTutorial(true)
  }

  return (
    <div className='w-[70%] m-auto  rounded-3xl border-b border-t border-t-[#1f2123] border-b-[#1f212325] py-10 relative '>
      <div className='w-[250px]  m-auto rounded-md overflow-hidden  h-[500px] flex flex-col items-center justify-between'>
        <div>
          <h3 className='text-[#eaeaea] text-2xl text-center pb-7'>Inicia Sesion</h3>
          <img
            src='https://cdn.ttgtmedia.com/rms/misc/qr_code_barcode.jpg'
            alt=''
            className='w-full  block opacity-80'
          />
          <h3 className='text-[#eff7ff9d] text-1xl text-center py-3'>Escanea el codigo qr</h3>
        </div>

        <Button
          title='Como puedo inicar sesion?'
          onClick={handleTutorial}
        />
      </div>
      <LightEffect />

      {
        openTutorial && <LoginTutorial updateShowLoginTutorial={setOpenTutorial} />
      }
    </div>
  )
}
