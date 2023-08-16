import { Button } from '@/components/ui/Button'
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
    <form className='py-6 bg-bg dark:bg-bg-dark md:w-[600px]' onSubmit={handleSave}>
      <label htmlFor='' className=' block px-2  w-full py-1 text-secondary dark:text-secondary-dark'>
        Nombre del flujo
        <input
          type='text'
          className=' text-primary dark:text-primary-dark py-5 my-3 border-border-color dark:border-border-color-dark/50 bg-form-input-bg dark:bg-form-input-bg-dark text-slate-12 focus-visible:ring-slate-7 ease-in-out duration-200 placeholder:text-slate-11 h-8 rounded-[3px] px-2 text-sm relative w-full select-none appearance-none border outline-none focus-visible:border-border-color dark:border-border-color-dark'
          name='flowNameInput'
          defaultValue={flowName}
        />
      </label>

      <label htmlFor='flowTrigger' className='w-full py-1 text-secondary dark:text-secondary-dark block px-2 '>
        <span>Mensaje predeterminado</span>
        <textarea
          name='defaultMessageInput'
          id=''
          className='w-full h-72  text-primary dark:text-primary-dark py-5 my-3 border-border-color dark:border-border-color-dark/50 bg-form-input-bg dark:bg-form-input-bg-dark text-slate-12 focus-visible:ring-slate-7 ease-in-out duration-200 placeholder:text-slate-11 rounded-[3px] px-2 text-sm relative select-none appearance-none border outline-none focus-visible:border-border-color dark:border-border-color-dark  resize-none'
          defaultValue={defaultValue}
        />
      </label>

      <Button
        title='Guardar'
        type='submit'
        style={{ display: 'block', margin: 'auto' }}
      />

    </form>
  )
}
