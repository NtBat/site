import { render, screen } from '@testing-library/react'

import { ProfileImage } from '../ProfileImage'

describe('Profile Image', () => {
  it('should display image with correct alt text', () => {
    render(<ProfileImage />)

    const image = screen.getByRole('img')
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('alt', 'Nathan Batista')
  })
})
