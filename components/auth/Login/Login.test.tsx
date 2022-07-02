import { screen, render } from '@testing-library/react';
import Login from './Login';

describe('Login', () => {
  it('renders the login form with email and password inputs', () => {
    const setVisible = jest.fn();
    render(<Login setVisible={setVisible} />);

    const emailLabel = screen.queryByText('Email');
    const passwordLabel = screen.queryByText('Password');
    const login = screen.queryByRole('button', { name: 'Login' });
    const register = screen.queryByRole('button', { name: '... or Register' });

    expect(emailLabel).toBeInTheDocument();
    expect(passwordLabel).toBeInTheDocument();
    expect(login).toBeInTheDocument();
    expect(register).toBeInTheDocument();
  });
});
