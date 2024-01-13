import { ReactElement } from 'react'

export type navItem = {
  href: string
  title: string
  icon: ReactElement
}

export type HeaderNav = {
  mainNav: navItem[]
}
