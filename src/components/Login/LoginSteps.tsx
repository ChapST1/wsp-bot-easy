import { SettingsIcon } from '../Icons'

export function LoginSteps () {
  return (
    <div className='flex flex-col gap-2 pb-3'>
      <p className='text-[#eff7ff9d]'>1. Abre whatsapp en tu celular.</p>
      <p className='text-[#eff7ff9d] flex gap-2'>2. Click en los <SettingsIcon /> 3 puntos y selecciona dispositivos vinculados.</p>
      <p className='text-[#eff7ff9d]'>3. Click en vincular un dispositivo.</p>
      <p className='text-[#eff7ff9d]'>4. Escanee el código qr.</p>
    </div>
  )
}
