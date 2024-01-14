import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  SendHorizontalIcon,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { Typing } from '@/components/Typing'

export function Profile() {
  return (
    <div className="before:shadow-custom relative z-20 float-left h-full w-[480px] rounded before:absolute before:left-0 before:top-0 before:h-full before:w-full before:rounded-br after:absolute after:-left-4 after:-top-4 after:h-full after:w-full after:bg-gray-700 after:opacity-[0.3]">
      <div className="relative z-10 h-full overflow-hidden rounded bg-gray-700 p-0 text-center">
        <div className="relative left-0 flex h-full w-full flex-col items-center justify-center p-12 transition-all">
          <div className="bg-custom-green bg-custom-bg after:-rotate-8 absolute left-0 top-0 z-0 h-[52%] w-full rounded-b-none rounded-l-none rounded-r rounded-t bg-cover bg-center bg-no-repeat before:absolute before:-bottom-[63%] before:-left-[25%] before:z-[3] before:h-[70%] before:w-full before:rotate-12 before:bg-gray-700 after:absolute after:-bottom-[63%] after:-right-[25%] after:left-auto after:z-[3] after:h-[70%] after:w-full after:bg-gray-700"></div>
          <div className="before:bg-gradient-profile relative mb-5 mt-20 inline-block w-[146px] before:absolute before:-left-[10px] before:top-[10px] before:h-full before:w-full before:rounded-full before:opacity-[0.1]">
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
          <h1 className="relative text-[34px] font-normal text-gray-100">
            Nathan Batista
          </h1>
          <Typing />
          <ul className="relative mt-4 flex items-center gap-4">
            <li>
              <a
                href="https://github.com/ntbat"
                title="Github"
                rel="noopener noreferrer"
                target="_blank"
                className="text-gray-300 transition-all hover:text-orange"
              >
                <Github className="h-5 w-5" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/ntbatista/"
                title="Linkedin"
                rel="noopener noreferrer"
                target="_blank"
                className="text-gray-300 transition-all hover:text-orange"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/ntbatista_/"
                title="Instagram"
                rel="noopener noreferrer"
                target="_blank"
                className="text-gray-300 transition-all hover:text-orange"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </li>
            <li>
              <a
                href="https://api.whatsapp.com/send?phone=5522988176582"
                title="Whatsapp"
                rel="noopener noreferrer"
                target="_blank"
                className="text-gray-300 transition-all hover:text-orange"
              >
                <Phone className="h-5 w-5" />
              </a>
            </li>
            <li>
              <a
                href="mailto:contato@ntbatista.dev"
                title="E-mail"
                rel="noopener noreferrer"
                target="_blank"
                className="text-gray-300 transition-all hover:text-orange"
              >
                <Mail className="h-5 w-5" />
              </a>
            </li>
          </ul>
          <div className="before:bg-gradient-contact absolute bottom-0 left-0 z-10 flex h-[70px] w-full before:absolute before:left-0 before:top-0 before:h-[1px] before:w-full">
            <Link
              href="/contact"
              className="flex h-[70px] w-full items-center justify-center gap-2 text-sm uppercase text-gray-100 transition-all hover:text-orange"
            >
              Contact
              <SendHorizontalIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
