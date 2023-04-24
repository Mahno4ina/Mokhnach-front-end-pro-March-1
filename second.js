class Hamburgerr {
    constructor(size, stuffing) {
      this.size = size;
      this.stuffing = stuffing;
      this.toppings = [];
    }
  
    static size_small = { price: 50, calories: 20 };
    static size_big = { price: 100, calories: 40 };
    static stuf_cheese = { price: 10, calories: 20 };
    static stuf_salad = { price: 20, calories: 5 };
    static staf_potato = { price: 15, calories: 10 };
    static top_mayo = { price: 20, calories: 5 };
    static top_spice = { price: 15, calories: 0 };
  
    addTopping(topping) {
      this.toppings.push(topping);
    }
  
    calculatePrice() {
      let price = this.size.price + this.stuffing.price;
      for (let topping of this.toppings) {
        price += topping.price;
      }
      return price;
    }
  
    calculateCalories() {
      let calories = this.size.calories + this.stuffing.calories;
      for (let topping of this.toppings) {
        calories += topping.calories;
      }
      return calories;
    }
  }

  class Hamburger {
    constructor(size, stuffing) {
      this.size = size;
      this.stuffing = stuffing;
      this.toppings = [];
    }
  
    addTopping(topping) {
      this.toppings.push(topping);
    }
  
    calculatePrice() {
      let price = 0;
      switch (this.size) {
        case 'small':
          price += 50;
          break;
        case 'large':
          price += 100;
          break;
        default:
          console.log('Invalid size');
          return 0;
      }
  
      switch (this.stuffing) {
        case 'cheese':
          price += 10;
          break;
        case 'salad':
          price += 20;
          break;
        case 'potato':
          price += 15;
          break;
        default:
          console.log('Invalid stuffing');
          return 0;
      }
  
      this.toppings.forEach(function(topping) {
        switch (topping) {
          case 'spice':
            price += 15;
            break;
          case 'mayo':
            price += 20;
            break;
          default:
            console.log(`Invalid topping: ${topping}`);
        }
      });
  
      return price;
    }
  
    calculateCalories() {
      let calories = 0;
      switch (this.size) {
        case 'small':
          calories += 20;
          break;
        case 'large':
          calories += 40;
          break;
        default:
          console.log('Invalid size');
          return 0;
      }
  
      switch (this.stuffing) {
        case 'cheese':
          calories += 20;
          break;
        case 'salad':
          calories += 5;
          break;
        case 'potato':
          calories += 10;
          break;
        default:
          console.log('Invalid stuffing');
          return 0;
      }
  
      this.toppings.forEach(function(topping) {
        switch (topping) {
          case 'spice':
            break;
          case 'mayo':
            calories += 5;
            break;
          default:
            console.log(`Invalid topping: ${topping}`);
        }
      });
  
      return calories;
    }
  }
  
  // Створюємо гамбургер з великим розміром та начинкою сир
  const hamburger = new Hamburger('large', 'cheese');
  
  // Додаємо до гамбургера додаткову начинку та приправу
  hamburger.addTopping('salad');
  hamburger.addTopping('spice');
  
  // Виводимо вартість та калорійність гамбургера у консоль
  console.log(`Price: ${hamburger.calculatePrice()} tg`);
  console.log(`Calories: ${hamburger.calculateCalories()} cal`);
