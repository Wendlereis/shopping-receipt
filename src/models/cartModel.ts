import { Product, productModel } from "./ProductModel";

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CartItemSubtotal {
  quantity: number;
  name: string;
  subtotal: number;
  tax: number;
}

const cart: CartItem[] = [];

function add(cartItem: CartItem) {
  cart.push(cartItem);
}

function list() {
  return cart;
}

function calculateSubtotal(cart: CartItem[]) {
  const cartItemSubtotal: CartItemSubtotal[] = [];

  return cart.reduce((subtotalItems, item) => {
    const subtotalByQuantity = item.quantity * item.product.price;

    let tax = 0;

    if (item.product.isImported) {
      const baseTax = (subtotalByQuantity * 5) / 100;

      tax += Math.ceil(baseTax * 20) / 20;
    }

    if (productModel.isTaxable(item.product)) {
      tax += Math.ceil(subtotalByQuantity * 10) / 100;
    }

    return [
      ...subtotalItems,
      {
        quantity: item.quantity,
        name: item.product.name,
        subtotal: subtotalByQuantity + tax,
        tax: tax,
      },
    ];
  }, cartItemSubtotal);
}

export const cartModel = {
  add,
  list,
  calculateSubtotal
};
