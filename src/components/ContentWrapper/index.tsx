import { Title } from '../Title'

type ContentWrapperProps = {
  children: React.ReactNode
  title: string
}

export function ContentWrapper({ children, title }: ContentWrapperProps) {
  return (
    <div className="absolute left-[568px] right-0 top-4 z-[8] h-auto w-auto overflow-hidden rounded bg-gray-700">
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
