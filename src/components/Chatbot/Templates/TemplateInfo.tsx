import { useParams } from 'react-router-dom'
import { AllFlow } from '@/types/allFlows'
import { LightEffect } from '@/components/ui/LightEffect'
import { Title } from '@/components/ui/Title'
import { FormatMessage } from '@/components/ui/FormatMessage'

export function TemplateInfo ({ arrayFlows }: { arrayFlows: AllFlow[] }) {
  const { id } = useParams()
  const { conversations, flowName, defaultValue } = arrayFlows?.find(flow => flow.id === id) as AllFlow

  return (
    <div className='w-[90%] mt-5 bg-bg dark:bg-bg-dark py-4 px-6 border border-border-color dark:border-border-color-dark rounded-md  max-w-full  border-b-0 border-slate-5  md:w-[550px] relative overflow-hidden pt-12 '>
      <LightEffect />
      <Title position='center'>{flowName}</Title>

      <div>
        <p className='py-5 text-primary dark:text-primary-dark/90 font-semibold '>Mesaje predeterminado 👇</p>
        <div className='py-4 px-4 border border-border-color dark:border-border-color-dark/50 text-secondary dark:text-secondary-dark'>
          <FormatMessage message={defaultValue} />
        </div>
      </div>

      <div className=''>
        <h4 className='text-primary dark:text-primary-dark/90 font-semibold py-2 mt-5'>Conversaciones 👇</h4>
        <div className='px-4'>
          {
            conversations.length > 0
              ? (
                  conversations.map(({ trigger }, index) => {
                    return (
                      <div key={index} className='border border-border-color dark:border-border-color-dark/50 p-3 my-5 rounded-md'>
                        <p className='py-2 text-primary dark:text-primary-dark/80 font-semibold'>
                          Palabra Clave
                          <span className='border border-border-color dark:border-border-color-dark/50 px-2 py-2 mx-2 rounded-sm text-secondary dark:text-secondary-dark bg-gray-100 dark:bg-neutral-900'>{trigger.name}</span>
                        </p>
                        <p className='py-4 text-primary dark:text-primary-dark/80 font-semibold'>Repuesta del bot</p>
                        <p className='py-4 px-4 border border-border-color dark:border-border-color-dark/20 text-secondary dark:text-secondary-dark rounded-sm bg-gray-100 dark:bg-neutral-900'>{trigger.response}</p>
                      </div>
                    )
                  })
                )
              : (<p className='text-primary dark:text-primary-dark text-center'>Sin Conversaciones 🥲</p>)
        }
        </div>
      </div>
    </div>
  )
}
