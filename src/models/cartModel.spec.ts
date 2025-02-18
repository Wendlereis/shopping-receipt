import { describe, test, expect } from "vitest";
import { cartModel } from "./cartModel";

describe("Cart Model", () => {
  describe("Given the Input #1", () => {
    test("should calculate the subtotal of a cart", () => {
      const result = cartModel.calculateSubtotal([
        {
          product: {
            name: "Book",
            price: 12.49,
            type: "book",
            isImported: false,
          },
          quantity: 2,
        },
        {
          product: {
            name: "Music CD",
            price: 14.99,
            type: "music",
            isImported: false,
          },
          quantity: 1,
        },
        {
          product: {
            name: "Chocolate Bar",
            price: 0.85,
            type: "food",
            isImported: false,
          },
          quantity: 1,
        },
      ]);

      expect(result).toStrictEqual([
        {
          name: "Book",
          quantity: 2,
          subtotal: 24.98,
          tax: 0,
        },
        {
          name: "Music CD",
          quantity: 1,
          subtotal: 16.490000000000002,
          tax: 1.5,
        },
        {
          name: "Chocolate Bar",
          quantity: 1,
          subtotal: 0.85,
          tax: 0,
        },
      ]);
    });
  });

  describe("Given the Input #2", () => {
    test("should calculate the subtotal of a cart", () => {
      const result = cartModel.calculateSubtotal([
        {
          product: {
            name: "Imported box of chocolates",
            price: 10,
            type: "food",
            isImported: true,
          },
          quantity: 1,
        },
        {
          product: {
            name: "Imported bottle of perfume",
            price: 47.5,
            type: "fragrance",
            isImported: true,
          },
          quantity: 1,
        },
      ]);

      expect(result).toStrictEqual([
        {
          name: "Imported box of chocolates",
          quantity: 1,
          subtotal: 10.5,
          tax: 0.5,
        },
        {
          name: "Imported bottle of perfume",
          quantity: 1,
          subtotal: 54.65,
          tax: 7.15,
        },
      ]);
    });
  });

  describe("Given the Input #3", () => {
    test("should calculate the subtotal of a cart", () => {
      const result = cartModel.calculateSubtotal([
        {
          product: {
            name: "Imported bottle of perfume",
            price: 27.99,
            type: "fragrance",
            isImported: true,
          },
          quantity: 1,
        },
        {
          product: {
            name: "Bottle of perfume",
            price: 18.99,
            type: "fragrance",
            isImported: false,
          },
          quantity: 1,
        },
        {
          product: {
            name: "Packet of headache pills",
            price: 9.75,
            type: "health",
            isImported: false,
          },
          quantity: 1,
        },
        {
          product: {
            name: "Imported boxes of chocolates",
            price: 11.25,
            type: "food",
            isImported: true,
          },
          quantity: 3,
        },
      ]);

      expect(result).toStrictEqual([
        {
          name: "Imported bottle of perfume",
          quantity: 1,
          subtotal: 32.19,
          tax: 4.199999999999999,
        },
        {
          name: "Bottle of perfume",
          quantity: 1,
          subtotal: 20.889999999999997,
          tax: 1.9,
        },
        {
          name: "Packet of headache pills",
          quantity: 1,
          subtotal: 9.75,
          tax: 0,
        },
        {
          name: "Imported boxes of chocolates",
          quantity: 3,
          subtotal: 35.45,
          tax: 1.7,
        },
      ]);
    });
  });
});
