import { describe, test, expect, vi, afterEach } from "vitest";
import { receiptModel } from "./receiptModel";

describe("Receipt Model", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  describe("Given the Input #1", () => {
    test("should calculate the receipt", () => {
      const result = receiptModel.calculate([
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

      expect(result).toStrictEqual({
        products: [
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
        ],
        salesTaxes: 1.5,
        total: 42.32,
      });
    });

    test("should show the receipt", () => {
      const consoleSpy = vi.spyOn(console, "log");

      receiptModel.show({
        products: [
          {
            name: "Book",
            quantity: 2,
            subtotal: 24.98,
          },
          {
            name: "Music CD",
            quantity: 1,
            subtotal: 16.490000000000002,
          },
          {
            name: "Chocolate Bar",
            quantity: 1,
            subtotal: 0.85,
          },
        ],
        salesTaxes: 1.5,
        total: 42.32,
      });

      expect(consoleSpy).toHaveBeenCalledWith("2 Book: 24.98");
      expect(consoleSpy).toHaveBeenCalledWith("1 Music CD: 16.49");
      expect(consoleSpy).toHaveBeenCalledWith("1 Chocolate Bar: 0.85");
      expect(consoleSpy).toHaveBeenCalledWith("Sales Taxes: 1.50");
      expect(consoleSpy).toHaveBeenCalledWith("Total: 42.32");
    });
  });

  describe("Given the Input #2", () => {
    test("should calculate the receipt", () => {
      const result = receiptModel.calculate([
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

      expect(result).toStrictEqual({
        products: [
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
        ],
        salesTaxes: 7.65,
        total: 65.15,
      });
    });

    test("should show the receipt", () => {
      const consoleSpy = vi.spyOn(console, "log");

      receiptModel.show({
        products: [
          {
            name: "Imported box of chocolates",
            quantity: 1,
            subtotal: 10.5,
          },
          {
            name: "Imported bottle of perfume",
            quantity: 1,
            subtotal: 54.65,
          },
        ],
        salesTaxes: 7.65,
        total: 65.15,
      });

      expect(consoleSpy).toHaveBeenCalledWith(
        "1 Imported box of chocolates: 10.50"
      );
      expect(consoleSpy).toHaveBeenCalledWith(
        "1 Imported bottle of perfume: 54.65"
      );
      expect(consoleSpy).toHaveBeenCalledWith("Sales Taxes: 7.65");
      expect(consoleSpy).toHaveBeenCalledWith("Total: 65.15");
    });
  });

  describe("Given the Input #3", () => {
    test("should calculate the receipt", () => {
      const result = receiptModel.calculate([
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

      expect(result).toStrictEqual({
        products: [
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
        ],
        salesTaxes: 7.8,
        total: 98.28,
      });
    });

    test("should show the receipt", () => {
      const consoleSpy = vi.spyOn(console, "log");

      receiptModel.show({
        products: [
          {
            name: "Imported bottle of perfume",
            quantity: 1,
            subtotal: 32.19,
          },
          {
            name: "Bottle of perfume",
            quantity: 1,
            subtotal: 20.889999999999997,
          },
          {
            name: "Packet of headache pills",
            quantity: 1,
            subtotal: 9.75,
          },
          {
            name: "Imported boxes of chocolates",
            quantity: 3,
            subtotal: 35.45,
          },
        ],
        salesTaxes: 7.8,
        total: 98.28,
      });

      expect(consoleSpy).toHaveBeenCalledWith(
        "1 Imported bottle of perfume: 32.19"
      );
      expect(consoleSpy).toHaveBeenCalledWith("1 Bottle of perfume: 20.89");
      expect(consoleSpy).toHaveBeenCalledWith(
        "1 Packet of headache pills: 9.75"
      );
      expect(consoleSpy).toHaveBeenCalledWith(
        "3 Imported boxes of chocolates: 35.45"
      );
      expect(consoleSpy).toHaveBeenCalledWith("Sales Taxes: 7.80");
      expect(consoleSpy).toHaveBeenCalledWith("Total: 98.28");
    });
  });
});
