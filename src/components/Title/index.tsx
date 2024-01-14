interface TitleProps {
  title: string
}

export function Title({ title }: TitleProps) {
  return (
    <div className="after:bg-gradient-contact after:h[1px] before:-z-1 before:bg-gradient-profile z-[2] min-h-[50px] pb-6 text-2xl font-semibold text-gray-100 before:absolute before:-left-[10px] before:top-0 before:h-[30px] before:w-[30px] before:rounded-[30px] after:absolute after:-left-[30px] after:bottom-0 after:right-0 after:h-[1px]">
      <h1 className="first-letter:text-orange">{title}</h1>
    </div>
  )
}
