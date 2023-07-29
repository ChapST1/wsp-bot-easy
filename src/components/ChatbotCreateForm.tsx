import { ChatbotCreateFormLabel } from './ChatbotCreateFormLabel'
import { useChatbotStore } from '../hooks/useChatbotStore'
import { ChatbotCreateFormToggle } from './ChatbotCreateFormToggle'
import { toast } from 'sonner'

export function ChatbotCreateForm () {
  const { updateIsActiveCreateMode } = useChatbotStore()

  const handleClick = () => {
    updateIsActiveCreateMode(false)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const { nameCompany, randomKeyword, caseSensitive, action, trigger } = Object.fromEntries(new FormData(event.currentTarget))

    console.log({
      nameCompany,
      randomKeyword: randomKeyword === '',
      caseSensitive: caseSensitive === '',
      action,
      trigger
    })

    toast.success('Las instrucciones se han guardado correctamente!!')
  }
  return (

    <form className=' max-w-2xl p-5 rounded-md m-auto border border-white/10' onSubmit={handleSubmit}>
      <h2 className='text-center text-2xl pb-4'>Configura tu bot</h2>

      <ChatbotCreateFormLabel labelFor='flowName' inputType='text' labelName='Nombre de tu negocio?' tagName='nameCompany' />

      <ChatbotCreateFormToggle labelName='Quiero que cualquier palabra active inicialize al bot' tagName='randomKeyword' />
      <ChatbotCreateFormToggle labelName='Quiero que el chatbot sea sencible a mayusculas' tagName='caseSensitive' />

      <span className='block my-7 h-[2px] bg-white/5 w-[90%] m-auto' /> {/* this is a divider */}

      <ChatbotCreateFormLabel labelFor='flowAction' inputType='text' labelName='Nombre de la accion' tagName='action' />

      <label htmlFor='flowTrigger' className='w-full py-1 text-[#eff7ff9d]'>
        <span>Respuesta de la accion</span>
        <textarea name='trigger' id='' className='w-full h-72  text-[#e6e7e8] py-5 my-3 border-white/5 bg-[#131415] text-slate-12 focus-visible:ring-slate-7 ease-in-out duration-200 placeholder:text-slate-11 rounded-[3px] px-2 text-sm relative select-none appearance-none border outline-none focus-visible:border-white/10  resize-none' />
      </label>

      <div className='flex justify-start items-center gap-5'>
        <button className=' bg-[#000] border border-white/10 px-7 py-2 block my-2  duration-300 text-white rounded-lg hover:scale-95'>Guardar</button>
        <button className=' bg-[#000] border border-white/10 px-7 py-2 block my-2  duration-300 text-white rounded-lg hover:scale-95' onClick={handleClick}>Salir</button>
      </div>

    </form>
  )
}
