import axios from "axios";
import { nanoid } from "nanoid";

export const getProductFromAPI = async (productEan) => {
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
