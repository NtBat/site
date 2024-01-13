import { render, screen } from '@testing-library/react'

import { headerConfig } from '@/config/header'

import { Header } from './index'

describe('Header Component', () => {
  it('should render all navigation items correctly', () => {
    render(<Header />)

    headerConfig.mainNav.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument()

      const linkElement = screen.getByRole('link', { name: item.title })
      expect(linkElement).toBeInTheDocument()
      expect(linkElement).toHaveAttribute('href', item.href)
    })
  })
})
