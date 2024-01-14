'use client'

import { TypeAnimation } from 'react-type-animation'

export function Typing() {
  return (
    <div data-testid="typing">
      <TypeAnimation
        sequence={[
          'React',
          1500,
          'Next JS',
          1500,
          'Typescript',
          1500,
          'Tailwind CSS',
          1500,
        ]}
        wrapper="h2"
        cursor={true}
        repeat={Infinity}
        className="relative m-0 inline-block h-5 font-normal text-orange"
      />
    </div>
  )
}
