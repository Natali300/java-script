// Задание 1: 
// 1. Создайте массив с названиями трёх любимых фруктов. 
let fruits = ["kiwi", "mango", "orange"];
console.log(fruits);
// 2. Замените второй фрукт на другой. 
fruits[2] = "banana";
// 3. Выведите обновленный массив в консоль.
console.log("обновленный массив - " ,fruits);

// Задание 2:
// 1. Создайте массив из нескольких слов.
let text = ["В","моем","детстве","в","Каме","еще","водилась","стерлядь."];
// 2. Соедините их в строку с пробелами. 
let rezultat = text.join(" ");
// 3. Выведите результат в консоль.
console.log("обновленный массив - " ,rezultat);

// Задание 3: 
// 1. Создайте массив users, содержащий 3 объекта с полями: name, age.
let users = [{
    name:"Nina",
    age:15
},
{
    name:"Nikita",
    age:26 
},
{
    name:"Margo",
    age:33
}];
// 2. Пройдите по массиву и выведите имя каждого пользователя, которому больше 25 лет.
users.forEach(function(user){
if(user.age > 25){
    console.log("пользователя, которым больше 25 лет. ", user);
}
});

// Задание  4: 
// 1. Создайте объект movie с полями: title, director, year.
const movie = {
    title:"Домовёнок Кузя",
    director:"Виктор Лакисов",
    year:2024
};
// 2. Напишите функцию getKeys(obj), которая возвращает массив всех ключей объекта.
 function getKeys(obj){
    return Object.keys(obj);
 }
// 3. Выведите результат в консоль. 
const keysMovie = getKeys(movie);
console.log(movie);

// Задание 5: 
// 1. Создайте объект animal с полями: type, name, age.
const animal = {
    type:"медведь",
    name:"Балу",
    age:10 +"лет"
}; 
// 2. Используйте for...in, чтобы вывести в консоль все значения объекта. 
for(let key in animal){     
console.log(`${key}:${animal[key]}`);
}