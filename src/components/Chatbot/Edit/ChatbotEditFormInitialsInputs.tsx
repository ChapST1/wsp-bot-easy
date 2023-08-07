import { Button } from '@/components/ui/Button'
import { useFlowEditById } from '@/hooks/useFlowEditById'
import { useGlobalUserFlowsStore } from '@/hooks/useGlobalUserFlowsStore'
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
    <form className='py-6 bg-[black] md:w-[600px]' onSubmit={handleSave}>
      <label htmlFor='' className=' block px-2  w-full py-1 text-[#eff7ff9d]'>
        Nombre del flujo
        <input
          type='text'
          className=' text-[#e6e7e8] py-5 my-3 border-white/5 bg-neutral-950 text-slate-12 focus-visible:ring-slate-7 ease-in-out duration-200 placeholder:text-slate-11 h-8 rounded-[3px] px-2 text-sm relative w-full select-none appearance-none border outline-none focus-visible:border-white/10'
          name='flowNameInput'
          defaultValue={flowName}
        />
      </label>

      <label htmlFor='flowTrigger' className='w-full py-1 text-[#eff7ff9d] block px-2 '>
        <span>Mensaje predeterminado</span>
        <textarea
          name='defaultMessageInput'
          id=''
          className='w-full h-72  text-[#e6e7e8] py-5 my-3 border-white/5 bg-neutral-950 text-slate-12 focus-visible:ring-slate-7 ease-in-out duration-200 placeholder:text-slate-11 rounded-[3px] px-2 text-sm relative select-none appearance-none border outline-none focus-visible:border-white/10  resize-none'
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
