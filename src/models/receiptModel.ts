import { CartItemSubtotal } from "./cartModel";

export interface Receipt {
  products: Omit<CartItemSubtotal, "tax">[];
  salesTaxes: number;
  total: number;
}

function calculate(cartItemSubtotal: CartItemSubtotal[]) {
  const receipt: Receipt = {
    products: [],
    salesTaxes: 0.0,
    total: 0.0,
  };

  return cartItemSubtotal.reduce((receipt, item) => {
    const result: Receipt = {
      products: [...receipt.products, item],
      salesTaxes: receipt.salesTaxes + item.tax,
      total: receipt.total + item.subtotal,
    };

    return result;
  }, receipt);
}

function show(receipt: Receipt) {
  receipt.products.map((item) =>
    console.log(`${item.quantity} ${item.name}: ${item.subtotal.toFixed(2)}`)
  );
  console.log(`Sales Taxes: ${receipt.salesTaxes.toFixed(2)}`);
  console.log(`Total: ${receipt.total.toFixed(2)}`);
}

export const receiptModel = {
  calculate,
  show,
};
