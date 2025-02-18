import * as readline from "node:readline/promises";

import { stdin as input, stdout as output } from "node:process";

import { cartModel } from "./models/cartModel";
import { receiptModel } from "./models/receiptModel";
import { productRepository } from "./repositories/productRepository";

const rl = readline.createInterface({ input, output });

async function main() {
  console.clear();

  console.log("====== Welcome to Shopping Mall ======");

  console.log("Take a look at our offers:");

  const products = productRepository.list();

  console.table(products, ["name", "price"]);

  let keepShopping = true;

  while (keepShopping) {
    const productIndex = await rl.question(
      "\nChoose the product by its index: "
    );

    const selectedProduct = productRepository.getByIndex(
      parseInt(productIndex, 10)
    );

    const productQuantity = await rl.question("Quantity: ");

    cartModel.add({
      product: selectedProduct,
      quantity: parseInt(productQuantity, 10),
    });

    const buying = await rl.question(
      "\nWould like to shopping anything else? (y/n): "
    );

    keepShopping = buying === "y";
  }

  const cartSubtotal = cartModel.calculateSubtotal(cartModel.list());

  const receipt = receiptModel.calculate(cartSubtotal);

  console.log("\n\nHere is your receipt:\n");

  receiptModel.show(receipt);

  rl.close();
}

main();
