import { toast } from 'sonner'
import { useGlobalUserFlowsStore } from '../hooks/useGlobalUserFlowsStore'
import { Button } from './Button'
import { ButtonLink } from './ButtonLink'
import { useGlobalFlowStore } from '../hooks/useGlobalFlowsStore'

interface TemplatesCardProps {
  flowName: string
  id: string
}

export function TemplatesCard ({ flowName, id }: TemplatesCardProps) {
  const { allFlows } = useGlobalFlowStore()

  const { userAllFlows, updateUserAllFlows } = useGlobalUserFlowsStore()

  const handleClick = () => {
    const findFlow = allFlows.find((flow) => flow.id === id)
    const flowExist = userAllFlows.find((flow) => flow.id === id)

    if (findFlow && !flowExist) {
      updateUserAllFlows(findFlow)
      toast.success('Plantilla agregada')
    } else {
      toast.error('La plantilla ya esta agregada')
    }
  }

  return (
    <div key={id} className='py-4 flex flex-col items-center justify-center border border-[#1f2123] rounded-md'>
      <img
        src={`https://robohash.org/${flowName}`}
        alt={flowName}
      />
      <h2 className=' text-white/70 py-2'>{flowName}</h2>

      <div className='flex gap-3'>
        <Button title='Usar plantilla' onClick={handleClick} />
        <ButtonLink title='Inspeccionar' to={`/plantillas/${id}`} />
      </div>
    </div>
  )
}
