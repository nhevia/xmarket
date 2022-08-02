const { render, screen } = require('@testing-library/react');
import Tooltip from './Tooltip';

describe('Tooltip', () => {
  it('renders the tooltip text', () => {
    render(<Tooltip text="Shoes" tooltipText="A company" />);

    expect(screen.getByText('Shoes')).toBeInTheDocument();

    expect(screen.getByText('A company')).toBeInTheDocument();
  });
});
