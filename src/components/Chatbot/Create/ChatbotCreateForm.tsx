import { toast } from 'sonner'
import { Button } from '@components/ui/Button'
import { useGlobalUserFlowsStore } from '@/hooks/user/useGlobalUserFlowsStore'
import { useState } from 'react'
import { ButtonLink } from '@components/ui/ButtonLink'
import { ChatbotCreateFormLabel } from '@components/Chatbot/Create/ChatbotCreateFormLabel'

export function ChatbotCreateForm () {
  const { addNewUserFlow, userAllFlows } = useGlobalUserFlowsStore()

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

    // revisar si el flujo ya existe en userAllFlows
    const flowIsInUsersAllFlows = userAllFlows.find((flow) => flow.flowName === nameCompany)

    // aqui se crea el flujo que se va a guardar en userAllFlows
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

    // si el flujo no existe en userAllFlows se crea toda la estructura o propiedades
    if (!flowIsInUsersAllFlows) {
      addNewUserFlow(createFlow)
      toast.message('Guardado con exito!!', {
        description: 'Recuerda que puedes seguir agregando mas acciones y respuesta a tu bot'
      })

      // resetear los estados
      setIsCreateFlow(true)
      setAction('')
      setTrigger('')
      return
    }

    // si el flujo ya existe en userAllFlows solo modificamos las propiedades de -> accion y respuesta
    if (flowIsInUsersAllFlows) {
      // obtenemos las conversaciones del flujo que ya existente
      const { conversations } = flowIsInUsersAllFlows

      // creamos la nueva conversacion
      const newConversation = {
        name: action,
        trigger: {
          name: action,
          response: trigger
        }
      }
      // agregamos la nueva conversacion a las conversaciones que ya existen
      conversations.push(newConversation)

      // actualizamos el flujo que ya existia con las nuevas conversaciones
      flowIsInUsersAllFlows.conversations = conversations

      // actualizamos el flujo que ya existia con las nuevas conversaciones
      addNewUserFlow(flowIsInUsersAllFlows)

      // resetear los estados
      setAction('')
      setTrigger('')

      toast.message('La accion y respuesta fue agregada correctamente!', {
        description: 'Recuerda que puedes seguir agregando mas acciones y respuesta a tu bot'
      })
    }
  }

  return (
    <form className=' max-w-2xl p-5 rounded-md m-auto border border-white/10' onSubmit={handleSubmit}>
      <h2 className='text-center text-2xl pb-4 text-[eaeaea]'>Configura tu bot</h2>

      <ChatbotCreateFormLabel
        labelFor='flowName'
        inputType='text'
        labelName='Nombre de tu negocio 👇'
        tagName='nameCompany'
        value={nameCompany}
        handleChange={handleChange}
        flowIsCreated={isCreateFlow}
      />

      {/*
      <ChatbotCreateFormToggle
        labelName='Quiero que cualquier palabra active inicialize al bot'
        tagName='randomKeyword'
      />

      <ChatbotCreateFormToggle
        labelName='Quiero que el chatbot sea sencible a mayusculas'
        tagName='caseSensitive'
      /> */}

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
          className='w-full h-72  text-[#eaeaea] py-5 my-3 border-white/5 bg-neutral-950 text-slate-12 focus-visible:ring-slate-7 ease-in-out duration-200 placeholder:text-slate-11 rounded-[3px] px-2 text-sm relative select-none appearance-none border outline-none focus-visible:border-white/10  resize-none'
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
          className='w-full h-72  text-[#eaeaea] py-5 my-3 border-white/5 bg-neutral-950 text-slate-12 focus-visible:ring-slate-7 ease-in-out duration-200 placeholder:text-slate-11 rounded-[3px] px-2 text-sm relative select-none appearance-none border outline-none focus-visible:border-white/10  resize-none'
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
