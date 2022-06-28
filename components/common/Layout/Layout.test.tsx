import { render } from '@testing-library/react';
import Layout from './Layout';

describe('Layout', () => {
  it('renders the layout', () => {
    const { getByTestId } = render(
      <Layout>
        <div>Hello</div>
      </Layout>
    );

    getByTestId('layout-main');
  });
});
