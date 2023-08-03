import { toast } from 'sonner'
import { Button } from '../../ui/Button'
import { useGlobalUserFlowsStore } from '../../../hooks/useGlobalUserFlowsStore'
import { useState, useEffect } from 'react'
import { ChatbotCreateFormToggle } from './ChatbotCreateFormToggle'
import { ButtonLink } from '../../ui/ButtonLink'
import { ChatbotCreateFormLabel } from './ChatbotCreateFormLabel'

export function ChatbotCreateForm ({ editId }: { editId?: string }) {
  const { updateUserAllFlows, userAllFlows } = useGlobalUserFlowsStore()

  // form states
  const [isCreateFlow, setIsCreateFlow] = useState(false)
  const [nameCompany, setNameCompany] = useState('')
  const [action, setAction] = useState('')
  const [trigger, setTrigger] = useState('')
  const [defaultTrigger, setDefaultTrigger] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target

    if (name === 'nameCompany') setNameCompany(value)
    if (name === 'action') setAction(value)
    if (name === 'trigger') setTrigger(value)
    if (name === 'defaultTrigger') setDefaultTrigger(value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const flowIsInUsersAllFlows = userAllFlows.find((flow) => flow.flowName === nameCompany)

    const createFlow = {
      id: crypto.randomUUID(),
      defaultValue: defaultTrigger,
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

    if (!flowIsInUsersAllFlows) {
      updateUserAllFlows(createFlow)
      toast.message('Guardado con exito!!', {
        description: 'Recuerda que puedes seguir agregando mas acciones y respuesta a tu bot'
      })

      // reset inputs
      setIsCreateFlow(true)
      setAction('')
      setTrigger('')
      return
    }

    if (flowIsInUsersAllFlows) {
      const { conversations } = flowIsInUsersAllFlows

      const newConversation = {
        name: action,
        trigger: {
          name: action,
          response: trigger
        }
      }
      conversations.push(newConversation)

      flowIsInUsersAllFlows.conversations = conversations
      updateUserAllFlows(flowIsInUsersAllFlows)
      setAction('')
      setTrigger('')

      toast.message('La accion y respuesta fue agregada correctamente!', {
        description: 'Recuerda que puedes seguir agregando mas acciones y respuesta a tu bot'
      })
    }
  }

  useEffect(() => {
    if (editId) {
      const flowToEdit = userAllFlows.find((flow) => flow.id === editId)

      if (flowToEdit) {
        setNameCompany(flowToEdit.flowName)
        setDefaultTrigger(flowToEdit.defaultValue)
      }
    }
  }, [editId, userAllFlows])

  return (
    <form className=' max-w-2xl p-5 rounded-md m-auto border border-white/10' onSubmit={handleSubmit}>
      <h2 className='text-center text-2xl pb-4'>Configura tu bot</h2>

      <ChatbotCreateFormLabel
        labelFor='flowName'
        inputType='text'
        labelName='Nombre de tu negocio 👇'
        tagName='nameCompany'
        value={nameCompany}
        handleChange={handleChange}
        flowIsCreated={isCreateFlow}
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
        labelName='Nombre de la accion 👇'
        tagName='action'
        handleChange={handleChange}
        value={action}
      />

      <label htmlFor='flowTrigger' className='w-full py-1 text-[#eff7ff9d]'>
        <span>Respuesta de la accion
          <span className={`${action.length === 0 ? 'invisible' : 'visible'}`}> 👉 {action}</span>
        </span>
        <textarea
          name='trigger'
          id=''
          className='w-full h-72  text-[#e6e7e8] py-5 my-3 border-white/5 bg-neutral-950 text-slate-12 focus-visible:ring-slate-7 ease-in-out duration-200 placeholder:text-slate-11 rounded-[3px] px-2 text-sm relative select-none appearance-none border outline-none focus-visible:border-white/10  resize-none'
          value={trigger}
          onChange={handleChange}
        />
      </label>

      <label htmlFor='defaultTrigger' className='w-full py-1 text-[#eff7ff9d]'>
        <span>Mensaje por defecto 👇</span>
        <textarea
          name='defaultTrigger'
          id='defaultTrigger'
          disabled={isCreateFlow}
          className='w-full h-72  text-[#e6e7e8] py-5 my-3 border-white/5 bg-neutral-950 text-slate-12 focus-visible:ring-slate-7 ease-in-out duration-200 placeholder:text-slate-11 rounded-[3px] px-2 text-sm relative select-none appearance-none border outline-none focus-visible:border-white/10  resize-none'
          value={defaultTrigger}
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
