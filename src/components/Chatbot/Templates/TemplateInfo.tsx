import { useParams } from 'react-router-dom'
import { AllFlow } from '@/types/allFlows'
import { LightEffect } from '@/components/ui/LightEffect'

export function TemplateInfo ({ arrayFlows }: { arrayFlows: AllFlow[] }) {
  const { id } = useParams()
  const { conversations, flowName, defaultValue } = arrayFlows?.find(flow => flow.id === id) as AllFlow

  return (
    <div className='w-[90%] mt-5 bg-[#000] py-4 px-6 border border-[#1f2123] rounded-md  max-w-full  border-b-0 border-slate-5  md:w-[550px] relative overflow-hidden pt-12 '>
      <LightEffect />
      <h3 className='text-[#ededed] text-center text-2xl pb-3 font-bold'>{flowName}</h3>

      <div>
        <p className='py-5 text-[#ededed] font-semibold '>Mesaje predeterminado 👇</p>
        <p className='py-4 px-4 border border-white/5 text-[#c1c1c1]'>{defaultValue}</p>
      </div>

      <div className=''>
        <h3 className='text-[#ededed] font-semibold py-2 mt-5'>Conversaciones 👇</h3>
        <div className='px-4'>
          {
            conversations.length > 0
              ? (
                  conversations.map(({ trigger }, index) => {
                    return (
                      <div key={index} className='border border-white/5 p-3 my-5 rounded-md'>
                        <p className='py-2 text-[#d4d4d4] font-semibold'>
                          Palabra Clave
                          <span className='border border-white/5 px-2 py-2 mx-2 rounded-sm text-[#c1c1c1] bg-neutral-900'>{trigger.name}</span>
                        </p>
                        <p className='py-4 text-[#d4d4d4] font-semibold'>Repuesta del bot</p>
                        <p className='py-4 px-4 border border-white/5 text-[#c1c1c1] bg-neutral-900 rounded-sm'>{trigger.response}</p>
                      </div>
                    )
                  })
                )
              : (<p className='text-white text-center'>Sin Conversaciones 🥲</p>)
        }
        </div>
      </div>
    </div>
  )
}
