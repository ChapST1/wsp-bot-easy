export function Form (props: React.FormHTMLAttributes<HTMLFormElement>) {
  return (
    <form className=' max-w-2xl p-5 rounded-md m-auto border border-border-color dark:border-border-color-dark'>
      {props.children}
    </form>
  )
}
