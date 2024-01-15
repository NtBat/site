import { getStrapiURL } from './api'

type Media = {
  url: string
}

export function getStrapiMedia(media: Media): string {
  const imageUrl = media.url.startsWith('/')
    ? getStrapiURL(media.url)
    : media.url
  return imageUrl
}
