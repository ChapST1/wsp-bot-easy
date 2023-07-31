import { Link } from 'react-router-dom'

interface ButtonLinkProps {
  title: string
  to: string
}
export function ButtonLink ({ title, to }: ButtonLinkProps) {
  return (
    <Link to={to} className='rounded border border-white/10 px-5 py-2.5 overflow-hidden group bg-[#000] relative hover:bg-gradient-to-r hover:bg-neutral-900 text-white transition-all ease-out duration-300'>
      <span className='absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-60 ease' />
      <span className='relative'>{title}</span>
    </Link>
  )
}
