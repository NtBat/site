import { render, screen } from '@testing-library/react'

import { Jobs } from '.'

describe('Portfolio', () => {
  it('should render correctly', () => {
    const mockProjects = [
      {
        id: 1,
        title: 'Project 1',
        text: 'Project 1 description',
        image: {
          url: '/project-1.png',
        },
      },
      {
        id: 2,
        title: 'Project 2',
        text: 'Project 2 description',
        image: {
          url: '/project-2.png',
        },
      },
    ]

    render(<Jobs projects={mockProjects} />)
    expect(screen.getByText('Project 1')).toBeInTheDocument()
    expect(screen.getByText('Project 1 description')).toBeInTheDocument()
  })
})
