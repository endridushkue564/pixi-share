/**
 * Filename: complexCode.js
 * Description: This code demonstrates a complex implementation of a shopping cart functionality using JavaScript.
 * It includes features like adding and removing items, calculating prices, applying discounts, and generating a summary.
 */

// Product class 
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

// ShoppingCart class
class ShoppingCart {
  constructor() {
    this.items = []; // Array to hold the products
  }

  // Add item to the shopping cart
  addItem(item) {
    this.items.push(item);
  }

  // Remove item from the shopping cart
  removeItem(item) {
    const index = this.items.findIndex((i) => i.name === item.name);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  // Calculate subtotal of all items in the cart
  getSubtotal() {
    return this.items.reduce((total, item) => total + item.price, 0);
  }

  // Apply discount to the cart based on a discount percentage
  applyDiscount(percentage) {
    const discount = this.getSubtotal() * (percentage / 100);
    return this.getSubtotal() - discount;
  }

  // Generate a summary of the shopping cart
  generateSummary() {
    console.log("Shopping Cart Summary:");
    console.log("======================");
    console.log("Items:");

    this.items.forEach((item, index) => {
      console.log(`${index + 1}. ${item.name} - $${item.price}`);
    });

    console.log("----------------------");
    console.log(`Subtotal: $${this.getSubtotal()}`);
    console.log("----------------------");
  }
}

// Usage example
const cart = new ShoppingCart();

// Creating sample products
const product1 = new Product("Product 1", 10);
const product2 = new Product("Product 2", 20);
const product3 = new Product("Product 3", 30);

// Adding products to the cart
cart.addItem(product1);
cart.addItem(product2);
cart.addItem(product3);

// Generating summary
cart.generateSummary();

// Removing a product from the cart
cart.removeItem(product2);

// Applying a discount
const discountedTotal = cart.applyDiscount(10);

console.log("----------------------");
console.log(`Discounted Total: $${discountedTotal}`);
console.log("======================");
console.log("End of Summary");