import { render, screen } from '@testing-library/react'

import { Skill } from '.'

describe('Skill Component', () => {
  it('renders correctly', () => {
    const mockTechs = [
      {
        id: 1,
        title: 'React',
        icon: {
          url: '/react-icon.png',
        },
      },
      {
        id: 2,
        title: 'Next.js',
        icon: {
          url: '/nextjs-icon.png',
        },
      },
    ]

    render(<Skill techs={mockTechs} />)

    expect(screen.getByAltText('React')).toBeInTheDocument()
    expect(screen.getByAltText('Next.js')).toBeInTheDocument()
  })
})
