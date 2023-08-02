import { Button } from './Button'
import { ButtonLink } from './ButtonLink'

interface UserFlowCardProps {
  flowName: string
  id: string
}

export function UserFlowCard ({ flowName, id }: UserFlowCardProps) {
  return (
    <div key={id} className='w-[400px] p-4 gap-4  border border-white/10 rounded-md  grid grid-cols-8'>
      <div className='col-span-2  flex flex-col justify-start gap-3 items-end '>
        <img
          src={`https://robohash.org/${flowName}`}
          alt={`imagen del chatbot ${flowName}`}
          className='w-full block border border-white/10 rounded-md'
        />
        <p className='text-white font-semibold text-center w-full '>
          {flowName.toUpperCase()}
        </p>
      </div>

      <div className=' col-span-6 grid grid-cols-2 gap-3'>
        <Button title='Usar con whatsapp' style={{ gridColumn: 'span 2' }} />
        <ButtonLink title='Testear Bot' to={`/test/${id}`} />
        <Button title='Editar' />
        <ButtonLink title='Inspeccionar' to={`/chatbot/${id}`} />
        <Button title='Eliminar' />
      </div>
    </div>
  )
}
