import { render, fireEvent } from '@testing-library/react';
import Dropdown from './Dropdown';

describe('Dropdown', () => {
  it('selects the default option', () => {
    const { getByText } = render(<Dropdown options={['T-shirt', 'Skirt']} />);

    expect((getByText('Select an option') as HTMLOptionElement).selected).toBe(
      true
    );
  });

  it('select a non default option when selected', () => {
    const { getByRole } = render(<Dropdown options={['T-shirt', 'Skirt']} />);

    const select = getByRole('combobox');

    // userEvent.selectOptions is still not working /testing-library/user-event/issues/358
    fireEvent.change(select, { target: { value: 'Skirt' } });

    expect(
      (
        getByRole('option', {
          name: 'Skirt',
        }) as HTMLOptionElement
      ).selected
    ).toBe(true);
  });
});
