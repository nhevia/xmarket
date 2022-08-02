import { screen, render, fireEvent } from '@testing-library/react';
import Login from './Login';

describe('Login', () => {
  it('renders a login form with email/password inputs and login/register buttons', () => {
    const setVisible = jest.fn();
    render(<Login setVisible={setVisible} />);

    const loginButton = screen.getByRole('button', { name: 'Login' });

    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('Password')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: '... or Register' })
    ).toBeInTheDocument();

    fireEvent.click(loginButton);
  });
});
