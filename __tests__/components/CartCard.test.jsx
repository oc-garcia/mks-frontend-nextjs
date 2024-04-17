import { render, fireEvent } from "@testing-library/react";
import { CartContext } from "@/contexts/cart/CartContext";
import CartCard from "../../src/components/default/CartCard";

describe("CartCard Component", () => {
  const mockProduct = {
    id: "1",
    name: "Test Product",
    price: "100",
    photo: "test.jpg",
    quantity: 1,
  };

  const mockCartContext = {
    addProductToCart: jest.fn(),
    removeProductFromCart: jest.fn(),
    decrementProductInCart: jest.fn(),
  };

  it("renders without crashing", () => {
    const { container } = render(
      <CartContext.Provider value={mockCartContext}>
        <CartCard product={mockProduct} />
      </CartContext.Provider>
    );
    expect(container).toBeTruthy();
  });

  it("displays the correct product name and quantity", () => {
    const { getByText } = render(
      <CartContext.Provider value={mockCartContext}>
        <CartCard product={mockProduct} />
      </CartContext.Provider>
    );

    expect(getByText("Test Product")).toBeInTheDocument();
    expect(getByText("1")).toBeInTheDocument();
  });

  it("calls the correct function when the remove button is clicked", () => {
    const { getByLabelText } = render(
      <CartContext.Provider value={mockCartContext}>
        <CartCard product={mockProduct} />
      </CartContext.Provider>
    );

    fireEvent.click(getByLabelText("Delete item"));
    expect(mockCartContext.removeProductFromCart).toHaveBeenCalledWith("1");
  });
});
