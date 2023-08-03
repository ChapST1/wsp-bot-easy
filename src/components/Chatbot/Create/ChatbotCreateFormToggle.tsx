interface ChatbotCreateFormToggleProps {
  labelName: string
  tagName: string
  isSelect?: boolean
}

export function ChatbotCreateFormToggle ({ labelName, tagName, isSelect }: ChatbotCreateFormToggleProps) {
  return (
    <label className='flex items-center justify-between text-[#eff7ff9d] px-4'>
      <span>{labelName}</span>

      <div className='relative items-center my-4 cursor-pointer block'>
        <input type='checkbox' value='' name={tagName} className='sr-only peer' checked={isSelect} />
        <div className="w-9 h-5  peer-focus:outline-none  rounded-full peer bg-neutral-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white/70 after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-neutral-800" />
      </div>
    </label>
  )
}
