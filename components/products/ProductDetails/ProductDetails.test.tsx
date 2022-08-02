import { screen, render, fireEvent } from '@testing-library/react';
import ProductDetail from './ProductDetails';

describe('ProductsDetails', () => {
  beforeEach(() => {
    const product = {
      id: 3,
      title: 'Custom handmade Gold or red Lace Bridal Platform',
      price: 120.0,
      description:
        'A perfect combination of Lace and Satin all intertwined in our custom handmade Lace Platform high heel court.',
      category: 'shoes',
      thumbnail:
        'https://i.etsystatic.com/7292566/r/il/db8d93/890684944/il_340x270.890684944_embg.jpg',
      image:
        'https://i.etsystatic.com/7292566/r/il/db8d93/890684944/il_794xN.890684944_embg.jpg',
      rating: { rate: 4.8, count: 500 },
      seller: 'Michael',
      stock: true,
      count: 1,
    };

    // Warning: Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>.
    jest.spyOn(console, 'error').mockImplementation(() => {});

    render(<ProductDetail product={product} />);
  });

  it('shows the product detail information', () => {
    expect(screen.getByAltText('product image')).toBeInTheDocument();
    expect(
      screen.getByText('Custom handmade Gold or red Lace Bridal Platform')
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText('Rating of this product is 4.8 out of 5.')
    ).toBeInTheDocument();
    expect(screen.getByText('$120.00')).toBeInTheDocument();
    expect(
      screen.getByText(
        'A perfect combination of Lace and Satin all intertwined in our custom handmade Lace Platform high heel court.'
      )
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Add to cart' })
    ).toBeInTheDocument();
  });

  it('selects a size using the dropdown', () => {
    fireEvent.change(screen.getByRole('combobox'), { target: { value: '43' } });

    expect(
      (screen.getByRole('option', { name: '43' }) as HTMLOptionElement).selected
    ).toBe(true);
  });
});
