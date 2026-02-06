// Develop Product Class:

// Product Base Class (Product.ts):
// Define a Product class that includes the appropriate properties 
// based on data provided in the API response.
// Include methods displayDetails() and getPriceWithDiscount(), 
// and implement them appropriately based on the provided data.


export


class Product {
    id: number;
    title: string;
    decription: string;
    catagory: string;
    price: number;

    constructor(id: number, title: string, description: string, category: string, price: number) {
        this.id = id;
        this.title = title;
        this.decription = description;
        this.catagory = category;
        this.price = price;
    }

      displayDetails(): string {
        return `The product id : ${this.id} , The product title is : ${this.title} , the product price is : ${this.price}`;
  }

  

  getPriceWithTax(): number {
    const taxAmount = this.price * 0.2;
    const totalPrice = this.price + taxAmount;
    return totalPrice;
  }
}

const productInstance = new Product(1, "Sample Product", "This is a sample product description.", "Sample Category", 100);