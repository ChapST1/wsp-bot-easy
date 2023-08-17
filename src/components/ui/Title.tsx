interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  position?: Position
}

type Position = 'left' | 'center' | 'right'

export function Title (props: TitleProps) {
  const { position = 'left' } = props

  return (
    <h3
      className='text-primary dark:text-primary-dark text-2xl'
      {...props}
      style={{
        textAlign: `${position}`
      }}
    >{props.children}
    </h3>
  )
}
