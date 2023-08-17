export function Label (props: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label className='w-full py-1 text-secondary dark:text-secondary-dark'>
      {
        props.children
      }
    </label>
  )
}
