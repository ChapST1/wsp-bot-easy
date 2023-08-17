import { toast } from 'sonner'
import { Button } from '@components/ui/Button'
import { useGlobalUserFlowsStore } from '@/hooks/user/useGlobalUserFlowsStore'
import { useState } from 'react'
import { ButtonLink } from '@components/ui/ButtonLink'
import { Label } from '@/components/ui/Label'
import { Input } from '@/components/ui/Input'
import { TextArea } from '@/components/ui/TextArea'
import { Form } from '@/components/ui/Form'

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
    <Form onSubmit={handleSubmit}>
      <h2 className='text-center text-2xl pb-4 text-primary dark:text-primary-dark'>Configura tu bot</h2>

      <Label htmlFor='flowName'>
        Nombre de tu negocio 👇

        <Input
          type='text'
          id='flowName'
          name='nameCompany'
          required
          autoComplete='off'
          disabled={isCreateFlow}
          value={nameCompany}
          onChange={handleChange}
        />
      </Label>

      <Label htmlFor='defaultTrigger'>
        Mensaje por defecto 👇

        <TextArea
          name='defaultTrigger'
          id='defaultTrigger'
          required
          disabled={isCreateFlow}
          value={defaultTrigger}
          onChange={handleChange}
        />
      </Label>

      <span className='block my-7 h-[2px] bg-white/5 w-[90%] m-auto' /> {/* this is a divider */}

      <Label htmlFor='flowAction'>
        Palabra Clave 👇

        <Input
          type='text'
          id='flowAction'
          name='action'
          required
          autoComplete='off'
          value={action}
          onChange={handleChange}
        />
      </Label>

      <Label htmlFor='flowTrigger'>
        <span>Respuesta del bot a
          <span className={`${action.length === 0 ? 'invisible' : 'visible font-bold'}`}> 👉 {action}</span>
        </span>

        <TextArea
          name='trigger'
          id='flowTrigger'
          required
          value={trigger}
          onChange={handleChange}
        />
      </Label>

      <footer className='flex justify-start items-center gap-5 sticky bottom-0 bg-bg dark:bg-bg-dark py-3'>
        <Button title='Guardar' />
        <ButtonLink title='salir' to='/chatbot' />
      </footer>

    </Form>
  )
}
