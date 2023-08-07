interface ChatbotCreateFormLabelProps {
  labelFor: string
  labelName: string
  tagName: string
  inputType: string
  value?: string
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  flowIsCreated?: boolean
}

export function ChatbotCreateFormLabel ({ labelFor, labelName, tagName, inputType, handleChange, value, flowIsCreated }: ChatbotCreateFormLabelProps) {
  return (
    <label htmlFor={labelFor} className='w-full py-1 text-[#eff7ff9d]'>
      {labelName}
      <input
        type={inputType}
        id={labelFor}
        name={tagName}
        className=' text-[#e6e7e8] py-5 my-3 border-white/5 bg-neutral-950 text-slate-12 focus-visible:ring-slate-7 ease-in-out duration-200 placeholder:text-slate-11 h-8 rounded-[3px] px-2 text-sm relative w-full select-none appearance-none border outline-none focus-visible:border-white/10'
        required
        autoComplete='off'
        disabled={flowIsCreated}
        value={value}
        onChange={handleChange}

      />
    </label>
  )
}
