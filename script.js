'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

const openingHours = {
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
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `order received! ${this.starterMenu[starterIndex]} 
      and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
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
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizza: function (ing1, ...restOfIngs) {
    console.log(ing1);
    console.log(restOfIngs);
  },
};

// Data needed for the coding challenges
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
};

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

/*
 * * Coding Challenge #4
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
const button = document.querySelector('button');
button.addEventListener('click', () => {
  const text = document.querySelector('textarea').value;
  const inputArray = text.split('\n');
  for (const [i, e] of inputArray.entries()) {
    const [first, second] = e.trim().toLowerCase().split('_');
    console.log(
      `${first}${second.charAt(0).toUpperCase() + second.slice(1)}`.padEnd(20) +
        '✅'.repeat(i + 1)
    );
  }
});
*/

/*
 * * Working with strings

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
    // namesUpper.push(n.charAt(0).toUpperCase() + n.slice(1)); // Alternative 1
    // namesUpper.push(n[0].toUpperCase() + n.slice(1)); // Alternative 2
  }
  console.log(namesUpper.join(' '));
};
capitalizeName('john doe');

// Padding
const message = 'Hello world';
const paddedMessage = message.padStart(20, '.').padEnd(29, '.');
console.log(paddedMessage);

// Credit Card Masking Feature
const maskCreditCard = function (cardNumber) {
  const str = cardNumber + '';
  const last4Digits = cardNumber.slice(-4);
  console.log(last4Digits.padStart(str.length, '*'));
};
maskCreditCard('1234567890123456');

// Repeat Method
const repMsg = 'Hello world '.repeat(3);
console.log(repMsg);

const planesInLine = function (n) {
  console.log(`There are ${n} planes in the line ${`🔥`.repeat(n)}`);
};
planesInLine(5);
 */

/*
  * * Coding Challenge #3
// Task 1
const eventSet = new Set(gameEvents.values());
const events = [...eventSet];
console.log(events);

// Task 2
gameEvents.delete(64);
console.log(gameEvents);

// Task 3
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
  `An event happened , on average, every ${time / gameEvents.size} minutes`
);

// Task 4
for (const [i, el] of gameEvents.entries()) {
  i < 45
    ? console.log(`[First Half] ${i}: ${el}`)
    : console.log(`[Second Half] ${i}: ${el}`);
}
 */

////////////////////////////////////////////////////////////////////////////////
/*
 * * Maps

// Creation of a map syntax // * * part 1
// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// console.log(rest.set(2, 'Lisbon, Portugal'));

// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'Open now')
//   .set(false, 'Closed now');

// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 8;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2);
// // rest.clear()
// const arr = [1, 2];
// rest.set(arr, 'Test');
// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);
// console.log(rest.size);

// console.log(rest.get(arr));

// * * Maps Part 2
// const question = new Map([
//   [
//     'question',
//     'What is the official name of the latest major JavaScript version?',
//   ],
//   [1, 'C'],
//   [(2, 'Java')],
//   [3, 'ECMAScript'],
//   ['correct', 3],
//   [true, 'Correct 🎉'],
//   [false, 'Try Again!'],
// ]);
// console.log(question);

// // convert objects to map
// console.log(Object.entries(openingHours));
// const hourMap = new Map(Object.entries(openingHours));
// console.log(hourMap);
// // Quiz app

// console.log(question.get('question'));
// for (const [i, el] of question) {
//   if (typeof key === 'number') {
//     console.log(`Answer ${i}: ${el}`);
//   }
// }
// // const answer = Number(prompt('Your Answer'));
// // console.log(answer);
// // console.log(question.get(answer === question.get('correct')));

// // Convert Map to array with spread operator
// console.log([...question]);
 */

/*
 * * Sets
 * * Sets are collections of unique values.
 * * Sets are used to store data that has no duplicates.
 * * Sets are used IRL to turn arrays with duplicates into unique array.
 
// Creation of a new set syntax
const ordersSet = new Set(['Pasta', 'Pizza', 'Shawerma', 'Risotto', 'Pizza']);
console.log(ordersSet);

console.log(new Set('jonas'));

// Set methods
console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
ordersSet.add('Ass Bread');
console.log(ordersSet);
ordersSet.delete('Ass Bread');
console.log(ordersSet);
// ordersSet.clear();
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

// Real World use case (Remove Duplicates from arrays or know how many unique values an array has)

// Array with duplicates
const staff = ['waiter', 'waiter', 'waiter', 'Chef', 'Chef', 'Manager'];
const uniqueStaff = new Set(staff);

// log set after removing duplicates and unique size
console.log(uniqueStaff);
console.log(uniqueStaff.size);

// convert back to array with spread operator cuz it works on all iterables
const uniqueStaffArray = [...uniqueStaff];
console.log(uniqueStaffArray);

// Works with Strings too
console.log(new Set('amroooooshawkkkiiii'));
console.log(new Set('amroooooshawkkkiiii').size);
*/

/*
 * * Coding Challenge 2
// Task 1
for (const [key, value] of game.scored.entries()) {
  console.log(`Goal ${key + 1}: ${value}`);
}

// Task 2
let avg = 0;
let sum = 0;
for (const value of Object.values(game.odds)) {
  sum += value;
  avg = sum / Object.keys(game.odds).length;
  console.log(sum);
}
console.log(`${avg}`);

// Task 3
for (const [ins = 1, el] of Object.entries(game.odds)) {
  console.log(`Odd of victory ${ins === 'x' ? 'draw' : game[ins]}: ${el}`);
}

// ! Task 4 ( bonus task )
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);

 */

/*
 * * Looping over Objects, Object keys, values, and entires

// Property KEYS
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// Property VALUES with destructuring and renaming
const [{ open: ass, close: tits }, , pussy] = Object.values(openingHours);
console.log(ass, tits, pussy);

// Entries Object ( seems superior to me )
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key}, we are open from ${open} to ${close}.`);
}
*/

/*
 * * Optional Chaining

if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}

// WITH optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Really good practical Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`on ${day} we are open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 0) ?? 'no order');
console.log(restaurant.orderRisotto?.(0, 0) ?? 'no order');

// Arrays
const users = [{ name: 'Jonas', email: 'gayboy@gmail.com' }];
console.log(users[0]?.name ?? 'no name');
*/

/*
* * For of loop
// For of loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) {
  console.log(item);
}

console.log('---------destructuring----------');
// We destructure the returned array iterator
// from menu.entries into index (i) and element (el)
// that way we can get the index and the element like
// a normal for loop.
for (const [i, el] of menu.entries()) {
  console.log(`${i}: ${el}`);
}
*/

/*
 * * Coding Challenge #1
// Task 1
const [players1, players2] = [...game.players];
console.log(players1);

// Task 2
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// Task 3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// Task 4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// Task 5
const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

// Task 6
function printGoals(...playerNames) {
  playerNames.forEach(player =>
    console.log(
      `Player name is ${player} and number of goals scored is ${playerNames.length}`
    )
  );
}
printGoals('Thiago', 'Coutinho', 'Perisic', 'burki');
console.log('-----Game Scored Spread Version-----');
printGoals(...game.scored);

// ! Task 7
team1 < team2 && console.log('team1 is winning');
team1 > team2 && console.log('team2 is winning');
*/

/*
 * * Nullish coalescing operator (??) works with the
 * * principle of nullish values ( null , undefined )
 * * instead of falsey values which is why the (??)
 * * works in the example below. 
// Short circuiting with the || operator bug
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// ES2020 nullish coalescing operator fix
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

*/
/*
 * * Short Circuiting with the || operator, They take ANY data type, return ANY data type
 * * short circuiting in case of the || operator stops evaluation at the first
 * * truthy value that it finds, else it prints the first value. Practically, this can be used to set default values
 
console.log('-----OR-----');
console.log(2 || 'jonas');
console.log('' || 'jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// Practical Example
// Normal way of doing it
restaurant.numGuests = 0; // Doesn't work when numGuests is 0 ( solved with null coalescing operator )
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

// || Short circuiting way of doing it
const guests2 = restaurant.numGuests || 10;
console.log(guests2);


 * * short circuiting in case of the && operator stops evaluation at the first
 * * falsy value that it find else it prints the last value.
 * * Practically, this can be used to check if a property exists.
 

console.log('-----AND-----');
console.log(2 && 'jonas'); // prints 'jonas' because both are truthy
console.log(0 && 'jonas');

console.log('Hello' && 23 && null && 'jonas');

// Practical example
// Normal way of doing it
if (restaurant.orderPizza) {
  restaurant.orderPizza('pepperoni', 'mushrooms', 'onions');
}

// && short circuiting way of doing it
restaurant.orderPizza &&
  restaurant.orderPizza('pepperoni', 'mushrooms', 'onions');
*/

/*
* * REST Pattern & parameters
* * used when we have variables
* * names separated by commas
// Spread operator because it's on the RIGHT side of the assignment operator
const arr = [1, 2, ...[3, 4]];
console.log(arr);

// REST pattern because it's on the LEFT side of the assignment operator
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

// Rest of the element and doesn't include any skipped elements and it must be the last element
const [pizza, _, risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// Functions
// function to add elements using REST parameters
const add = function (...numbers) {
  let sum = 0;
  numbers.forEach(number => {
    sum += number;
  });
  console.log(sum);
};

// Use the spread operator to spread the array while also allowing to take in comma separated parameters
const nums = [1, 2, 3, 4, 5];
add(...nums);
add(1, 2, 3, 4, 5, 6);

// calling the function to show how the REST parameter works with a function in our example
restaurant.orderPizza('pepperoni', 'mushrooms', 'onions');
restaurant.orderPizza('tomatoes');
*/

/*
* * SPREAD operator used when 
* * we have values separated by commas
// spread operator is used only when there is somewhere to spread the elements in commas
const arr = [7, 8, 9];
const goodNewArr = [...arr, 10, 11, 12];
console.log(goodNewArr);

console.log(...goodNewArr);

const newMenu = [...restaurant.mainMenu, 'Gnooci'];
console.log(newMenu);

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// PRE ES2018 spread operator works on all iterables ( arrays, strings, maps, sets) NOT objects
const str = 'jonas';
const letters = [...str, ' ', '.s'];
console.log(letters);

// const ingredients = [
//   prompt('Ingredient 1'),
//   prompt('Ingredient 2'),
//   prompt('Ingredient 3'),
// ];

// restaurant.orderPasta(...ingredients);

// Post ES2018 spread operator works with objects as well
const newRestaurant = { foundedIn: 1009, ...restaurant, founder: 'Jonas' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Risotto man';
console.log(restaurant);
console.log(restaurantCopy);
*/

/*
* * Destructuring Objects
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

const {
  fri: { open: o = [], close: c = [] },
} = openingHours;
console.log(o, c);

restaurant.orderDelivery({
  time: '22:30',
  address: 'via del sole, 21',
  mainIndex: 2,
  starterIndex: 1,
});

restaurant.orderDelivery({
  address: 'via del sole, 21',
  starterIndex: 1,
});
*/

/* 
* * Destructuring arrays
const arr = [2, 3, 5];
let [firsty, secondy] = arr;
// console.log(first, second);

// const [first, _, third] = arr;
// console.log(first, third);

// switching values of array with destructuring
[firsty, secondy] = [secondy, firsty];
console.log(firsty, secondy);

// Nested Destructuring
const nestedArr = [2, 3, [5, 6, 7]];
const [first, _, [third, fourth]] = nestedArr;
console.log(first, third, fourth);

// default values in destructuring arrays
const [second = 1, fifth = 1] = [];
console.log(second, fifth);

// destructure return from functions
const [garlic, pizza] = restaurant.order(2, 0);
console.log(garlic, pizza);
*/
