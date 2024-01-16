import { render } from '@testing-library/react'

import { About } from '.'

describe('About', () => {
  it('should render the title', () => {
    const container = render(<About title="Title" about="About content" />)
    expect(container.getByText('Title')).toBeInTheDocument()
    expect(container.getByText('About content')).toBeInTheDocument()
  })
})
