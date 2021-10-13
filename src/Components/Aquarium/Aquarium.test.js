import { Aquarium } from './Aquarium'
import { screen, render, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('aquarium', () => {
  it('should add wrong class to input after input negative number', () => {
    const { container } = render(<Aquarium />)
    const input = screen.getByRole('textbox')
    const button = screen.getByRole('button')

    fireEvent.change(input, { target: { value: '-1' } })
    fireEvent.click(button)

    expect(container.querySelectorAll('.wrong').length).toBe(1)
  })

  it('should add wrong class to input after input incorrect symbols', () => {
    const { container } = render(<Aquarium />)
    const input = screen.getByRole('textbox')
    const button = screen.getByRole('button')

    fireEvent.change(input, { target: { value: '21, 2' } })
    fireEvent.click(button)

    expect(container.querySelectorAll('.wrong').length).toBe(1)
  })
})
