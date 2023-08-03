import { useGlobalFlowStore } from '../../../hooks/useGlobalFlowsStore'
import { useGlobalUserFlowsStore } from '../../../hooks/useGlobalUserFlowsStore'

interface TemplateInfoProps {
  id: string | undefined
}

export function TemplateInfo ({ id }: TemplateInfoProps) {
  const { allFlows } = useGlobalFlowStore()
  const { userAllFlows } = useGlobalUserFlowsStore()

  const findFlow = [...allFlows, ...userAllFlows]?.find(flow => flow.id === id)

  return (
    <div className='w-[70%] mt-5 bg-[#000] py-4 px-6 border border-[#1f2123] rounded-md  max-w-full  border-b-0 border-slate-5  md:w-[550px]'>
      <h3 className='text-[#ededed] text-center text-2xl pb-3 font-bold'>{findFlow?.flowName}</h3>

      <div>
        <p className='py-5 text-[#ededed] font-semibold '>Mesaje predeterminado 👇</p>
        <p className='py-4 px-4 border border-white/5 text-[#c1c1c1]'>{findFlow?.defaultValue}</p>
      </div>

      <div className=''>
        <h3 className='text-[#ededed] font-semibold py-2 mt-5'>Conversaciones 👇</h3>
        <div className='px-4'>
          {
            findFlow?.conversations.map(({ trigger }, index) => {
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
        }
        </div>
      </div>
    </div>
  )
}
