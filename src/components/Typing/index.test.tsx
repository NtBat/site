import { render, screen } from '@testing-library/react'

import { Typing } from '.'

describe('Typing Effect', () => {
  it('should render all navigation items correctly', () => {
    render(<Typing />)

    const typing = screen.getByTestId('typing')
    expect(typing).toBeInTheDocument()
  })
})
