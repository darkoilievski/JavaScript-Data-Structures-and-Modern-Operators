'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    // console.log(
    //   `Order Received! ${this.starterMenu[starterIndex]}, and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    // );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your decilious pasta with ${ing1},${ing2} and${ing3}`);
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

restaurant.orderDelivery({
  address: 'Via del sole, 21',
  starterIndex: 1,
});

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

// // DESTRUCTURING OBJECTS
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);
// // USED FOR THIRD PARTY DATA
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// console.log(restaurantName, hours, tags);

// // DEFAULT VALUES (adding default values)

// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // MUTATING VARIABLES IN OBJECTS
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// // this doesnt work, you need to put them in parentesis see below
// // {a,b} = obj;
// // In objects JS expects a block of code before {}
// ({ a, b } = obj);
// console.log(a, b);

// // NESTED OBJECTS
// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);

// ARRAYS DESTRUCTURING
// OLD WAY
// const arr = [2, 3, 4];
// const a = [0];
// const b = [1];
// const c = [2];

// // NEW AND MORE EFFICIENT WAY
// const [x, y, z] = arr;
// console.log(x, y, z);

// // PRACTICE
// const [first, second] = restaurant.categories;
// console.log(first, second);

// const [, , third] = restaurant.categories;
// console.log(third);

// // SWITCH VARIABLE INSIDE THE ARRAY
// let [main, secondary] = restaurant.categories;
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // FUNCTION TO ARRAY AND DESTRUCTING IT (from the funcition order)
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// // NESTED ARRAY
// const nested = [2, 4, [5, 6]];
// // const [s, , f] = nested;
// // console.log(s, f);
// // NESTED DESTCTURING INSIDE THE NESTED ARRAY
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // DEFAULT VALUES (if you want to check the variable in the array
// // and giving the default value doesnt get you undefined value in the console log)
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

// THE SPREAD OPERATOR

// const arr = [7, 8, 9];
// // OlD WAY if u want to add new value to arrays
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];

// // NEW WAY USING THE SPREAD OPERATOR
// const newArr = [1, 2, ...arr];
// console.log(newArr);
// const addArr = [...arr, 10, 11, 12, 13, 14];
// console.log(addArr);

// // Isolating the result
// console.log(...newArr);
// console.log(...addArr);
// // The spread operator doesnt create new variables it just updates the existing array
// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// // Create shallow copies
// const maninMenuCopy = [...restaurant.mainMenu];

// // Join 2 arrays or more
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// // Itterables are arays, strings, maps, sets but not objects.
// const str = 'Jonas';
// const letters = [...str, '', 'S.'];
// console.log(letters); //Expand the string
// console.log(...str); //Expand the string

// EXAMPLE real world used daily
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];
// console.log(ingredients);
// restaurant.orderPasta(...ingredients);

// the spread operator with objects
// const newRestaurant = { foundedIn: 1998, ...restaurant, foundred: 'Giuseppe' };
// console.log(newRestaurant);
// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

// DESTRUCTURING REST
// REST PATTERN IT LOOKS THE SAME AS THE SPREAD OPERATOR BUT IT DOES THE OPPOSITE
// THIS S SPREAD BECAUSE IT'S ON THE RIGHT SIDE OF =
// const arr = [1, 2, ...[3, 4]];
// // THIS IS REST BECAUSE ITS ON THE LEFT SIDE OF =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// USING THEM ON BOTH SIDES, the rest element must be the last in the array

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// REST IN OBJECTS
// const { sat, ...weekDays } = restaurant.openingHours;
// console.log(weekDays);

// // FUNCTIONS USING REST ELEMENT
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };
// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
// restaurant.orderPizza('sauce');

// The spread and the rest both look exactly the same
// The spread operator is commonly used where we usually wirite values spearated by comma
// The rest operator is commonly used where we usually wirite variables spearated by comma

// SHORT CIRCUTTING || operator
// They can use any data type, the can return any data type , they can do short circuiting
// Short cicuiting is just used with the ||
// and returns the first boolean - truth value or the last value if all of them all false
// console.log('------OR------');
// console.log(3 || 'Jonas');
// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log(undefined || null);

// console.log(3 || undefined || 0 || '' || null || false || 'Hello' || null);

// restaurant.numGuest = 0;
// const guests1 = restaurant.numGuest ? restaurant.numGuest : 10;
// console.log(guests1);

// // Setting default value
// const guests2 = restaurant.numGuest || 10;
// console.log(guests2);
// console.log('------AND------');

// // SHORT CIRCUTTING && operator
// // Short cicuiting is just used with the &&
// // and returns the first boolean - falsy value or the last value if all of them are true

// console.log(0 && 'Jonas');
// console.log(7 && 'Jonas');

// console.log('Hello' && 23 && null && 'Jonas');
// console.log('Hello' && 23 && 'Jonas' && undefined && 0);

// // Practical example
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }
// // Easier way of writing the if code above but not used all of the time.
// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// SHORT CIRCUTTING ?? operator
// restaurant.numGuest = 0;
// const guests = restaurant.numGuest || 10;
// console.log(guests);

// // Nullish values are null and undefined (NOT 0 or '') Only nullish values will be short circuted
// const guestCorrect = restaurant.numGuest ?? 10;
// console.log(guestCorrect);

// LOGICAL ASSIGNMENT OPERATORS
// const rest1 = {
//   name: 'Capri',
//   // numGuests: 20,
//   numGuests: 0,
// };
// const rest2 = {
//   name: 'Capri',
//   owner: 'Giovanni Rossi',
// };
// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;
// // Logical OR || assignment operator
// // rest1.numGuests ||= 10;
// // rest2.numGuests ||= 10;
// // The Logical Nullish operator (in case the number i actually 0)
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;
// // The logical AND && operator
// rest2.owner = rest2.owner && '<ANONYMOUS'; // THE OLD WAY
// rest1.owner &&= '<ANONYMOUS'; // 2021 ES UPDATE AND THE NEW WAY
// rest2.owner &&= '<ANONYMOUS'; // 2021 ES UPDATE AND THE NEW WAY
// console.log(rest1);
// console.log(rest2);

// CHALLENGE #01
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  printGoals: function (Davies, Muller, Lewandowski, Kimich) {
    return [this.scored, this.score];
  },
};

// const [Davies, Muller, Lewandowski, Kimich] = game.scored;
// game.scored = ['Davies', 'Muller', 'Lewandowski', 'Kimich'];
// console.log(...game.scored);

// console.log(...game.scored);
// console.log(...game.score);
console.log(
  `The result of the game is ${game.score} and the scorers are ${game.scored}`
);
// console.log(game.printGoals(...game.scored, game.score));

const [players1, players2] = game.players;
console.log(players1, players2);

const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const playersFinal = [...fieldPlayers, 'Thiago', 'Coutinho', 'Perisic'];
// My way
// const team1 = game.odds.team1;
// const draw = game.odds.x;
// const team2 = game.odds.team2;

const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 7.
team1 < team2 && console.log(`Team 1 is more likely to win`);
team1 > team2 && console.log(`Team 2 is more likely to win`);
