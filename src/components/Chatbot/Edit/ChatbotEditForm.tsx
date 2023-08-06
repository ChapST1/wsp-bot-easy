import { AllFlow } from '../../../types/allFlows'

import { useParams } from 'react-router-dom'

import { useGlobalUserFlowsStore } from '@hooks/useGlobalUserFlowsStore'
import { ButtonLink } from '@components/ui/ButtonLink'
import { Button } from '@components/ui/Button'
import { ChatbotEditFormItem } from '@components/Chatbot/Edit/ChatbotEditFormItem'

export function ChatbotEditForm () {
  const { userAllFlows } = useGlobalUserFlowsStore()
  const { id } = useParams()
  const findFlow = userAllFlows.find(flow => flow.id === id) as AllFlow ?? ''
  const { conversations, defaultValue, flowName } = findFlow

  if (!conversations && !defaultValue && !flowName) return (<p>No se encontro la id</p>)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    console.log({ findFlow })
  }

  return (
    <form className='py-6 bg-[black] md:w-[600px]' onSubmit={handleSubmit}>
      <h2 className='text-2xl text-center text-white pb-6'>Editar 👉 {flowName}</h2>

      <label htmlFor='' className=' block px-2  w-full py-1 text-[#eff7ff9d]'>
        Palabra clave
        <input
          type='text'
          className=' text-[#e6e7e8] py-5 my-3 border-white/5 bg-neutral-950 text-slate-12 focus-visible:ring-slate-7 ease-in-out duration-200 placeholder:text-slate-11 h-8 rounded-[3px] px-2 text-sm relative w-full select-none appearance-none border outline-none focus-visible:border-white/10'
          defaultValue={flowName}
        />
      </label>

      <label htmlFor='flowTrigger' className='w-full py-1 text-[#eff7ff9d] block px-2 '>
        <span>Mensaje predeterminado</span>
        <textarea
          name='trigger'
          id=''
          className='w-full h-72  text-[#e6e7e8] py-5 my-3 border-white/5 bg-neutral-950 text-slate-12 focus-visible:ring-slate-7 ease-in-out duration-200 placeholder:text-slate-11 rounded-[3px] px-2 text-sm relative select-none appearance-none border outline-none focus-visible:border-white/10  resize-none'
          defaultValue={defaultValue}
        />
      </label>

      <span className='block my-7 h-[2px] bg-white/5 w-[90%] m-auto' /> {/* this is a divider */}

      <p className='text-center text-white'>Conversaciones</p>

      <div className='flex flex-col gap-5 [&>*:nth-child(1)]:mt-7'>
        {
          conversations.length > 0
            ? (
                conversations.map(({ trigger }) => {
                  return (
                    <ChatbotEditFormItem
                      key={trigger.name + trigger.response}
                      trigger={trigger}
                      currentFlowId={id as string}
                      flowNmame={flowName}
                      defaultValue={defaultValue}
                      currentFlowConversations={conversations}
                    />
                  )
                })
              )
            : (<p className='text-white'>Sin Conversaciones</p>)
      }
      </div>

      <div className='flex justify-between items-center my-5'>
        <div className='flex gap-4'>
          <Button title='Guardar' type='submit' />
          <ButtonLink title='Salir' to='/chatbot' />
        </div>

        <Button title='Agregar' type='button' />
      </div>
    </form>
  )
}
