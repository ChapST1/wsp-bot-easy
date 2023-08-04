import { toast } from 'sonner'
import { useGlobalUserFlowsStore } from '../../../hooks/useGlobalUserFlowsStore'
import { Button } from '../../ui/Button'
import { useGlobalFlowStore } from '../../../hooks/useGlobalFlowsStore'
import { ButtonLink } from '../../ui/ButtonLink'

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
    <>
      <div>
        <div className='bg-[linear-gradient(-45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-transparent relative max-w-md overflow-hidden rounded-xl border border-[#1f2123] bg-[length:250%_250%,100%_100%] bg-[position:200%,0,0,0] bg-no-repeat px-4 py-9 shadow-2xl hover:transition-[background-position_0s_ease] hover:bg-[position:-300%_0,0_0] hover:duration-[2s] flex flex-col items-center justify-center gap-3'>
          <img
          // src={`https://api.dicebear.com/6.x/adventurer-neutral/svg?seed=${flowName}`}
            src={`https://api.dicebear.com/6.x/bottts-neutral/svg?seed=${flowName}&radius=15`}
            alt={flowName}
            className='w-20 block m-auto'
          />
          <h2 className=' text-white/90  text-center'>{flowName}</h2>
        </div>
        <div className='flex  gap-3 my-4'>
          <Button title='Utilizar' onClick={handleClick} style={{ flex: 1 }} />
          <ButtonLink title='Inspeccionar' to={`/plantillas/${id}`} style={{ flex: 1 }} />
        </div>
      </div>

    </>
  )
}
