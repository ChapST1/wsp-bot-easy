import { Button } from '@/components/ui/Button'
import { Form } from '@/components/ui/Form'
import { Input } from '@/components/ui/Input'
import { Label } from '@/components/ui/Label'
import { TextArea } from '@/components/ui/TextArea'
import { useFlowEditById } from '@/hooks/edit/useFlowEditById'
import { useGlobalUserFlowsStore } from '@/hooks/user/useGlobalUserFlowsStore'
import { toast } from 'sonner'

export function ChatbotEditFormInitialsInputs () {
  const { defaultValue, flowName, conversations, id } = useFlowEditById()
  const { editFromUserFlows } = useGlobalUserFlowsStore()

  const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { flowNameInput, defaultMessageInput } = Object.fromEntries(new FormData(e.currentTarget))

    const newFlow = {
      id,
      flowName: flowNameInput,
      defaultValue: defaultMessageInput,
      conversations
    }

    editFromUserFlows(id as string, newFlow as never)

    toast.success('Flujo editado correctamente')
  }

  return (
    <Form onSubmit={handleSave}>

      <Label>
        Nombre del flujo

        <Input
          type='text'
          name='flowNameInput'
          defaultValue={flowName}
        />
      </Label>

      <Label>
        Mensaje predeterminado

        <TextArea
          name='defaultMessageInput'
          defaultValue={defaultValue}
        />
      </Label>

      <Button
        title='Guardar'
        type='submit'
        style={{ display: 'block', margin: 'auto' }}
      />

    </Form>
  )
}
