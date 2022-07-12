console.log('Task №1');

let sityName = 'Kyiv',
    countryName = 'Ukraine';
    population = 2884000;
    isStadium = true;

console.log('My hometown is ' + sityName + '.');
console.log(sityName + ' is a capital of ' + countryName + '.');
console.log('Population of', sityName, 'is', population, '.');

if (isStadium == true){
    console.log(sityName, 'has a stadium.') 
} else {console.log(sityName,'has not a stadium.')};
console.log('');


console.log('Task №2');
let length = 70,
    width = 40;
const square = length * width;

console.log('Rectangle length is', length, 'centimeters');
console.log('Rectangle width is', width, 'centimeters');
console.log('The area of the rectangle is', square, 'square centimeters or', square/10000, 'square meters.');
console.log('');


console.log('Task №3');
let time = 2,
    speedOfFirst = 95,
    speedOfSecond = 114;
distanceOfFirst = speedOfFirst * time;
distanceOfSecond = speedOfSecond * time;
distance = distanceOfFirst + distanceOfSecond;
console.log('Run time is', time, 'hours.');
console.log('Speed of first car is', speedOfFirst, 'kph.');
console.log('Speed of second car is', speedOfSecond, 'kph.');
console.log('Distance traveled by the first car in', distanceOfFirst, 'kilometers.');
console.log('Distance traveled by the second car in', distanceOfSecond, 'kilometers.');
console.log('Distance between cities is', distance, 'kilometers.');
console.log('');


console.log('Task №4');

const randomNumber = Math.floor(Math.random() * 100);
if (randomNumber < 20){
    console.log('randomNumber меньше 20')
} else if (randomNumber > 50){
    console.log('randomNumber больше 50')
} else {
    console.log('randomNumber больше 20 и меньше 50')
};
console.log('');


console.log('Task №5');

switch(true){
    case randomNumber < 20:
        console.log('randomNumber меньше 20');
        break;
    case randomNumber > 50:
        console.log('randomNumber больше 50');
        break;
    default :
        console.log('randomNumber больше 20 и меньше 50');    
}
