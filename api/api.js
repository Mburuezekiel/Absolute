// api/api.js
import axios from "axios";

const BASE_URL = "http://localhost:4000/api";

const api = {
  getallProducts: async () => {
    const response = await axios.get(`${BASE_URL}/products`);
    
    return response.data;
  },
  addproduct: async (product) => {
      const response = await axios.post(`${BASE_URL}/create-product`, product);
      return response.data;
    },
};

export default api;
