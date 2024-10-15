import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import InputForm from '../app/components/inputForm/InputForm';

describe('Page', () => {
  const mockSetInputValue = jest.fn();
  const mockSetSavedUserInfo = jest.fn();

  const inputValue = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    birthdate: '',
    email: '',
  };

  beforeEach(() => {
    render(
      <InputForm
        inputValue={inputValue}
        setInputValue={mockSetInputValue}
        setSavedUserInfo={mockSetSavedUserInfo}
      />
    );
  });

  it('renders a form', () => {
    screen.logTestingPlaygroundURL();

    const form = screen.getByRole('form')
    
    expect(form).toBeInTheDocument()
  })
})