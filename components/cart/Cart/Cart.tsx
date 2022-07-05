import React from 'react';
import Sider from '@components/ui/Sider';
import { useCartStore } from 'store/cart';
import { ProductCart } from 'types/app';

interface AppProps {
  setVisible: (visible: boolean) => void;
}

const Cart = ({ setVisible }: AppProps) => {
  const products = useCartStore((state) => state.products);
  const removeProduct = useCartStore((state) => state.removeProduct);

  return (
    <Sider setVisible={setVisible}>
      {products?.map((product: ProductCart) => (
        <div key={product.cartId} style={{ padding: '20px' }}>
          <p>{product.title}</p>
          <button onClick={() => removeProduct(product.cartId)}>Remove</button>
        </div>
      ))}
      <div
        style={{
          position: 'absolute',
          bottom: '0px',
          padding: '20px',
          marginBottom: '30px',
          display: 'flex',
        }}
      >
        <p>Total ${products.reduce((prev, curr) => prev + curr.price, 0)}</p>
        <button>Proceed to checkout</button>
      </div>
    </Sider>
  );
};

export default Cart;
