//                МАТРИЦЫ (двумерные массивы) 
//Задание 1:
//Создайте двумерный массив 3x3, заполните его числами от 1 до 9.
let mass = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
//Затем выведите сумму всех элементов массива.
sum = 0;
for(let i = 0; i < mass.length; i++){
    
    for(let j = 0; j < mass[i].length; j++){
        sum += mass[i][j];
        
    } 
    console.log(mass[i]);
}
console.log("суммa всех элементов массива  =" , sum);

//Задание 2:
//Создайте двумерный массив 2x4 и замените все чётные числа на 0. Выведите результат.
//(Необходимо создать внешний и внутренний цикл через for, для i и j, 
//после чего задать условие на четность и перезаписать значения этих четных чисел на 0.
//matrix[i][j] = 0). 

// let arr = [
//     [1,2,3,4],
//     [5,6,7,8]
// ];
// for(let i = 0; i < arr.length; i++){
//     for(let j = 0; j < arr[i].length; j++){
//         if(arr[i][j] % 2 === 0){
//             arr[i][j] = 0;
//         }  
//     }
//     console.log(arr[i]);
// }

// //                 СТРОКИ 
// //Задание 3: 
// //Пользователь вводит строку. Напишите скрипт, который подсчитает количество символов 
// //в строке без пробелов. 
// let text = prompt("введите текст");
// let textProbel = text.replace(/ /g,"");
// let cout = textProbel.length;
// console.log(cout);

// //Задание 4:
// //Проверьте, содержит ли строка слово "JavaScript". Если да — выведите сообщение.
// let text2 = prompt("введите текст");
// if(text2.toLowerCase().includes("javascript")){
//     console.log("Строка содержит слово 'JavaScript'");
// } else {
//     console.log("Строка не содержит слово 'JavaScript'.");
// }


// //                 ОБЪЕКТ Math 
// //Задание 5: Пользователь вводит два числа. Найдите максимальное и минимальное 
// //значение с помощью объекта Math.
// let num1 = parseInt(prompt("введите первое число"));
// let num2 = parseInt(prompt("введите второе число"));
// let maxNum = Math.max(num1,num2);
// let minNum = Math.min(num1,num2);
// console.log("максимальное значение = ",maxNum);
// console.log("минимальное значение = ",minNum);

//Задание 6:
//Сгенерируйте случайное число от 50 до 100 включительно и округлите его до ближайшего целого.
let randomNumber = Math.floor(Math.random() * (100 - 50 + 1))+ 50;
console.log("случайное число от 50 до 100 = ",randomNumber);

//                 ОБЪЕКТ Date 
//Задание 7: 
//Выведите сегодняшнюю дату в формате: ДД.ММ.ГГГГ (например: 07.04.2025)
// Получаем текущую дату
const currentDate = new Date();

// Получаем день, месяц и год
let day = currentDate.getDate();
let month = currentDate.getMonth() + 1; // Месяцы идут с 0
let year = currentDate.getFullYear();

// Добавляем ведущие нули, если необходимо
if (day < 10) {
    day = '0' + day;
}
if (month < 10) {
    month = '0' + month;
}
const formattedDate = `${day}.${month}.${year}`;// Формируем строку с датой в формате ДД.ММ.ГГГГ
console.log(formattedDate); // Выводит дату в формате ДД.ММ.ГГГГ