import { useGlobalUserFlowsStore } from '../hooks/useGlobalUserFlowsStore'
import { Button } from './Button'
import { ButtonLink } from './ButtonLink'

interface UserFlowCardProps {
  flowName: string
  id: string
}

export function UserFlowCard ({ flowName, id }: UserFlowCardProps) {
  const { deleteFromUserFlows } = useGlobalUserFlowsStore()

  const handleDelete = () => {
    deleteFromUserFlows(id)
  }

  return (
    <div key={id} className='w-[400px] p-4 gap-4  border border-white/10 rounded-md  grid grid-cols-8'>
      <div className='col-span-2  flex flex-col justify-start gap-3 items-end '>
        <img
          src={`https://robohash.org/${flowName}`}
          alt={`imagen del chatbot ${flowName}`}
          className='w-full block border border-white/10 rounded-md'
        />
        <p className='text-white font-semibold text-center  text-sm w-[90%] overflow-hidden whitespace-nowrap text-ellipsis' title={flowName}>
          {flowName}
        </p>
      </div>

      <div className=' col-span-6 grid grid-cols-2 gap-3'>
        <Button
          title='Usar con whatsapp'
          style={{ gridColumn: 'span 2' }}
        />
        <ButtonLink
          title='Testear Bot'
          to={`/test/${id}`}
        />
        <ButtonLink
          title='Editar'
          to={`/chatbot/crear/${id}`}
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
