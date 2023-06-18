import axios from "axios";
import { nanoid } from "nanoid";

export const getProduct = async (productEan) => {
  const response = await axios.get(
    `https://world.openfoodfacts.org/api/v2/product/${productEan}.json`
  );

  const product = await response.data;

  if (product.status === 0) {
    alert("Nie ma takiego produktu w bazie danych.");
    return;
  }

  if (product.status === 1) {
    product.id = nanoid();
    product.quantity = 1;
    return product;
  }

  new Error(response.statusText);
};

export const searchProducts = async (query) => {
  const response = await axios.get(
    `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${query}&search_simple=1&action=process&json=1`
  );

  return await response.data;
};
