import { profileItem } from '@/models/Profile'

type ProfileSocialProps = {
  items: profileItem[]
}

export function ProfileSocial({ items }: ProfileSocialProps) {
  return (
    <ul className="relative mt-4 flex items-center gap-4">
      {items.map((item) => (
        <li key={item.title}>
          <a
            href={item.href}
            title={item.title}
            rel="noopener noreferrer"
            target="_blank"
            className="text-gray-300 transition-all hover:text-orange"
          >
            {item.icon}
          </a>
        </li>
      ))}
    </ul>
  )
}
