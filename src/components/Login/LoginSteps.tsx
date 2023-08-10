import { SettingsIcon } from '@components/Icons'

export function LoginSteps () {
  return (
    <div className='flex flex-col py-3  md:gap-5 md:py-5'>
      <p className='text-[#eff7ff9d]  md:text-[18px]'>1. Abre whatsapp en tu celular.</p>
      <p className='text-[#eff7ff9d]   md:text-[18px] flex md:gap-2'>
        2. Toca en los <SettingsIcon />
        3 puntos y selecciona dispositivos vinculados.
      </p>
      <p className='text-[#eff7ff9d]  md:text-[18px]'>3. Toca en vincular un dispositivo.</p>
      <p className='text-[#eff7ff9d]  md:text-[18px]'>4. Escanee el código qr.</p>
    </div>
  )
}
