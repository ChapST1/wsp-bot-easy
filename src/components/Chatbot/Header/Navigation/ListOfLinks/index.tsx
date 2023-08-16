import { NavLink } from 'react-router-dom'
import { useRef } from 'react'

interface EffectProps {
  width: number
  height: number
  left: number
  top: number
}

export function ListOfLinks () {
  const effectAwesomeRefElement = useRef<HTMLSpanElement>(null)

  const allLinks = [
    {
      name: 'Chatbot',
      path: '/chatbot'
    },
    {
      name: 'Plantillas',
      path: '/plantillas'
    },
    {
      name: 'Testear',
      path: '/test'
    }
  ]

  const handleEffectAwesome = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const { width, height, left, top }: EffectProps = e.currentTarget.getBoundingClientRect()

    effectAwesomeRefElement.current?.style.setProperty('--width', `${width}px`)
    effectAwesomeRefElement.current?.style.setProperty('--height', `${height}px`)
    effectAwesomeRefElement.current?.style.setProperty('--left', `${left}px`)
    effectAwesomeRefElement.current?.style.setProperty('--top', `${top}px`)
    effectAwesomeRefElement.current?.style.setProperty('--scale', `${1}`)
  }

  const handleLeaveEffectAwesome = () => {
    effectAwesomeRefElement.current?.style.setProperty('--scale', `${0}`)
  }

  return (
    <ul className='w-full h-full flex items-center gap-2 '>
      <span
        className=' w-[var(--width)] h-[var(--height)] left-[var(--left)] top-[var(--top)] scale-[var(--scale)] absolute bg-navigation-effect dark:bg-navigation-effect-dark  rounded-full duration-300 -z-10 ease-in-out'
        ref={effectAwesomeRefElement}
      />
      {
            allLinks.map((link) => {
              return (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    onMouseEnter={handleEffectAwesome}
                    onMouseLeave={handleLeaveEffectAwesome}
                    className={({ isActive }) => {
                      const isActiveStyles = isActive ? 'text-navigation-link-hover dark:text-navigation-link-hover-dark bg-navigation-effect dark:bg-navigation-effect-dark' : 'bg-[transparent] text-secondary dark:text-secondary-dark hover:text-navigation-link-hover dark:hover:text-navigation-link-hover-dark'
                      return `py-2 px-4 rounded-full duration-300  ${isActiveStyles}`
                    }}
                  >{link.name}
                  </NavLink>
                </li>
              )
            })
        }
    </ul>
  )
}
