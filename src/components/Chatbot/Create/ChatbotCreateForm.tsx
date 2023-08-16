import { toast } from 'sonner'
import { Button } from '@components/ui/Button'
import { useGlobalUserFlowsStore } from '@/hooks/user/useGlobalUserFlowsStore'
import { useState } from 'react'
import { ButtonLink } from '@components/ui/ButtonLink'

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
    <form className=' max-w-2xl p-5 rounded-md m-auto border border-border-color dark:border-border-color-dark' onSubmit={handleSubmit}>
      <h2 className='text-center text-2xl pb-4 text-primary dark:text-primary-dark'>Configura tu bot</h2>

      <label htmlFor='flowName' className='w-full py-1 text-secondary dark:text-secondary-dark'>
        Nombre de tu negocio 👇
        <input
          type='text'
          id='flowName'
          name='nameCompany'
          className=' text-primary dark:text-primary-dark py-5 my-3 border-border-color dark:border-border-color-dark/50 bg-form-input-bg dark:bg-form-input-bg-dark text-slate-12 focus-visible:ring-slate-7 ease-in-out duration-200 placeholder:text-slate-11 h-8 rounded-[3px] px-2 text-sm relative w-full select-none appearance-none border outline-none focus-visible:border-border-color/50 dark:focus-visible:border-border-color-dark'
          required
          autoComplete='off'
          disabled={isCreateFlow}
          value={nameCompany}
          onChange={handleChange}
        />
      </label>

      <label htmlFor='defaultTrigger' className='w-full py-1 text-secondary dark:text-secondary-dark'>
        <span>Mensaje por defecto 👇</span>
        <textarea
          name='defaultTrigger'
          id='defaultTrigger'
          disabled={isCreateFlow}
          className='w-full h-72  text-primary dark:text-primary-dark py-5 my-3 border-border-color dark:border-border-color-dark bg-form-input-bg dark:bg-form-input-bg-dark text-slate-12 focus-visible:ring-slate-7 ease-in-out duration-200 placeholder:text-slate-11 rounded-[3px] px-2 text-sm relative select-none appearance-none border outline-none focus-visible:border-border-color/50 dark:focus-visible:border-border-color-dark resize-none'
          value={defaultTrigger}
          onChange={handleChange}
        />
      </label>

      <span className='block my-7 h-[2px] bg-white/5 w-[90%] m-auto' /> {/* this is a divider */}

      <label htmlFor='flowAction' className='w-full py-1 text-secondary dark:text-secondary-dark'>
        Palabra Clave 👇
        <input
          type='text'
          id='flowAction'
          name='action'
          className=' text-primary dark:text-primary-dark py-5 my-3 border-border-color dark:border-border-color-dark bg-form-input-bg dark:bg-form-input-bg-dark text-slate-12 focus-visible:ring-slate-7 ease-in-out duration-200 placeholder:text-slate-11 h-8 rounded-[3px] px-2 text-sm relative w-full select-none appearance-none border outline-none focus-visible:border-border-color/50 dark:focus-visible:border-border-color-dark'
          required
          autoComplete='off'
          value={action}
          onChange={handleChange}
        />
      </label>

      <label htmlFor='flowTrigger' className='w-full py-1 text-secondary dark:text-secondary-dark'>
        <span>Respuesta del bot a
          <span className={`${action.length === 0 ? 'invisible' : 'visible font-bold'}`}> 👉 {action}</span>
        </span>
        <textarea
          name='trigger'
          id=''
          className='w-full h-72  text-primary dark:text-primary-dark py-5 my-3 border-border-color dark:border-border-color-dark bg-form-input-bg dark:bg-form-input-bg-dark text-slate-12 focus-visible:ring-slate-7 ease-in-out duration-200 placeholder:text-slate-11 rounded-[3px] px-2 text-sm relative select-none appearance-none border outline-none focus-visible:border-border-color/50 dark:focus-visible:border-border-color-dark  resize-none'
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
