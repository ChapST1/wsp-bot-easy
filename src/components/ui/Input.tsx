export function Input (props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className=' text-primary dark:text-primary-dark py-5 my-3 border-border-color dark:border-border-color-dark/50 bg-form-input-bg dark:bg-form-input-bg-dark text-slate-12 focus-visible:ring-slate-7 ease-in-out duration-200 placeholder:text-slate-11 h-8 rounded-[3px] px-2 text-sm relative w-full select-none appearance-none border outline-none focus-visible:border-border-color/50 dark:focus-visible:border-border-color-dark'
      {...props}
    />
  )
}
