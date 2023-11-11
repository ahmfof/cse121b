/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = 'Ahmed Fofana';
let currentYear = new Date().getFullYear(); // Use this to get the current year
let profilePicture = 'images/me.jpeg';

/* Step 3 - Element Variables */

const nameElement = document.getElementById('Ahmed Fofana'); // Define nameElement
const yearElement = document.getElementById('2023'); // Define yearElement
const foodElement = document.getElementById('food');

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
(document.getElementById('image')).setAttribute('src', profilePicture);

/* Step 5 - Array */
let favFood1;
let favfood2;
let favoriteFood;
favFood1 = [" Tacos", " Sushi", " Hamburgers"];
document.getElementById("food").innerHTML = favFood1;
favfood2 = " Teriyaki Chicken";
favoriteFood = favFood1.concat(favfood2);
document.getElementById("food").innerHTML = favoriteFood;
favoriteFood.splice(0,1);
document.getElementById("food").innerHTML = favoriteFood;
favoriteFood.splice(2,1);
document.getElementById("food").innerHTML = favoriteFood;