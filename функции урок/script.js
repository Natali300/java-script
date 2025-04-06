// function greet(name){
//     console.log("Hello, " + name + "!");
// }
// greet("Jhon");
// greet("Sara");


// function sum(a,b){
//     return a+ b;
// }
// let result = sum(5,10);
// console.log(result);

// greet();//обычную ф-цию можно вызвать до объявления

// function greet (name = "гость"){
//     console.log("Привет, "+ name + " !");
// }
// greet();
// greet("Jhon");

// // анонимную ф-цию нельзя вызвать до объявления ,ф=ция не имеет имени вызывается через переменную
// let myltiply = function(a,b){
//     return a * b;
// }
// console.log(myltiply(3,4));

document.getElementById("myButton").addEventListener("click", //не работает без кнопки
    function(){
        console.log("кнопка нажата");
    });


// стрелочные функции
// const square = (x) => x*x;
// console.log(square(5));
// const add = (a,b) => a+b;
// console.log(add(3,7));

// const greet = (name) => {
//     console.log("Привет , " + name + "!");
// };
// greet("Jhon");

//факториал числа
// function factorial(n){
//     if(n === 0 || n === 1) return 1;
//     let result = 1;
//     for(let i = 2; i <= n; i++){
//         result *= i;
//     }
//     return result;
// }
// console.log(factorial(5));
// console.log(factorial(6));
// console.log(factorial(7));

// function Palindrom(str){
//     str = str.toLowerCase().replace(/\s/g,"");
//     let reversed = str.split("").reverse().join("");
//     return str === reversed;
// }
// console.log(Palindrom("радар"));