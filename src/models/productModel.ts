export type ProductType = "book" | "food" | "health" | "fragrance" | "music";

export interface Product {
  name: string;
  price: number;
  type: ProductType;
  isImported: boolean;
}

function isTaxable(product: Product) {
  const notTaxableProducts = ["book", "food", "health"];

  return !notTaxableProducts.includes(product.type);
}

export const productModel = {
  isTaxable,
};
