import React from 'react'

export function Button (props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className='inline-flex h-12 hover:animate-background-shine items-center justify-center rounded-md border border-[#1f2123] bg-[linear-gradient(110deg,#000103,60%,#1c1d1d,70%,#000103)] bg-[length:200%_100%] px-6 font-medium text-[#8b9095] transition-colors focus:outline-none hover:text-[#eaebec] duration-300 ' {...props}>
      {props.title}
    </button>
  )
}
