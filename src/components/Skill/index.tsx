import Image from 'next/image'

import { Title } from '@/components/Title'

interface Tech {
  id: number
  title: string
  icon: {
    url: string
  }
}

interface SkillProps {
  techs: Tech[]
}

export function Skill({ techs }: SkillProps) {
  return (
    <div className="mt-16">
      <Title title="Skills" />
      <ul className="mt-5 grid grid-cols-6 gap-7">
        {techs.map((item) => {
          return (
            <li
              className="flex flex-col items-center justify-center"
              key={item.id}
            >
              <Image
                src={`https://painel.ntbatista.dev${item.icon.url}`}
                alt={item.title}
                width={35}
                height={35}
              />
              <span className="mt-2 block text-sm text-gray-300">
                {item.title}
              </span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
