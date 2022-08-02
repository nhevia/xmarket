import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import Dropdown from './Dropdown';

describe('Dropdown', () => {
  let mockHandler: (category: string) => void;

  beforeEach(() => {
    mockHandler = jest.fn();

    // Warning: Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>.
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  it('selects the default option when <select> is not interacted with', () => {
    render(
      <Dropdown
        options={['product 1', 'product 2']}
        optionHandler={mockHandler}
      />
    );

    expect(
      (screen.getByText('Select an option') as HTMLOptionElement).selected
    ).toBe(true);
  });

  it('selects a non default option when <select> value changes', () => {
    render(
      <Dropdown
        options={['product 1', 'product 2']}
        optionHandler={mockHandler}
      />
    );

    // userEvent.selectOptions is still not working /testing-library/user-event/issues/358
    fireEvent.change(screen.getByRole('combobox'), {
      target: { value: 'product 1' },
    });

    expect(
      (
        screen.getByRole('option', {
          name: 'product 1',
        }) as HTMLOptionElement
      ).selected
    ).toBe(true);
    expect(mockHandler).toHaveBeenCalledTimes(1);
  });

  it('shows the dropdown label', () => {
    render(
      <Dropdown
        options={['product 1', 'product 2']}
        optionHandler={mockHandler}
        label="Products"
      />
    );

    expect(screen.getByText('Products')).toBeInTheDocument();
  });
});
