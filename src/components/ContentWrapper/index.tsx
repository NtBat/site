import { Title } from '../Title'

type ContentWrapperProps = {
  children: React.ReactNode
  title: string
}

export function ContentWrapper({ children, title }: ContentWrapperProps) {
  return (
    <div className="z-[2] h-auto w-auto flex-1 overflow-hidden rounded bg-gray-700">
      <div className="relative h-full overflow-auto overflow-x-hidden px-7 pt-7">
        <div className="container">
          <div className="content">
            <Title title={title} />
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
