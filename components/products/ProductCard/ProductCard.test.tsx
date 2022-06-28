import { screen, render } from '@testing-library/react';
import ProductCard from './ProductCard';

describe('ProductCard', () => {
  beforeEach(() => {
    const product = {
      id: 1,
      title: "Women's Middle English - BROWN",
      price: 49.99,
      description:
        'Handmade in Aurora, New York. Tried and true, the Middle English is a monk style flat that is the very definition of comfort. The full grain, leather construction molds to your foot with wear, and the Vibram rubber sole lets you walk comfortably for miles. This simple style can be appropriate for any occasion. This is the trademark shoe that we have been producing for 20+ years.',
      category: 'shoes',
      thumbnail:
        'https://i.etsystatic.com/5774162/r/il/df182d/368098407/il_340x270.368098407_dm1y.jpg',
      image:
        'https://i.etsystatic.com/5774162/r/il/df182d/368098407/il_794xN.368098407_dm1y.jpg',
      rating: { rate: 3.8, count: 120 },
      stock: true,
    };

    render(<ProductCard product={product} />);
  });

  it('shows the product card information', () => {
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute(
      'href',
      '/products/1?p=Women%27s-Middle-English---BROWN'
    );

    const name = screen.getByAltText("Women's Middle English - BROWN");
    expect(name).toBeInTheDocument();

    const rating = screen.getByLabelText(
      'Rating of this product is 3.8 out of 5.'
    );
    expect(rating).toBeInTheDocument();

    const reviews = screen.getByText('(120)');
    expect(reviews).toBeInTheDocument();

    const price = screen.getByText('$49.99');
    expect(price).toBeInTheDocument();
  });
});
