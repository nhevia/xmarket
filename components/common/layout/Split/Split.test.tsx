import { render } from '@testing-library/react';
import Split from './Split';

describe('Split', () => {
  it('renders with two children React nodes', () => {
    render(
      <Split>
        <div>left component</div>
        <div>second component</div>
      </Split>
    );
  });
});
