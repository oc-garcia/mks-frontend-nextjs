import { render, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ProductServices } from "@/services/ProductServices";
import Marketplace from "../../src/components/default/Marketplace";

jest.mock("@/services/ProductServices");

describe("Marketplace Component", () => {
  const mockProducts = [
    { id: "1", name: "Test Product 1", price: "100", photo: "test1.jpg" },
    { id: "2", name: "Test Product 2", price: "200", photo: "test2.jpg" },
  ];

  const queryClient = new QueryClient();

  beforeEach(() => {
    ProductServices.getProducts.mockResolvedValue({ products: mockProducts });
  });

  it("renders without crashing", async () => {
    const { container } = render(
      <QueryClientProvider client={queryClient}>
        <Marketplace />
      </QueryClientProvider>
    );

    // Wait for the promise to resolve before asserting
    await waitFor(() => {
      expect(container).toBeTruthy();
    });
  });
});
