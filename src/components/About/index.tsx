import Markdown from 'markdown-to-jsx'

type AboutProps = {
  title: string
  about: string
}

export function About({ title, about }: AboutProps) {
  return (
    <div className="text-gray-300">
      <span className="mt-3 block font-semibold">{title}</span>
      <div className="mt-2 block">
        <Markdown
          options={{
            overrides: {
              a: {
                props: {
                  className: 'block text-orange underline',
                },
              },
            },
          }}
        >
          {about}
        </Markdown>
      </div>
    </div>
  )
}
