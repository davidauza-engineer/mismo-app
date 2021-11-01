import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

beforeEach(() => render(<App />));

describe('renders the appropriate elements', () => {
  test('renders the first textarea', () => {
    const firstInput = screen.getByText(/first text area/i);
    expect(firstInput).toBeInTheDocument();
  });

  test('renders the swap button', () => {
    const btn = screen.getByText(/swap/i);
    expect(btn).toBeInTheDocument();
  });

  test('renders the second textarea', () => {
    const secondInput = screen.getByText(/second text area/i);
    expect(secondInput).toBeInTheDocument();
  });
});

describe('The swap button changes the textareas values', () => {
  const setup = () => {
    const firstInput = screen.getByLabelText('First Text Area');
    const secondInput = screen.getByLabelText('Second Text Area');
    const btn = screen.getByText(/swap/i);
    fireEvent.change(firstInput, {target: {value: '69'}});
    fireEvent.change(secondInput, {target: {value: '182'}});
    fireEvent(btn, new MouseEvent('click'))
    return {
      firstInput,
      secondInput
    }
  };

  test('the swap button changes the value of the first text area to the value to the value of the second text area', () => {
    const { firstInput } = setup();
    expect((firstInput as HTMLInputElement).value).toBe('182')
  });

  test('the swap button changes the value of the secondInput value to the value of the firstInputValue', () => {
    const { secondInput } = setup();
    expect((secondInput as HTMLInputElement).value).toBe('69')
  });
});
