const { render, screen, fireEvent } = require('@testing-library/react');
import Modal from './Modal';

describe('Modal', () => {
  let mockVisible: (visible: boolean) => void;
  beforeEach(() => {
    mockVisible = jest.fn();
  });

  it('renders a modal with all the content', () => {
    const header = <p>header</p>;
    const content = <div>content</div>;
    const footer = <p>footer</p>;

    render(
      <Modal
        setVisible={mockVisible}
        header={header}
        content={content}
        footer={footer}
      />
    );

    expect(screen.getByText('header')).toBeInTheDocument();
    expect(screen.getByText('content')).toBeInTheDocument();
    expect(screen.getByText('footer')).toBeInTheDocument();
  });

  it('renders a modal with only the content', () => {
    const content = <div>content</div>;
    render(
      <Modal setVisible={mockVisible} content={content} closable={false} />
    );

    expect(screen.queryByText('header')).not.toBeInTheDocument();
    expect(screen.queryByText('footer')).not.toBeInTheDocument();
    expect(
      screen.queryByLabelText('close popup window')
    ).not.toBeInTheDocument();
    expect(screen.getByText('content')).toBeInTheDocument();
  });

  it('closes the modal', () => {
    const content = <div>content</div>;
    render(<Modal setVisible={mockVisible} content={content} />);

    const closeButton = screen.getByLabelText('close popup window');
    fireEvent.click(closeButton);

    expect(closeButton).toBeInTheDocument();
    expect(mockVisible).toHaveBeenCalled();
  });
});
