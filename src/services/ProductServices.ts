import axios from "axios";

export const ProductServices = {
  async getProducts() {
    try {
      const response = await axios.get("/api/products");
      return response.data;
    } catch (error) {
      console.error(error);
      return error;
    }
  },
};
