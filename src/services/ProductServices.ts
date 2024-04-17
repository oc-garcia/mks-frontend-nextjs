import axios from "axios";

const API_URL = "http://localhost:3000/api/products";

export const ProductServices = {
  async getProducts() {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      console.error(error);
      return error;
    }
  },
};
