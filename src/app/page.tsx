import { About } from '@/components/About'
import { ContentWrapper } from '@/components/ContentWrapper'
import { Skill } from '@/components/Skill'
import { fetchAPI } from '@/lib/api'

type Hero = {
  title: string
  about: string
}

type Tech = {
  id: number
  title: string
  icon: {
    url: string
  }
}

type HomePageData = {
  hero: Hero
  Techs: Tech[]
}

export default async function Home() {
  const data: HomePageData = await fetchAPI('/homepage')

  return (
    <ContentWrapper title="About">
      <About title={data.hero.title} about={data.hero.about} />
      <Skill techs={data.Techs} />
    </ContentWrapper>
  )
}
