import { ErrorWithApi } from "../utils/ErrorHandler.js";

const API_URL = "https://dummyjson.com/products";

export async function fetchProducts(): Promise<any[]> {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new ErrorWithApi("Failed to fetch products", response.status);
    }

    const data = await response.json();
    return data.products;
  } catch (error) {
    throw error;
  }
}
