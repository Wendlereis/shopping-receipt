import { Product } from "../models/ProductModel";

const products: Product[] = [
  { name: "Book", price: 12.49, type: "book", isImported: false },
  {
    name: "Music CD",
    price: 14.99,
    type: "music",
    isImported: false,
  },
  {
    name: "Chocolate Bar",
    price: 0.85,
    type: "food",
    isImported: false,
  },
  {
    name: "Imported box of chocolates",
    price: 10,
    type: "food",
    isImported: true,
  },
  {
    name: "Imported bottle of perfume",
    price: 47.5,
    type: "fragrance",
    isImported: true,
  },
  {
    name: "Imported bottle of perfume",
    price: 27.99,
    type: "fragrance",
    isImported: true,
  },
  {
    name: "Bottle of perfume",
    price: 18.99,
    type: "fragrance",
    isImported: false,
  },
  {
    name: "Packet of headache pills",
    price: 9.75,
    type: "health",
    isImported: false,
  },
  {
    name: "Imported boxes of chocolates",
    price: 11.25,
    type: "food",
    isImported: true,
  },
];

function list() {
  return products;
}

function getByIndex(index: number) {
  return products[index];
}

export const productRepository = {
  list,
  getByIndex
};
