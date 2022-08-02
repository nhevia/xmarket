import { render, screen, fireEvent } from '@testing-library/react';
import Dropdown from './Dropdown';

describe('Dropdown', () => {
  it('selects the default option', () => {
    render(<Dropdown options={['T-shirt', 'Skirt']} />);

    expect(
      (screen.getByText('Select an option') as HTMLOptionElement).selected
    ).toBe(true);
  });

  it('select a non default option when selected', () => {
    render(<Dropdown options={['T-shirt', 'Skirt']} />);

    // userEvent.selectOptions is still not working /testing-library/user-event/issues/358
    fireEvent.change(screen.getByRole('combobox'), {
      target: { value: 'Skirt' },
    });

    expect(
      (
        screen.getByRole('option', {
          name: 'Skirt',
        }) as HTMLOptionElement
      ).selected
    ).toBe(true);
  });
});
