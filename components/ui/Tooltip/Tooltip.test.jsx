const { screen, render } = require('@testing-library/react');
import Tooltip from './Tooltip';

describe('Tooltip', () => {
  it('renders the tooltip text', () => {
    render(<Tooltip text="Shoes" tooltipText="A company" />);

    const tooltipContainer = screen.getByText('Shoes');
    expect(tooltipContainer).toBeInTheDocument();

    const tooltipText = screen.getByText('A company');
    expect(tooltipText).toBeInTheDocument();
  });
});
