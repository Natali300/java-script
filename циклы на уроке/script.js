// let age = parseInt(prompt("введите возраст"));
// if(age < 18){
//     if(age < 10){
//         console.log("максимальная скидка ");
//     } else{
//         console.log("вам предоставляется стандартная скидка ");
//     } 
//     } else{
//         console.log("скидка не предоставляется ");
//     }



    //тернарный оператор - это знак ?
    // условие ? выражение 1(true ): выражение 2 (false)- запись с тернарным оператором
    // x = 5;
    // console.log(parity = (x % 2 == 0) ? " четное ": "нечетное");

    //switch - выбор одного из нескольких вариантов выполнения кода

// let day = prompt("введите число от 1 до 7");
//     switch(day){
//         case "1":
//             alert("понедельник");
//             break;
//         case"2" : 
//             alert("вторник");
//             break; 
//         case"3" : 
//             alert("среда");
//             break; 
//         case"4" : 
//             alert("четверг");
//             break; 
//         case"5" : 
//             alert("пятница");
//             break; 
//         case"6" : 
//              alert("суббота");
//             break; 
//         case"7" : 
//             alert("воскресенье");
//             break; 
//         default:
//             alert("ошибка");
//     }


    // let hour = prompt("введите от 0 до 23");
    // switch(true){
    //     case hour >= 6 && hour < 12:
    //         alert("сейчас утро");
    //         break;
    //     case hour >= 12 && hour < 18 : 
    //         alert("сейчас день");
    //         break; 
    //     case hour >= 18 && hour < 22 : 
    //         alert("вечер");
    //         break; 
    //     case hour >= 22 && hour <= 23 || (hour >= 0 && hour <6) : 
    //         alert("ночь");
    //         break; 
    //     default:
    //         alert("ошибка");
    // }

    // x = +prompt("введите число от 1 до 6");
    // switch(x){
    //     case 2: case 4: case 6:
    //         alert("четное");
    //         break
    //     case 1: case 3: case 5:
    //         alert("нечетное");
    //         break
    //     default:
    //          alert("ошибка");
    // }

    // let fruit = prompt("введите фрукт").toLowerCase();//приводит к нижнему регистру ;
    // if(fruit === "яблоко"){
    //     alert("цена 150р");
    // }else if(fruit === "банан"){
    //     alert("цена 80р");
    // }else if(fruit === "вишня"){
    //     alert("цена 200р");
    // }else if(fruit === "хурма"){
    //     alert("цена 250р");
    // }
    // else{
    //     alert("нет такого фрукта");
    // }


    // let fruit = prompt("введите фрукт").toLowerCase();//приводит к нижнему регистру ;
    // switch(fruit){
    //     case "яблоко":
    //         alert("цена 150р");
    //         break;
    //     case "банан":
    //         alert("цена 80р");
    //         break;
    //     case "вишня":
    //         alert("цена 200р");
    //         break;
    //     case "хурма":
    //         alert("цена 250р");
    //         break;
    //     default:
    //         alert("нет такого фрукта");
    // }

    //ЦИКЛЫ

    // let i = 1;
    // while(i <= 100){
    //     console.log(i);
    //     i++;
    // }

    // let vserNamber = prompt("введите число 10.чтобы выйти из цикла");
    // while(vserNamber != 10) {
    //     vserNamber = prompt("попробуй еще раз. введите число 10");
    //     // vserNamber++;
    // }
    // alert("вы ввели 10. цикл завершен");


    // while(true){
    //     let answer = prompt("введите стоп для выхода");
    //     if(answer === "стоп"){
    //         break;
    //     }
    // }
    // alert(" цикл завершен");

    // let sum = 0;
    // let number;
    // while(true){
    //     number = parseFloat(prompt("введите число (0 - выход):"));
    //     if( number === 0) {
    //         break;
    //     }
    //     sum += number;

    // }
    // alert("Сумма всех чисел :  " + sum);

    // let deposit = Number(prompt("введите сумму вклада "));
    // while(deposit <= 0 || isNaN((deposit))){
    //     deposit = Number(prompt("Ошибка! Введите корректную сумму"));
    // }
    // let interes = Number(prompt("введите процентную ставку "));
    // while(interes <= 0 || isNaN(interes)){
    //     interes = Number(prompt("Ошибка! Введите корректную ставку "));
    // }
    // let years = 0;
    // while(deposit <= 1000000){
    //     deposit += deposit * (interes/ 100);
    //     let additionalDeposit = Number(prompt(`На вашем счету ${deposit.toFixed} руб. Хотите внести еще ? Если нет введите 0`));
    //     while(additionalDeposit < 0 || isNaN(additionalDeposit)){
    //         additionalDeposit = Number(prompt("Ошибка! Введите положительное число или 0 "))
    //     }
    //     deposit += additionalDeposit;
    //     years++;
    // }
    // alert(`вы станете миллионером через ${years} лет/год. Ваш итоговый вклад ${deposit.toFixed(2)} руб`);

    // do{
    //     //код тело цикла
    // }while(условие);

    // let count = 1;
    // do {
    //     console.log(" message № " + count);
    //     count++;
    


    // let number;
    // do{
    //     number = prompt("введите число больше 10");
    // }while(number <= 10);
    // alert("вы ввели " + number);


    // let correctPin = "142536";
    // let userPin;
    // do{
    //     userPin = prompt("введите пароль ");

    // }while(userPin !== correctPin);




    // let num = prompt("введите число");
    // let i = 0;
    // while(i < num){
    //   console.log("#");
    //   i++;
    // }


    // for(let i = 1; i <= 3 ; i++){
    //     console.log("message "+ i);
    // }


    // let fruit = ["apple" ,"banana","peach"];
    // for(let i = 0; i < fruit.length; i++){
    //     alert(fruit[i]);
    // }

    // let numbers = [3,5,7,9,43];
    // let target = 5;
    // let found = false;
    // for(let i = 0; i < numbers.length;i++){
    //     if(numbers[i] === target){
    //         console.log("число найдено на позиции " ,i);
    //         found = true;
    //         break;
    //     }
    // }
    // if(!found){
    //     console.log("не найдено");
    // }



    for(let i = 1; i <= 3; i++){
        for(let j = 1; j <=3; j++){
            console.log(i + " * " + j + " = " + (i*j));
        }
    }