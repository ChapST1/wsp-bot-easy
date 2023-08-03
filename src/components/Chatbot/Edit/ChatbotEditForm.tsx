import { useParams } from 'react-router-dom'
import { useGlobalUserFlowsStore } from '../../../hooks/useGlobalUserFlowsStore'
import { ChatbotCreateFormLabel } from '../Create/ChatbotCreateFormLabel'
import { AllFlow } from '../../../types/allFlows'
import { ButtonLink } from '../../ui/ButtonLink'
import { Button } from '../../ui/Button'

export function ChatbotEditForm () {
  const { userAllFlows } = useGlobalUserFlowsStore()
  const { id } = useParams()
  const { conversations, defaultValue, flowName } = userAllFlows.find(flow => flow.id === id) as AllFlow

  return (
    <form className='py-6'>
      <h2 className='text-2xl text-center text-white pb-6'>Editar 👉 {flowName}</h2>

      <ChatbotCreateFormLabel
        labelName='Name'
        labelFor='name'
        inputType='text'
        tagName='name'
        value={flowName}
      />

      <label htmlFor='flowTrigger' className='w-full py-1 text-[#eff7ff9d]'>
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
      {
        conversations.map(({ trigger }, index) => {
          return (
            <div key={index}>
              <ChatbotCreateFormLabel
                labelName='Palabra clave'
                labelFor='name'
                inputType='text'
                tagName='name'
                value={trigger.name}
              />

              <label htmlFor='flowTrigger' className='w-full py-1 text-[#eff7ff9d]'>
                <span>Respuesta del chatbot</span>
                <textarea
                  name='trigger'
                  id=''
                  className='w-full h-72  text-[#e6e7e8] py-5 my-3 border-white/5 bg-neutral-950 text-slate-12 focus-visible:ring-slate-7 ease-in-out duration-200 placeholder:text-slate-11 rounded-[3px] px-2 text-sm relative select-none appearance-none border outline-none focus-visible:border-white/10  resize-none'
                  defaultValue={trigger.response}
                />
              </label>
            </div>
          )
        })
      }

      <div className='flex justify-between items-center'>
        <div className='flex gap-4'>
          <Button title='Guardar' />
          <ButtonLink title='Salir' to='/chatbot' />
        </div>

        <Button title='Agregar' />
      </div>
    </form>
  )
}
