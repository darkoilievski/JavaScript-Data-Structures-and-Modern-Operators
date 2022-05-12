'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

// Enhanced Object Literals
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // ES 6 enhanced obejct literal
  openingHours,
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    // console.log(
    //   `Order Received! ${this.starterMenu[starterIndex]}, and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    // );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your decilious pasta with ${ing1},${ing2} and${ing3}`);
  },
  orderPizza(mainIngredient, ...otherIngredients) {
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
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   }, //6)
//   printGoals: function (...players) {
//     console.log(players);
//     console.log(`${players.length} goals were scorred`);
//   },
// };
// // game.printGoals('Davies', 'Muller', 'Lewandowski', 'Kimich');
// game.printGoals(...game.scored);
// // 1)
// const [players1, players2] = game.players;
// console.log(players1, players2);
// // 2)
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);
// // 3)
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);
// // 4)
// const playersFinal = [...fieldPlayers, 'Thiago', 'Coutinho', 'Perisic'];
// // My way
// // const team1 = game.odds.team1;
// // const draw = game.odds.x;
// // const team2 = game.odds.team2;
// // 5)
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// // 7.
// team1 < team2 && console.log(`Team 1 is more likely to win`);
// team1 > team2 && console.log(`Team 2 is more likely to win`);

// THE FOR OF LOOP
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item); //It logs all of the elements in the array

// for (const [i, el] of menu.entries()) {
//   // console.log(item);
//   console.log(`${i + 1}: ${el}`);
// }
// // console.log(menu.entries());

// Enhanced Object Literals
// const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// const openingHours = {
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [weekdays[5]]: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// OPTIONAL CHAINING ?.
// if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);
// // if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open);
// // WITH OPTIONAL CHAINING
// // console.log(restaurant.openingHours.sat?.open);
// // console.log(restaurant.openingHours?.mon?.open);
// // Example
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days) {
//   // console.log(day);
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }
// // Optional chaining on methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderRissotto?.(0, 1) ?? 'Method does not exist');
// // Optional chaining on arrays
// const users = [{ name: 'JOnas', email: 'hello@jonas.com' }];
// console.log(users[2]?.name ?? 'User array empty');

// LOOPING OBJECTS NAMES (KEYS)
// const properties = Object.keys(openingHours);
// console.log(properties);
// let openStr = `We are open ${properties.length} days: `;
// for (const day of properties) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

// // PROPERTY VALUES
// const values = Object.values(openingHours);
// console.log(values);
// // Entries = names (keys) + values
// const entries = Object.entries(openingHours);
// // console.log(entries);
// for (const [day, { open, close }] of entries) {
//   console.log(`On ${day} we open at ${open} and close at ${close}`);
// }

// Coding Challenge #2

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   }, //6)
//   printGoals: function (...players) {
//     console.log(players);
//     console.log(`${players.length} goals were scorred`);
//   },
// };

// // Challenge #2 solutions

// //  1) My own solution - his sollution is better and easier
// // const players = Object.entries(game.scored);
// // console.log(players);
// // for (const [goal, scorer] of players) {
// //   console.log(`Goal ${goal}: ${scorer}`);
// // }
// // 1) His solution
// for (const [i, player] of game.scored.entries())
//   console.log(`Goal ${i + 1}: ${player}`);

// //  2) Using google my solution - mine is better and easier
// let average = 0;
// for (let key in game.odds) {
//   average += game.odds[key];
// }
// // console.log(average / 3);
// //  2) Instructors solution
// // let average = 0;
// // for (const odd of Object.values(game.odds)) average += odd;
// // average /= Object.values(game.odds).length;
// // console.log(average);
// // 3)MY WAY COMPLETELY WRONG
// // console.log(`Odd of victory ${game.team1}: ${game.odds.team1}`);
// // console.log(`Odd of victory ${game.team2}: ${game.odds.team2}`);
// // console.log(`Odd of victory draw: ${game.odds.x}`);
// // 3) Instructors solution
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(team, odd);
// }
// // 4) SOLUTION FROM THE FINAL CODE COULDNT RESOLVE IT
// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
// console.log(scorers);

// SETS
// sET IS A COLLECTION OF UNIQUE VALUES - SET CAN NEVER HAVE A DUPLICATE

// const ordersSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);

// console.log(ordersSet);

// console.log(new Set());
// //  Examples
// console.log(ordersSet.size); //It shows the size of the set but only the unique values
// console.log(ordersSet.has('Pizza')); // IT shows if an ellement is part of the set
// console.log(ordersSet.has('Bread')); // IT shows if an ellement is part of the set
// ordersSet.add('Garlic Bread'); // IT adds elements in the set
// console.log(ordersSet);
// ordersSet.delete('Risotto'); // IT deletes elements in the set
// // ordersSet.clear(); It deletes all of the elements in the set
// console.log(ordersSet);

// // Looping
// for (const order of ordersSet) console.log(order);
// //The big use case of a set is to remove the duplicates from an array
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffSet = [...new Set(staff)];
// console.log(staffSet);
// console.log(new Set(staffSet).size);
// console.log(new Set('darkoilievski').size);
// // Sets are not intended to replace arrays, use them just to check the duplicates and getting their size

// MAPS FUNDAMENTALS
// A MAP IS A DATA STRUCTURE TO MAP VALUES TO KEYS

// const rest = new Map();
// rest.set('name', 'Classico Italiano'); // Adding new elements to the data structure
// rest.set(1, 'Firenze Italy');
// rest.set(2, 'Lisbon Portugal');
// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open :D')
//   .set(false, 'We are closed');
// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// // Usefull feature with Map .get, just to show the power
// const time = 8;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// // Check if Map contains ceratin key .has
// console.log(rest.has('categories'));
// // Delete
// rest.delete(2);
// console.log(rest);
// // Size property
// console.log(rest.size);
// // Delete all elements
// rest.clear();

// // Example use arrays or objects as map keys
// console.log(rest.set([1, 2], 'Test'));
// console.log(rest.get([1, 2])); // This doesnt work

// rest.set(document.querySelector('h1'), 'Heading'); // Just a possibility

// // Another way instead of the set method to add values to a MAP
// const question = new Map([
//   ['Question', 'What is the best programming langugage in the world'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'Javascript'],
//   ['correct', 3],
//   [true, 'Correct :)'],
//   [false, 'Try again'],
// ]);
// console.log(question);

// // An easy way to convert object to map (keep this nice little trick)
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// // Loop for Quiz App
// console.log(question.get('Question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }
// // const answer = Number(prompt('Your answer'));
// // if (answer === 3) {
// //   console.log(alert('Correct :)'));
// // } else {
// //   console.log(alert('Try again'));
// // }

// // Convertin map back to an array (not used very often)
// console.log([...question]);
// // console.log(...question.entries());
// console.log([...question.keys()]);
// console.log([...question.values()]);

// // Challenge #3
// const gameEvents = new Map([
//   [17, '⚽ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, 'Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽ GOAL'],
//   [80, '⚽ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// // 1) Done by myself
// console.log(...new Set([gameEvents.values()]));
// //  2)
// console.log(gameEvents.delete(64, 'Yellow Card'));
// // 3)
// const time = 90;
// console.log(`An event happend, on average, every ${time / 10} minutes`);

// for (const [key, value] of gameEvents) {
//   if (key <= 45) {
//     console.log(`[FIRST HALF]${key}: ${value}`);
//   } else {
//     console.log(`[SECOND HALF]${key}: ${value}`);
//   }
// }

/* STRINGS - USEFULL TOPICS
//
//
*/

// const airline = 'Tap Air Portugal';
// const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// // We can also do the same directly in the console.log
// console.log('B737'[0]);
// // Check the lenght
// console.log('B737'.length);
// console.log(airline.length);
// // How to select specific values in the string
// console.log(airline.indexOf('r'));
// // How to select the last value of the string for example the letter 'r'
// console.log(airline.lastIndexOf('r'));

// // Example and why are they useluf
// // Slice method
// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// // Extract the string without knowing the index(value)
// console.log(airline.slice(0, airline.indexOf(' ')));
// // Extracting the last word without knowing the index(value)
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));
// // Define a negative begin argument
// console.log(airline.slice(-5));
// console.log(airline.slice(1, -1));

// // Practics
// const checkMiddleSeat = function (seat) {
//   // B and E are middle seats
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'C') console.log(`You got the middle seat :)`);
//   else console.log(`You got Lucky!`);
// };
// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// // Lower and Uppercase
// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());
// Fix capitalizaton in name
// const passenger = 'DaRKo'; //it should be 'Darko'
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// // Check user input email (comparing)
// const email = 'hello@jonas.io';
// const loginEmail = '   Hello@Jonas.Io \n';
// // The emails are the same but now lets trim down the extra spaces characters in the second
// const lowerEmail = loginEmail.toLowerCase();
// // The trim method old way
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);
// // The same trim method used in a newer way
// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(email === normalizedEmail);

// // Replacing parts of stgins

// const priceGB = '288,97&'; // Couldnt find the pound symbol
// const priceUS = priceGB.replace('$', '&').replace(',', '.');
// console.log(priceUS);

// // PRactice using .replaceAll
// const announcement =
//   'All passengers come to boarding door 23. Boarding door 23!';
// console.log(announcement.replaceAll('door', 'gate'));

// // Booleans
// // Includes
// const plane = 'Airbus A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.includes('Boeing'));
// // Starts with
// console.log(plane.startsWith('A')); //True
// console.log(plane.startsWith('A3')); //True
// console.log(plane.startsWith('A32')); //True
// console.log(plane.startsWith('Boeing')); //True

// // End with
// if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
//   console.log('Part of the NEW Airbus Family');
// }

// // Practice exercise
// const checkBaggage = function (items) {
//   // Whenever a user inputs data in the fileds its a good option to switch to lowercae
//   // so you can check/compare because it is case sensitive
//   const baggage = items.toLowerCase();
//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log(`You are not allowed on board`);
//   } else {
//     console.log(`Welcome aboard!`);
//   }
// };
// checkBaggage('I have a laptop, some Food and pocket Knife');
// checkBaggage('I have some socks and camera');
// checkBaggage('Got some snacks and a gun for protection');

// SPLIT IS ONE OF THE MOST POWERFUL STRING METHODS
// console.log('a+very+nice+string'.split('+'));
// // Used a lot
// console.log('Darko Ilievski'.split(' '));
// const [firstNAme, lastName] = 'Darko Ilievski'.split(' ');
// // Join method
// const newName = ['Mr.', firstNAme, lastName.toUpperCase()].join(' ');
// console.log(newName);
// // To capitalize a name

// const capitalizeName = function (name) {
//   const names = name.split(' ');
//   const namesUpper = [];
//   for (const word of names) {
//     // namesUpper.push(word[0].toUpperCase() + word.slice(1));
//     namesUpper.push(word[0].toUpperCase() + word.slice(1)); // Both work i did the second myself
//   }
//   console.log(namesUpper.join(' '));
// };

// capitalizeName('jessica ann smith davis');
// capitalizeName('darko ilievski');
// capitalizeName('tanja budjakovska ilievska');

// // Padding a string means to add a number of characters to the string until the string has a desired lenght
// const message = 'Go to gate 23!';
// console.log(message.padStart(25, '+')); // It will add +++ up to 25 char total
// console.log('Darko'.padStart(25, '+')); // The same lenght as the above
// // Pad end adding characters to the end of the string
// console.log(message.padEnd(25, '+'));

// // real word example of padding with credit cards
// const maskCreditCard = function (number) {
//   // First convert the number to a string
//   const str = number + '';
//   // Than target only the last 4 digits
//   const last = str.slice(-4);
//   // Than return it and pad from start for the full length adding * except for the 4 digits
//   return last.padStart(str.length, '*');
// };

// console.log(maskCreditCard(4337512578567894));
// console.log(maskCreditCard(23456789));
// console.log(maskCreditCard('123564587958658787'));

// // Repeat method - repeat the same string multiple times
// const message2 = 'Bad weatner... All Departures Delayed... ';
// console.log(message2.repeat(5));

// const planesInLIne = function (n) {
//   console.log(`There are ${n} planes in line ${':)'.repeat(n)}`);
// };

// planesInLIne(5);
// planesInLIne(3);
// planesInLIne(12);

// Challenge #4
/*
underscore_case
  first_name
Some_Variable
  calculate_AGE
delayed_departure
*/
document.body.append(document.createElement('textarea'));

document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'%'.repeat(i + 1)}`);
  }
});
