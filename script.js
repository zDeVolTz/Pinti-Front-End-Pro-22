
// Мережа фастфудів пропонує кілька видів гамбургерів:

class Hamburger {

  static SIZE_SMALL = {price : 50, calories : 10};
  static SIZE_BIG = {price : 100, calories : 40};
  static STUFFING_CHEESE = {price : 10, calories : 20};
  static STUFFING_SALAT = {price : 20, calories : 5};
  static STUFFING_PATATО = {price : 15, calories : 10};
  static TOPPING_SAUCE = {price : 15, calories : 0};
  static TOPPING_MAYO = {price : 20, calories : 5};

  constructor(size,stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    this._toppings = [];

  }

  addTopping(topping){
    this._toppings.push(topping);
  }

  calculate () {
    let totalCalories = this.size.calories + this.stuffing.calories;
    for (const value of this._toppings) {
      totalCalories += value.calories;
    }
    return totalCalories;
  }

  calculatePrice() {
    let totalPrice = this.size.price + this.stuffing.price;
    for (const value of this._toppings) {
      totalPrice += value.price;
    }
    return totalPrice;
  }
}

// // маленький гамбургер з начинкою з сиру
let hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

console.log(`Price: ${hamburger.calculatePrice()} Calories: ${hamburger.calculate()}`);

// // добавка з майонезу
hamburger.addTopping(Hamburger.TOPPING_MAYO);

// // скільки коштує
console.log(`Price: ${hamburger.calculatePrice()}`);

// // запитаємо скільки там калорій
console.log(`Calories: ${hamburger.calculate()}`);

// // я тут передумав і вирішив додати ще приправу
hamburger.addTopping(Hamburger.TOPPING_SAUCE);

console.log(Hamburger.TOPPING_SAUCE);
// // А скільки тепер коштує?
console.log(`Price with sauce: ${hamburger.calculatePrice()}`);