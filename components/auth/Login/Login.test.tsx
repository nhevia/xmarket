import { screen, render } from '@testing-library/react';
import Login from './Login';

describe('Login', () => {
  it('renders the login form with email and password inputs', () => {
    const setVisible = jest.fn();
    render(<Login setVisible={setVisible} />);

    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('Password')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: '... or Register' })
    ).toBeInTheDocument();
  });
});
