import { ButtonLink } from '../components/ui/ButtonLink'

export function LoginLayout () {
  return (
    <section className='py-[50px]'>
      <div className='w-[70%] m-auto  rounded-3xl border-t border-[#1f2123] pt-10 relative '>
        {/* styles */}
        <div
          aria-hidden='true'
          className='left-1/2 top-0 w-[300px] max-w-[300px] user-select-none center pointer-events-none absolute h-px  -translate-x-1/2 -translate-y-1/2'
          style={{
            background: 'linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0.0) 0%, rgba(143, 143, 143, 0.67) 50%, rgba(0, 0, 0, 0) 100%)'
          }}
        >

          <div
            aria-hidden='true'
            className='-top-1 left-1/2 h-[200px] w-full max-w-[200px] md:max-w-[400px] user-select-none center pointer-events-none absolute  -translate-x-1/2 -translate-y-1/2'
            style={{ background: 'conic-gradient(from 90deg at 50% 50%, #00000000 50%, #000 50%),radial-gradient(rgba(200,200,200,0.1) 0%, transparent 80%)' }}
          />
        </div>
        {/* styles */}

        <div className='w-[250px]  m-auto rounded-md overflow-hidden  h-[500px] flex flex-col items-center justify-between'>
          <div>
            <h3 className='text-[#eaeaea] text-2xl text-center pb-7'>Inicia Sesion</h3>

            <img
              src='https://cdn.ttgtmedia.com/rms/misc/qr_code_barcode.jpg'
              alt=''
              className='w-full  block opacity-80'
            />
            <h3 className='text-[#eaeaea] text-1xl text-center py-3'>Escanea el codigo qr</h3>

          </div>

          <ButtonLink title='Como puedo inicar sesion?' to='/' />
        </div>
      </div>
    </section>
  )
}
