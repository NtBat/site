import Link from 'next/link'

import { headerConfig } from '@/config/header'
import { navItem } from '@/models/Header'

export function Header() {
  return (
    <header className="relative left-0 top-12 z-50 float-left mr-2 w-20">
      <div className="w-full text-[0px]">
        <div>
          <ul>
            {headerConfig.mainNav.map((item: navItem) => (
              <li className="block transition-colors" key={item.title}>
                <Link
                  href={item.href}
                  className="relative flex h-auto flex-col items-center justify-center gap-1 overflow-hidden bg-gray-700 px-1 py-3 text-center text-xs font-medium uppercase text-gray-100 transition-all before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:bg-gradient-line hover:text-orange"
                >
                  {item.icon}
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}
