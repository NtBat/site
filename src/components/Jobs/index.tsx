import Image from 'next/image'
import Link from 'next/link'

type Project = {
  id: number
  title: string
  text: string
  image: {
    url: string
  }
}

type ProjectProps = {
  projects: Project[]
}

export function Jobs({ projects }: ProjectProps) {
  return (
    <div className="mt-5 pb-6">
      <p className="block text-sm text-gray-100">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde tenetur
        nam corporis, harum nostrum itaque voluptatum quis, vel ad, laboriosam
        sapiente labore nisi quos quisquam. Veniam architecto porro est
        corrupti.
      </p>
      <div className="mt-5 grid grid-cols-2 gap-x-2 gap-y-8">
        {projects.map((item) => {
          return (
            <Link
              href="/"
              className="flex flex-col gap-2 text-sm text-gray-100"
              key={item.id}
            >
              <Image
                src={`https://painel.ntbatista.dev${item.image.url}`}
                alt={item.title}
                width={600}
                height={400}
              />
              <span className="text-base">{item.title}</span>
              <p className="line-clamp-6 h-[120px]">{item.text}</p>
              <button className="text-left text-orange underline">
                Read more
              </button>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
