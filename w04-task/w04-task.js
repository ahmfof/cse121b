/* LESSON 3 - Programming Tasks */

/* Profile Object  */


/* Populate Profile Object with placesLive objects */




/* DOM Manipulation - Output */

/* Name */

/* Photo with attributes */


/* Favorite Foods List*/


/* Hobbies List */


/* Places Lived DataList */

let myInfo = {};
myInfo = {
    name: 'Ahmed Fofana'
};


myInfo = {
    name: 'Ahmed Fofana',
    photo: 'images/me.jpeg'
};


myInfo = {
    name: 'Ahmed Fofana',
    photo: 'images/me.jpeg',
    favoriteFoods: [
        'Rice',
        'Casava',
        'Beef',
        'fish',
        'bread'
    ]
};


myInfo = {
    name: 'Ahmed Fofana',
    photo: 'images/me.jpeg',
    favoriteFoods: [
        'Rice',
        'Casava',
        'Beef',
        'Fish',
        'Bread'
    ],
    hobbies: [
        'Hunting',
        'Fishing',
        'climbing trees'
    ]
};


myInfo = {
    name: 'Ahmed Fofana',
    photo: 'images/me.jpeg',
    favoriteFoods: [
        'Rice',
        'Casava',
        'Beef',
        'Fish',
        'Bread'
    ],
    hobbies: [
        'Hunting',
        'Fishing',
        'Climbing trees'
    ],
    placesLived: []
};


myInfo = {
    name: 'Ahmed Fofana',
    photo: 'images/me.jpeg',
    photo: '',
    favoriteFoods: [
        'Rice',
        'Casava',
        'Beef',
        'Fish',
        'Bread'
    ],
    hobbies: [
        'Hunting',
        'Fishing',
        'Climbing trees'
    ],
    placesLived: [
        {
            place: '',
            length: ''
        }
    ]
};


myInfo = {
    name: 'Ahmed Fofana',
    photo: 'images/me.jpeg',
    favoriteFoods: [
        'Rice',
        'Casava',
        'Beef',
        'Fish',
        'Bread'
    ],
    hobbies: [
        'Hunting',
        'Fishing',
        'Climbing trees'
    ],
    placesLived: [
        {
            place: 'Denver',
            length: '5 years'
        },
        {
            place: 'Boise',
            length: '1 years'
        },
        {
            place: 'Rexburg',
            length: '3 years'
        }
    ]
};


document.querySelector('#name').textContent = myInfo.name;
document.querySelector('#photo').setAttribute('src', myInfo.photo);
document.querySelector('#photo').setAttribute('alt', myInfo.name);

let favoriteFood1 = document.createElement('li');
favoriteFood1.textContent = myInfo.favoriteFoods[0];
let favoriteFood2 = document.createElement('li');
favoriteFood2.textContent = myInfo.favoriteFoods[1];
let favoriteFood3 = document.createElement('li');
favoriteFood3.textContent = myInfo.favoriteFoods[2];
let favoriteFood4 = document.createElement('li');
favoriteFood4.textContent = myInfo.favoriteFoods[3];
let favoriteFood5 = document.createElement('li');
favoriteFood5.textContent = myInfo.favoriteFoods[4];

document.querySelector('#favorite-foods').appendChild(favoriteFood1);
document.querySelector('#favorite-foods').appendChild(favoriteFood2);
document.querySelector('#favorite-foods').appendChild(favoriteFood3);
document.querySelector('#favorite-foods').appendChild(favoriteFood4);
document.querySelector('#favorite-foods').appendChild(favoriteFood5);

let hobby1 = document.createElement('li');
hobby1.textContent = myInfo.hobbies[0];
let hobby2 = document.createElement('li');
hobby2.textContent = myInfo.hobbies[1];
let hobby3 = document.createElement('li');
hobby3.textContent = myInfo.hobbies[2];

document.querySelector('#hobbies').appendChild(hobby1);
document.querySelector('#hobbies').appendChild(hobby2);
document.querySelector('#hobbies').appendChild(hobby3);


let placesLivedPlace1 = document.createElement('dt');
placesLivedPlace1.textContent = myInfo.placesLived[0].place;
let placesLivedLength1 = document.createElement('dd');
placesLivedLength1.textContent = myInfo.placesLived[0].length;

let placesLivedPlace2 = document.createElement('dt');
placesLivedPlace2.textContent = myInfo.placesLived[1].place;
let placesLivedLength2 = document.createElement('dd');
placesLivedLength2.textContent = myInfo.placesLived[1].length;

let placesLivedPlace3 = document.createElement('dt');
placesLivedPlace3.textContent = myInfo.placesLived[2].place;
let placesLivedLength3 = document.createElement('dd');
placesLivedLength3.textContent = myInfo.placesLived[2].length;


document.querySelector('#places-lived').appendChild(placesLivedPlace1);
document.querySelector('#places-lived').appendChild(placesLivedLength1);

document.querySelector('#places-lived').appendChild(placesLivedPlace2);
document.querySelector('#places-lived').appendChild(placesLivedLength2);

document.querySelector('#places-lived').appendChild(placesLivedPlace3);
document.querySelector('#places-lived').appendChild(placesLivedLength3);