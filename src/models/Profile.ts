import { ReactElement } from 'react'

export type profileItem = {
  href: string
  title: string
  icon: ReactElement
}

export type profileList = {
  mainList: profileItem[]
}
