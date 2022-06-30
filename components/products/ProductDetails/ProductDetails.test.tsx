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
    };

    render(<ProductDetail product={product} />);
  });

  it('shows the product detail information', () => {
    const image = screen.getByAltText('product image');
    expect(image).toBeInTheDocument();

    const name = screen.getByText(
      'Custom handmade Gold or red Lace Bridal Platform'
    );
    expect(name).toBeInTheDocument();

    const rating = screen.getByLabelText(
      'Rating of this product is 4.8 out of 5.'
    );
    expect(rating).toBeInTheDocument();

    const price = screen.getByText('$120.00');
    expect(price).toBeInTheDocument();

    const description = screen.getByText(
      'A perfect combination of Lace and Satin all intertwined in our custom handmade Lace Platform high heel court.'
    );
    expect(description).toBeInTheDocument();

    const addToCart = screen.getByRole('button', { name: 'Add to cart' });
    expect(addToCart).toBeInTheDocument();
  });

  it('selects a size using the dropdown', () => {
    const dropdown = screen.getByRole('combobox');

    fireEvent.change(dropdown, { target: { value: '43' } });

    expect(
      (screen.getByRole('option', { name: '43' }) as HTMLOptionElement).selected
    ).toBe(true);
  });
});
