import axios from "axios";
import { nanoid } from "nanoid";

export const getProduct = async (productEan) => {
  const response = await axios.get(
    `https://world.openfoodfacts.org/api/v2/product/${productEan}.json`
  );

  const product = await response.data;
  product.id = nanoid();
  product.quantity = 1;
  return product;
};

export const searchProducts = async (query) => {
  const params = {
    search_simple: "1",
    action: "process",
    json: "1",
    search_terms: query,
  };
  const response = await axios.get(
    "https://world.openfoodfacts.org/cgi/search.pl?",
    { params }
  );

  return await response.data;
};
