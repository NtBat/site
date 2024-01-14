interface TitleProps {
  title: string
}

export function Title({ title }: TitleProps) {
  return (
    <div className="before:-z-1 relative z-[2] min-h-[50px] pb-6 text-2xl font-semibold text-gray-100 before:absolute before:-left-[10px] before:top-0 before:h-[30px] before:w-[30px] before:rounded-[30px] before:bg-gradient-profile after:absolute after:-left-[30px] after:bottom-0 after:right-0 after:h-[1px] after:bg-gradient-contact">
      <h1 className="first-letter:text-orange">{title}</h1>
    </div>
  )
}
