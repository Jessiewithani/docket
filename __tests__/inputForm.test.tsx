import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import InputForm from '@/app/components/InputForm'

describe('Page', () => {
  it('renders a form', () => {
    render(<InputForm />)

    const form = screen.getByRole('form')
    
    expect(form).toBeInTheDocument()
  })
})