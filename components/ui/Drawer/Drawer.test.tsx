import { render, screen } from '@testing-library/react';
import Drawer from './Drawer';

describe('Drawer', () => {
  it('renders a drawer with some content', () => {
    const setVisible = jest.fn();
    render(
      <Drawer setVisible={setVisible}>
        <p>Some content</p>
      </Drawer>
    );

    expect(screen.getByText('Some content')).toBeInTheDocument();
  });
});
