import React from 'react'

export function Button (props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className='inline-flex h-12 hover:animate-background-shine items-center justify-center rounded-md border border-border-color dark:border-border-color-dark bg-[linear-gradient(110deg,#f3f4f6,60%,#fff,70%,#f3f4f6)] dark:bg-[linear-gradient(110deg,#000103,60%,#1c1d1d,70%,#000103)] bg-[length:200%_100%] px-6 font-medium text-secondary dark:text-secondary-dark transition-colors focus:outline-none hover:text-primary dark:hover:text-primary-dark duration-300 ' {...props}>
      {props.title}
    </button>
  )
}
