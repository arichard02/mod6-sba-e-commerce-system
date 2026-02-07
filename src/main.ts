import { fetchProducts } from "./services/apiService";
import { Product } from "./models/Product";
import { handleError } from "./utils/ErrorHandler";



async function runApp(): Promise<void> {
  try {
    const productsData = await fetchProducts();

    const products = productsData.map(
      (product: any) =>
        new Product(
          product.id,
          product.sku,
          product.title,
          product.description,
          product.price,
          product.discountPercentage,
          product.category
        )
    );

    products.forEach((product: Product) => product.displayDetails());
  } catch (error) {
    handleError(error);
  }
}

runApp();



