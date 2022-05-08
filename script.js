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

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
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
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
};
/*
* * Spread operator
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
