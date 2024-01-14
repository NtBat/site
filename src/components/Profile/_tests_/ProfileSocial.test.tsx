import { render, screen } from '@testing-library/react'

import { profileConfig } from '@/config/profile'

import { ProfileSocial } from '../ProfileSocial'

describe('Profile Social', () => {
  it('should render all social items correctly', () => {
    render(<ProfileSocial items={profileConfig.mainList} />)

    profileConfig.mainList.forEach((item) => {
      const linkElement = screen.getByTitle(item.title)
      expect(linkElement).toBeInTheDocument()
      expect(linkElement).toHaveAttribute('href', item.href)
      expect(linkElement).toHaveAttribute('target', '_blank')
    })
  })
})
