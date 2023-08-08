import { useGlobalUserFlowsStore } from '@/hooks/user/useGlobalUserFlowsStore'
import { Button } from '@components/ui/Button'
import { ButtonLink } from '@components/ui/ButtonLink'
import { toast } from 'sonner'

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
    <div className='w-[280px] p-4 gap-4  border border-white/10 rounded-md'>
      <div className='flex flex-col justify-center gap-3 items-center '>
        <img
          src={`https://api.dicebear.com/6.x/bottts-neutral/svg?seed=${flowName}&radius=15`}
          alt={`imagen del chatbot ${flowName}`}
          className='w-[60%] block border border-white/10 rounded-md'
        />
        <p className='text-white font-semibold text-center  text-sm w-[90%] overflow-hidden whitespace-nowrap text-ellipsis' title={flowName}>
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
    </div>
  )
}
