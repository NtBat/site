import { render, screen } from '@testing-library/react'

import { ContentWrapper } from '.'

describe('ContentWrapper', () => {
  it('should render the component', () => {
    const children = 'Children'
    const { container } = render(
      <ContentWrapper title="Title">{children}</ContentWrapper>,
    )
    expect(container).toBeInTheDocument()
    expect(screen.getByText(children)).toBeInTheDocument()
  })
})
