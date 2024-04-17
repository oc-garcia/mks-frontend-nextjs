import { render } from "@testing-library/react";
import Cart from "../../src/components/default/Cart";

describe("Cart Component", () => {
  it("renders without crashing", () => {
    const { container } = render(<Cart isOpen={false} onClose={() => {}} />);
    expect(container).toBeTruthy();
  });

  it("displays 'Carrinho de Compras' when open", () => {
    const { rerender, getByText } = render(<Cart isOpen={false} onClose={() => {}} />);

    // Re-render the component with the drawer open
    rerender(<Cart isOpen={true} onClose={() => {}} />);

    expect(getByText("Carrinho de Compras")).toBeInTheDocument();
  });
});
