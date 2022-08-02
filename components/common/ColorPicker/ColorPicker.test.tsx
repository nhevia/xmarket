import { fireEvent, render, screen } from '@testing-library/react';
import ColorPicker from './ColorPicker';

describe('ColorPicker', () => {
  let mockHandler: (val: string) => void;
  beforeEach(() => {
    mockHandler = jest.fn();
  });

  it('shows all color options available for a given category', () => {
    render(<ColorPicker category="skirts" onClickHandler={mockHandler} />);

    expect(screen.getByText('Color:'));
    expect(screen.getByLabelText('Black'));
    expect(screen.getByLabelText('Brown'));
    expect(screen.getByLabelText('Beige'));
    expect(screen.getByLabelText('Darkblue'));
    expect(screen.getByLabelText('White'));
  });

  it('changes the name of the hovered/unhovered color', () => {
    render(<ColorPicker category="skirts" onClickHandler={mockHandler} />);

    fireEvent.mouseEnter(screen.getByLabelText('Brown'));
    expect(screen.getByText('Color: Brown')).toBeInTheDocument();

    fireEvent.mouseLeave(screen.getByLabelText('Brown'));
    expect(screen.queryByText('Color: Brown')).not.toBeInTheDocument();
  });
});
