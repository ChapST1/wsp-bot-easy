import { toast } from 'sonner'
import { useGlobalUserFlowsStore } from '@/hooks/user/useGlobalUserFlowsStore'
import { Button } from '@components/ui/Button'
import { useGlobalFlowStore } from '@/hooks/templates/useGlobalFlowsStore'
import { ButtonLink } from '@components/ui/ButtonLink'
import { API_DICEABEAR_URL } from '@/services/config'

import { motion } from 'framer-motion'

interface TemplatesCardProps {
  flowName: string
  id: string
}

export function TemplatesCard ({ flowName, id }: TemplatesCardProps) {
  const { allFlows } = useGlobalFlowStore()
  const { userAllFlows, addNewUserFlow } = useGlobalUserFlowsStore()

  const handleClick = () => {
    const findFlow = allFlows.find((flow) => flow.id === id)
    const flowExist = userAllFlows.find((flow) => flow.id === id)

    if (findFlow && !flowExist) {
      addNewUserFlow(findFlow)
      toast.success('Plantilla agregada')
    } else {
      toast.error('La plantilla ya esta agregada')
    }
  }
  // #f2f3f5
  return (
    <>
      <motion.div
        initial={{ opacity: 0, translateY: '20px' }}
        animate={{ opacity: 1, translateY: '0' }}
        exit={{ opacity: 0, translateY: '20px' }}
        transition={{ duration: 0.2 }}
      >
        <div className='bg-[linear-gradient(-45deg,transparent_20%,rgba(243, 244, 246, .2)_50%,transparent_80%,transparent_100%)] dark:bg-transparent dark:bg-[linear-gradient(-45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-transparent relative  overflow-hidden rounded-xl border border-border-color dark:border-border-color-dark bg-[length:250%_250%,100%_100%] bg-[position:200%,0,0,0] bg-no-repeat px-4 py-9 dark:shadow-2xl hover:transition-[background-position_0s_ease] hover:bg-[position:-300%_0,0_0] hover:duration-[2s] flex flex-col items-center justify-center gap-3 group'>
          <img
            src={`${API_DICEABEAR_URL}=${flowName}`}
            alt={flowName}
            className='w-20 block m-auto rounded-lg'
          />

          <h2 className=' text-secondary dark:text-secondary-dark group-hover:text-primary dark:group-hover:text-primary-dark  text-center duration-500'>{flowName}</h2>
        </div>
        <div className='flex  gap-3 my-4'>
          <Button
            title='Utilizar'
            onClick={handleClick}
            style={{
              flex: 1
            }}
          />
          <ButtonLink
            title='Inspeccionar'
            to={`/plantillas/${id}`}
            style={{
              flex: 1
            }}
          />
        </div>
      </motion.div>

    </>
  )
}
