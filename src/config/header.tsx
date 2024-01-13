import { Code2, Mail, Newspaper, User } from 'lucide-react'

import { HeaderNav } from '@/models/Header'

export const headerConfig: HeaderNav = {
  mainNav: [
    {
      title: 'About',
      href: '/',
      icon: <User />,
    },
    {
      title: 'Portfolio',
      href: '/portfolio',
      icon: <Code2 />,
    },
    {
      title: 'Blog',
      href: '/blog',
      icon: <Newspaper />,
    },
    {
      title: 'Contact',
      href: '/contato',
      icon: <Mail className="h-5 w-5" />,
    },
  ],
}
