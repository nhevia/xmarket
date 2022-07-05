import React from 'react';
import Sider from '@components/ui/Sider';

interface AppProps {
  setVisible: (visible: boolean) => void;
}

const Cart = ({ setVisible }: AppProps) => {
  return (
    <Sider setVisible={setVisible}>
      <p>Cart</p>
    </Sider>
  );
};

export default Cart;
