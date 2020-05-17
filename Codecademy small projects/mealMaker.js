const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: [],
    },
    get appetizers () {
      return this._courses.appetizers
    },
    get mains () {
      return this._courses.mains
    },
    get desserts () {
      return this._courses.desserts
    },
    set appetizers (appetizers) {
      this._courses.appetizers = appetizers;
    },
    set mains (mains) {
      this._courses.mains = mains;
    },
    set desserts (desserts) {
      this._courses.desserts = desserts;
    },
    get courses () {
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts,
      };
    },
    addDishToCourse(courseName , dishName , dishPrice) {
      const dish = {
        name: dishName,
        price: dishPrice,
      };
      return this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
      const dishes = this._courses[courseName]
      const randomIndex = Math.floor(Math.random() * dishes.length);
      return dishes[randomIndex];
    },
    generateRandomMeal() {
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourse('mains');
      const dessert = this.getRandomDishFromCourse('desserts');
      const totalPrice = this.appetizer + this.main + this.dessert;
      return `Your meal was ${appetizer.name}, ${main.name} and ${dessert.name}. Total price is ${totalPrice}`;
    },
  
  };
   menu.addDishToCourse('appetizer', 'Salad', 4.00);
   menu.addDishToCourse('appetizer', 'panir', 4.50);
   menu.addDishToCourse('appetizer', 'namak', 3.00);
  
   menu.addDishToCourse('main', 'Meigoo', 10.00);menu.addDishToCourse('main', 'kare', 2.00);
   menu.addDishToCourse('main', 'sos', 2.50);
  
   menu.addDishToCourse('dessert', 'cake', 6.00);
   menu.addDishToCourse('dessert', 'khame', 3.50);
   menu.addDishToCourse('dessert', 'karamel', 1.00);
  
   let meal = menu.generateRandomMeal();
   console.log(meal);