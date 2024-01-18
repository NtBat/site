import { ContentWrapper } from '@/components/ContentWrapper'
import { Jobs } from '@/components/Jobs'
import { fetchAPI } from '@/lib/api'

type Project = {
  id: number
  title: string
  text: string
  image: {
    url: string
  }
}

type HomePageData = {
  projects: Project[]
}

export default async function Portfolio() {
  const data: HomePageData = await fetchAPI('/homepage')

  return (
    <ContentWrapper title="Portfolio">
      <Jobs projects={data.projects} />
    </ContentWrapper>
  )
}
