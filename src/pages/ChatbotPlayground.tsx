import { Whatsapp } from '../layouts/Whatsapp'

export function ChatbotPlayground () {
  return (
    <>
      <h3 className='text-white text-center pb-4'>Testea tus bot</h3>
      <div className='w-[70%] h-[80vh]  m-auto rounded-lg border-[10px] border-white/25'>
        <Whatsapp />
      </div>
    </>
  )
}
