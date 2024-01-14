import { render } from '@testing-library/react'

import { Title } from '.'

describe('Title', () => {
  it('should render the title', () => {
    const { getByText } = render(<Title title="Test Title" />)
    expect(getByText('Test Title')).toBeInTheDocument()
  })
})
