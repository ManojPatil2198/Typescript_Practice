// what is class in typescript
//  a class  is a blueprint of the object. it is used to create the object.
//  it is a template for creating objects.


// what is access modifier in typescript
//  access modifier is used to set the visibility of class members.
//  there are three types of access modifiers in typescript
//  1. public
//  2. private
//  3. protected// current class and child class  la accessible

class Product {
    name: string;
   protected price: number;
    pId: number;
    inCart: boolean = false;
    inOrder: boolean = false;
    constructor(name: string, price: number, pId: number) {
        this.name = name;
        this.price = price;
        this.pId = pId;
    }
    addToCart() {
        this.inCart = true;
    }
     buyProduct():string {
     if (this.inCart) { 
        return `product ${this.name} is oredered in price of ${this.price}`;

      }
      else {
        return`no product in cart to order`;
      }

}

}

  class Order extends Product {
  constructor(){
    super('Iphone',50000,102);
  }
   getPrice(){
    return this.price;
   }
  }
// var product = new Product('Samsung', 25000, 101);
// product.addToCart();
// console.log(product.buyProduct());

// console.log(product.name);
// console.log(product.price); // error: price is protected

var order = new Order();
console.log(order.getPrice());