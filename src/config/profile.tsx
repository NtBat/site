import { Github, Instagram, Linkedin, Mail, Phone } from 'lucide-react'

import { profileList } from '@/models/Profile'

export const profileConfig: profileList = {
  mainList: [
    {
      title: 'Github',
      href: 'https://github.com/ntbat',
      icon: <Github className="h-5 w-5" />,
    },
    {
      title: 'Linkedin',
      href: 'https://www.linkedin.com/in/ntbatista/',
      icon: <Linkedin className="h-5 w-5" />,
    },
    {
      title: 'Instagram',
      href: 'https://www.instagram.com/ntbatista_/',
      icon: <Instagram className="h-5 w-5" />,
    },
    {
      title: 'Whatsapp',
      href: 'https://api.whatsapp.com/send?phone=5522988176582',
      icon: <Phone className="h-5 w-5" />,
    },
    {
      title: 'E-mail',
      href: 'mailto:contato@ntbatista.dev',
      icon: <Mail className="h-5 w-5" />,
    },
  ],
}
