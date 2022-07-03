import { render, screen } from '@testing-library/react';
import Sider from './Sider';

describe('Sider', () => {
  it('renders a sider with some content', () => {
    const setVisible = jest.fn();
    render(
      <Sider setVisible={setVisible}>
        <p>Some content</p>
      </Sider>
    );

    expect(screen.queryByText('Some content')).toBeInTheDocument();
  });
});
