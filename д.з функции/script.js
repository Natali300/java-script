
//  1. Написать функцию, которая принимает количество секунд, переводит их в часы, минуты
//  и секунды и возвращает в виде строки «чч:мм:сс».
function translationSeconds(second){
let hour = Math.floor(second /3600);//находим часы
let minutes = Math.floor((second % 3600)/60);//находим минуты
let sec = second % 60;
 let timeString = String(hour).padStart(2 , '0') + " : " + String(minutes).padStart(2 , '0') + " : " + 
 String(sec).padStart(2 , '0');
 return timeString;
} 
let seconds = parseInt(prompt("введите секунды"));
if(seconds < 0 || isNaN(seconds)){
alert("введите число");
}else
    alert(translationSeconds(seconds));

//  2. Написать функцию, которая считает разницу между датами. Функция принимает 6 параметров, которые описывают 
//  2 даты, и возвращает результат в виде строки «чч:мм:сс». При выполнении задания используйте функции из предыдущих 
//  2-х заданий: сначала обе даты переведите в секунды, узнайте разницу в секундах, 
//  а потом разницу переведите обратно в «чч:мм:сс». 
function isLeapYear(year){                       // Функция для проверки, является ли год високосным
if ((year % 4 === 0 && year % 100 != 0) || (year % 400 == 0))
    return true;
else
    return false;
}

function coldWeather(month,year){      // Функция для получения количества дней в месяце
let daysOfMonth= [31,28,31,30,31,30,31,31,30,31,30,31];
if(isLeapYear(year)){
 daysOfMonth[1]=29;   // Февраль в високосном году
}
return daysOfMonth[month - 1];  // Месяцы начинаются с 1, поэтому -1
 } 

function dateToSeconds(day, month, year) { // Функция для перевода даты в секунды
 let seconds = 0;      
for (let i = 1900; i < year; i++) {    // Считаем количество секунд в полных годах
     seconds += isLeapYear(i) ? 366 * 24 * 3600 : 365 * 24 * 3600;
    }
for (let j = 1; j < month; j++) {      // Считаем количество секунд в полных месяцах
    seconds += coldWeather(j, year) * 24 * 3600;
    }
     seconds += (day - 1) * 24 * 3600; // Считаем количество секунд в текущем месяце  Уменьшаем на 1, чтобы не учитывать текущий день
     return seconds;
    }
function raznoctDat(day, month, year, day2, month2, year2){
    let seconds1 = dateToSeconds(day, month, year);
    let seconds2 = dateToSeconds(day2, month2, year2);
    let differenceInSeconds = Math.abs(seconds2 - seconds1); // Вычисляем разницу в секундах
    return translationSeconds(differenceInSeconds);
}
let day1 = parseInt( prompt("введите день первой даты"));
let month1 = parseInt( prompt("введите месяц первой даты"));
let year1 = parseInt(prompt("введите год первой даты"));

let day2 = parseInt(prompt("введите день второй даты"));
let month2 =  parseInt(prompt("введите месяц второй даты"));
let year2 =  parseInt(prompt("введите год второй даты"));
alert( raznoctDat(day1, month1, year1, day2, month2, year2));

//  3. Написать функцию, которая проверяет, является ли переданное ей число совершенным.
//  Совершенное число – это число,равное сумме всех своих собственных делителей.
function perfectNumber(num){
    let summators = 0;
    for(let i = 1;i < num;i++){
      if(num % i === 0){
        summators += i;
      }
    }
    return summators === num;
}

let chislo = parseInt(prompt("введите число"));
if(perfectNumber(chislo)){
    alert("число является совершенным");
}else{
    alert("число не является совершенным");
}

//  4. Написать функцию, которая принимает минимальное и максимальное значения для диапазона, и выводит только те 
//   числа из диапазона, которые являются совершенными. Используйте написанную ране 
function perfectNumberOfDiapazon(minNum, maxNum){
    let masPerfectNumber = [];
    for(let i = minNum; i <= maxNum; i++){
        if(perfectNumber(i)){
            masPerfectNumber.push(i);
        }
        }
        return masPerfectNumber;
    }
    let minNums = parseInt(prompt("введите минимальное значения для диапазона"));
    let maxNums = parseInt(prompt("введите максимальное значения для диапазона"));

    let diapazon = alert(perfectNumberOfDiapazon(minNums, maxNums));
