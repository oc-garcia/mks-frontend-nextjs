import { render, screen, fireEvent } from "@testing-library/react";
import { CartContext } from "@/contexts/cart/CartContext";
import ProductCard from "../../src/components/default/ProductCard";

const mockProduct = {
  id: "1",
  name: "Test Product",
  description: "This is a test product",
  price: "100",
  photo: "test-photo.jpg",
};

const mockAddProductToCart = jest.fn();

describe("ProductCard Component", () => {
  it("displays the correct product information", () => {
    render(
      <CartContext.Provider value={{ addProductToCart: mockAddProductToCart }}>
        <ProductCard product={mockProduct} />
      </CartContext.Provider>
    );

    expect(screen.getByText(mockProduct.name)).toBeInTheDocument();
    expect(screen.getByText((content) => content.startsWith("R$"))).toBeInTheDocument();
  });

  it("calls addProductToCart when the buy button is clicked", () => {
    render(
      <CartContext.Provider value={{ addProductToCart: mockAddProductToCart }}>
        <ProductCard product={mockProduct} />
      </CartContext.Provider>
    );

    const buyButton = screen.getByRole("button", { name: /comprar/i });
    fireEvent.click(buyButton);

    expect(mockAddProductToCart).toHaveBeenCalledWith(mockProduct);
  });
});
