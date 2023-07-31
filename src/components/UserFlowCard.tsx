import { Button } from './Button'

interface UserFlowCardProps {
  flowName: string
  id: string
}

export function UserFlowCard ({ flowName, id }: UserFlowCardProps) {
  return (
    <div key={id} className='w-[300px] p-4 flex flex-col items-center justify-center gap-4  border border-white/10 rounded-md '>
      <img
        src={`https://robohash.org/${flowName}`}
        alt={`imagen del chatbot ${flowName}`}
        className='w-full block'
      />
      <p className='text-white'>{flowName}</p>

      <div className='flex flex-col gap-3'>
        <Button title='Usar con mi numero de whatsapp' />
        <Button title='Editar' />
        <Button title='Eliminar' />
      </div>
    </div>
  )
}
