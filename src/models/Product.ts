import { calculateDiscount } from "../utils/DiscountCalculator";
import { calculateTax } from "../utils/TaxCalculator";

export class Product {
  public id: number;
  public sku: string;
  public title: string;
  public description: string;
  public price: number;
  public discountPercentage: number;
  public category: string;

  constructor(
    id: number,
    sku: string,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    category: string
  ) {
    this.id = id;
    this.sku = sku;
    this.title = title;
    this.description = description;
    this.price = price;
    this.discountPercentage = discountPercentage;
    this.category = category;
  }

  getPriceWithDiscount(): number {
    const discountAmount = calculateDiscount(
      this.price,
      this.discountPercentage
    );
    return this.price - discountAmount;
  }

  getTaxAmount(): number {
    return calculateTax(
      this.getPriceWithDiscount(),
      this.category
    );
  }

  displayDetails(): void {
    console.log("---------------");
    console.log(`Product: ${this.title}`);
    console.log(`Category: ${this.category}`);
    console.log(`Original Price: $${this.price.toFixed(2)}`);
    console.log(`Discount: ${this.discountPercentage}%`);
    console.log(
      `Price After Discount: $${this.getPriceWithDiscount().toFixed(2)}`
    );
    console.log(`Tax: $${this.getTaxAmount().toFixed(2)}`);
    console.log(
      `Final Price: $${(
        this.getPriceWithDiscount() + this.getTaxAmount()
      ).toFixed(2)}`
    );
  }
}
