import { render } from '@testing-library/react'

import { Bubbles } from './index'

describe('Bubbles Component', () => {
  it('renders correctly and contains 10 bubble divs', () => {
    const { container } = render(<Bubbles />)
    expect(container.getElementsByClassName('bubbles').length).toEqual(10)
  })
})
