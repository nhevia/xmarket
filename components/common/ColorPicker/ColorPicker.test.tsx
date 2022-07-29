import { render } from '@testing-library/react';
import ColorPicker from './ColorPicker';

describe('ColorPicker', () => {
  it('renders', () => {
    render(<ColorPicker category="skirts" />);
  });
});
