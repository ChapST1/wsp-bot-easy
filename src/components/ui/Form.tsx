export function Form (props: React.FormHTMLAttributes<HTMLFormElement>) {
  return (
    <form className='max-w-2xl p-5 rounded-md  m-0 border border-border-color dark:border-border-color-dark' onSubmit={props.onSubmit}>
      {props.children}
    </form>
  )
}
