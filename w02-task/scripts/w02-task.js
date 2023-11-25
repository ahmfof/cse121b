// /* W02-Task - Profile Home Page */

// /* Step 1 - Setup type tasks - no code required */

// /* Step 2 - Variables */


// /* Step 3 - Element Variables */


// /* Step 4 - Adding Content */



// /* Step 5 - Array */

// const fullName = 'Ahmed Fofana';
// document.querySelector('#name').textContent = fullName;

// const currentYear = 2023;
// document.querySelector('#years').textContent = currentYear;

// const profilePicture ='images/me.jpeg';
// document.querySelector('img').setAttribute('src', profilePicture);

// const favoriteFood = ['Placali','Sauce Graine','Fish Soup'];
// document.querySelector('#food').textContent = favoriteFood;

// const anotherFavoriteFood = ['Hamburgers', 'McdDonal'];
// favoriteFood.push(anotherFavoriteFood);
// document.querySelector('#food').textContent = favoriteFood;

// favoriteFood.shift();
// document.querySelector('#food').textContent = favoriteFood;

// favoriteFood.pop();
// document.querySelector('#food').textContent = favoriteFood;

const fullName = 'Ahmed Fofana';
document.querySelector('#name').textContent = fullName;

const currentYear = 2023;
document.querySelector('#years').textContent = currentYear;

const profilePicture = 'images/me.jpeg';
document.querySelector('img').setAttribute('src', profilePicture);

let favoriteFood = ['Placali', ' Sauce Graine', ' Fish Soup', ' Sushi', ' Steak', ' Mc Donald.'];
document.querySelector('#food').textContent = favoriteFood.join('\n');

// Adding another favorite food
const anotherFavoriteFood = ['Hamburgers', ' French Frite', ' Banana', ' Ice Cream', ' Salad'];
favoriteFood.push(anotherFavoriteFood);

// Rendering the updated array with line breaks
document.querySelector('#food').textContent = favoriteFood.join('\n');

// Removing the first element of the array
favoriteFood.shift();

// Rendering the array again with line breaks
document.querySelector('#food').textContent = favoriteFood.join('\n');
