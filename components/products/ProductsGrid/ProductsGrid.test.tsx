import { render } from '@testing-library/react';
import ProductsGrid from './ProductsGrid';

describe('ProductGrid', () => {
  it('renders the component with an array of product data', () => {
    const data = [
      {
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
        seller: 'Michael',
        stock: true,
      },
      {
        id: 2,
        title: 'Nike Air Max 90 Blue Galaxy Style Painted Custom Shoes',
        price: 200.0,
        description:
          'Original Nike Air Max 90 painted as Seen in the pics.\n\nPainted with acrylic Leather colours that will Last forerver on the shoes.',
        category: 'shoes',
        thumbnail:
          'https://i.etsystatic.com/10236127/r/il/3d1f04/1159992733/il_340x270.1159992733_38ga.jpg',
        image:
          'https://i.etsystatic.com/10236127/r/il/086424/1158578733/il_794xN.1158578733_mzta.jpg',
        rating: { rate: 4.3, count: 259 },
        seller: 'John',
        stock: true,
      },
    ];

    render(<ProductsGrid productsData={data} />);
  });
});
