interface ImageBlurHeroProps {
  style?: React.CSSProperties
}

export function ImageBlurHero ({ style }: ImageBlurHeroProps) {
  return (
    <img
      src='images/bghero.webp'
      alt='blur hero image'
      className='object-cover filter brightness-50 pointer-events-none absolute -top-20 left-0 right-0 z-0 mx-auto  h-full w-full select-none md:block'
      style={style}
    />
  )
}
