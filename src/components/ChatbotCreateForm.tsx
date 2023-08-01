import { ChatbotCreateFormLabel } from './ChatbotCreateFormLabel'
import { ChatbotCreateFormToggle } from './ChatbotCreateFormToggle'
import { toast } from 'sonner'
import { ButtonLink } from './ButtonLink'
import { Button } from './Button'
import { useGlobalUserFlowsStore } from '../hooks/useGlobalUserFlowsStore'
import { useState } from 'react'

export function ChatbotCreateForm () {
  const { updateUserAllFlows } = useGlobalUserFlowsStore()
  const [nameCompany, setNameCompany] = useState('')
  const [action, setAction] = useState('')
  const [trigger, setTrigger] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target

    if (name === 'nameCompany') setNameCompany(value)
    if (name === 'action') setAction(value)
    if (name === 'trigger') setTrigger(value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const createFlow = {
      id: crypto.randomUUID(),
      defaultValue: 'No entiendo lo que dices',
      flowName: nameCompany,
      conversations: [
        {
          name: action,
          trigger: {
            name: action,
            response: trigger
          }
        }
      ]
    }

    updateUserAllFlows(createFlow)

    toast.message('Guardado con exito!!', {
      description: 'Recuerda que puedes seguir agregando mas acciones y respuesta a tu bot'
    })

    // reset inputs
    setNameCompany('')
    setAction('')
    setTrigger('')
  }

  return (
    <form className=' max-w-2xl p-5 rounded-md m-auto border border-white/10' onSubmit={handleSubmit}>
      <h2 className='text-center text-2xl pb-4'>Configura tu bot</h2>

      <ChatbotCreateFormLabel
        labelFor='flowName'
        inputType='text'
        labelName='Nombre de tu negocio?'
        tagName='nameCompany'
        value={nameCompany}
        handleChange={handleChange}
      />

      <ChatbotCreateFormToggle
        labelName='Quiero que cualquier palabra active inicialize al bot'
        tagName='randomKeyword'
      />

      <ChatbotCreateFormToggle
        labelName='Quiero que el chatbot sea sencible a mayusculas'
        tagName='caseSensitive'
      />

      <span className='block my-7 h-[2px] bg-white/5 w-[90%] m-auto' /> {/* this is a divider */}

      <ChatbotCreateFormLabel
        labelFor='flowAction'
        inputType='text'
        labelName='Nombre de la accion'
        tagName='action'
        handleChange={handleChange}
        value={action}
      />

      <label htmlFor='flowTrigger' className='w-full py-1 text-[#eff7ff9d]'>
        <span>Respuesta de la accion</span>
        <textarea
          name='trigger'
          id=''
          className='w-full h-72  text-[#e6e7e8] py-5 my-3 border-white/5 bg-neutral-950 text-slate-12 focus-visible:ring-slate-7 ease-in-out duration-200 placeholder:text-slate-11 rounded-[3px] px-2 text-sm relative select-none appearance-none border outline-none focus-visible:border-white/10  resize-none'
          value={trigger}
          onChange={handleChange}
        />
      </label>

      <div className='flex justify-start items-center gap-5'>
        <Button title='Guardar' />
        <ButtonLink title='salir' to='/chatbot' />
      </div>

    </form>
  )
}
