import { render, screen } from '@testing-library/react';
import Pagination from './Pagination';
import products from '__mocks__/products.json';

jest.mock('next/router', () => require('next-router-mock'));

describe('Pagination', () => {
  it('shows two buttons to change between pages 1 and 2', () => {
    render(<Pagination amount={products.length} />);

    expect(screen.getByText('2')).toBeInTheDocument();
  });

  it('shows one button only for page 1', () => {
    render(<Pagination amount={11} />);

    expect(screen.getByText('1')).toBeInTheDocument();
  });
});
