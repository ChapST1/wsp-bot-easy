import { useGlobalUserFlowsStore } from '@/hooks/user/useGlobalUserFlowsStore'
import { API_DICEABEAR_URL } from '@/services/config'
import { Button } from '@components/ui/Button'
import { ButtonLink } from '@components/ui/ButtonLink'
import { toast } from 'sonner'

import { motion } from 'framer-motion'

interface UserFlowCardProps {
  flowName: string
  id: string
}

export function UserFlowCard ({ flowName, id }: UserFlowCardProps) {
  const { deleteFromUserFlows } = useGlobalUserFlowsStore()

  const handleDelete = () => {
    deleteFromUserFlows(id)
    toast.success('Chatbot eliminado de tus flujos')
  }

  return (
    <motion.div
      initial={{ opacity: 0, translateY: '20px' }}
      animate={{ opacity: 1, translateY: '0' }}
      exit={{ opacity: 0, translateY: '20px' }}
      transition={{ duration: 0.2 }}
      className=' md:w-full p-4 gap-4  border border-border-color dark:border-border-color-dark rounded-md'
    >
      <div className='flex flex-col justify-center gap-3 items-center '>
        <img
          src={`${API_DICEABEAR_URL}=${flowName}`}
          alt={`imagen del chatbot ${flowName}`}
          className='w-[60%] block border border-white/10 rounded-lg'
        />
        <p className='text-primary dark:text-primary-dark font-semibold text-center  text-sm w-[90%] overflow-hidden whitespace-nowrap text-ellipsis' title={flowName}>
          {flowName}
        </p>
      </div>

      <div className=' mt-3 col-span-6 grid grid-cols-2 gap-3'>
        <Button
          title='Usar con whatsapp'
          style={{ gridColumn: 'span 2' }}
        />
        <ButtonLink
          title='Testear'
          to={`/test/${id}`}
        />
        <ButtonLink
          title='Editar'
          to={`/chatbot/${id}/editar`}
        />
        <ButtonLink
          title='Inspeccionar'
          to={`/chatbot/${id}`}
        />
        <Button
          title='Eliminar'
          onClick={handleDelete}
        />
      </div>
    </motion.div>
  )
}
