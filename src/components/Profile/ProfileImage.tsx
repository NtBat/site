import Image from 'next/image'

export function ProfileImage() {
  return (
    <div className="before:bg-gradient-profile relative mb-5 mt-20 inline-block w-[146px] before:absolute before:-left-[10px] before:top-[10px] before:h-full before:w-full before:rounded-full">
      <div className="relative h-[140px] w-[140px]">
        <div>
          <Image
            src="/nathan.jpeg"
            alt="Nathan Batista"
            width={140}
            height={140}
            className="absolute z-[2] rounded-full"
          />
        </div>
      </div>
    </div>
  )
}
