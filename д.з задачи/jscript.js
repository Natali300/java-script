//Создайте переменные a = 10, b = 3. Выведите в консоль:
//  1. Сумму a и b.
//  2. Разность a и b. 
// 3. Результат деления a на b. 
// 4. Остаток от деления a на b.
//  5. Возведение a в степень b. 
let a = 10;
let b = 3;
let summ = a + b;
console.log(summ);

let difference = a - b;
console.log(difference);

let division = a / b;
console.log(division);

let remainder = a % b;
console.log(remainder);

let otvet = a ** b;
console.log(otvet);

// 1. Напишите выражение, которое проверяет, солнечно и тепло ли на улице. 
// 2. Напишите выражение, которое проверяет, солнечно или тепло ли на улице.
// 3. Напишите выражение, которое проверяет, не солнечно ли на улице. 
let isSunny = true;
let isWarm = false; 
let isSunnyisWarm = isSunny && isWarm;
console.log(isSunnyisWarm);

isSunnyisWarm = isSunny || isWarm;
console.log(isSunnyisWarm);

isSunnyisWarm = !isSunny;
console.log(isSunnyisWarm);

// Задание 3: Унарные операторы 
// Создайте переменную count = 5.
//  1.Увеличить count на 1 разными способами (используй ++ и +=). 
//  2. Уменьшить count на 2 разными способами (используй -- и -=). 
//  3. Выведите результат после каждого изменения. 
//  💡 Подсказка: Используйте  ++, --, +=, -=. 

let count = 5;
count++;
console.log(count);

count = 5;
count += 1;
console.log(count);

count = 5;
count--;
console.log(count);

count = 5;
count -= 1;
console.log(count);

count = 5;
count--;
count--;
console.log(count);

count = 5;
count -= 2;
console.log(count);
  
// Бонусное задание:
//  Напишите программу, которая спрашивает у пользователя число (через prompt) и проверяет: 
// ● Чётное оно или нет (используйте %).
// ● Больше 100 или нет.
// ● Выведите результат в консоль.

let chislo = parseInt(prompt("введите число"));
if(chislo % 2 == 0) {
    console.log("ваше число четное ");
}
else{
    console.log("ваше число не четное ");
}
if(chislo > 100){
    console.log("ваше число больше 100");
}
else{
    console.log("ваше число меньше 100");
}





