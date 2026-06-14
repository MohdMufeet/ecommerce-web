import { createContext } from "react";

export const ProductContext = createContext({
  product: null,
  products: [],
  fetchProduct: () => {},
  fetchAllProducts: () => {},
});

