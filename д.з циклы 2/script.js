//  Использовать if else: 
// 1. Запросить у пользователя время (часы, минуты, секунды) и проверить корректность введенных данных.

let time = parseInt(prompt("введите часы"));
let minutes= parseInt(prompt("введите минуты"));
let seconds = parseInt(prompt("введите секунды"));
if(time >= 0 && time <= 24){
if (minutes >= 0 && minutes <= 59){
    
if(seconds >= 0 && seconds <= 59){
  alert("введенное время корректно  " + time +" : " + minutes + " : " + seconds );
}else{
    alert("секунды введены не корректно");
}

}else{
    alert("минуты введены не корректно");
}
}else{
    alert("часы введены не корректно");
}

// 2. Запросить координаты точки (x, y) и определить номер четверти, в которую попала эта точка. 
//  Необходимо учесть случаи попадания точки на оси X или Y или в начало координат. 
//  Задача:
//  Пользователь вводит координаты (x, y). Нужно определить:
// ● В 1 четверти (x > 0, y > 0) 
// ● Во 2 четверти (x < 0, y > 0) 
// ● В 3 четверти (x < 0, y < 0) 
// ● В 4 четверти (x > 0, y < 0) 
// ● Если точка на оси X или Y, указать это ● Если точка в (0,0), написать "Точка в начале координат".
let x = parseInt(prompt("введите координатy x"));
let y = parseInt(prompt("введите координатy y"));
if(x > 0 && y === 0 || x < 0 && y === 0){
    alert("точка находится на оси X");
} 
else if(y > 0 && x === 0 || y < 0 && x === 0){
    alert("точка находится на оси Y");
}
else if(x === 0 || y === 0){
    alert("Точка в начале координат");
}
else if(x > 0 && y > 0){
    alert("точка находится в 1 четверти");
}
else if(x < 0 && y > 0){
    alert("точка находится во 2 четверти");
}
else if(x < 0 && y < 0){
    alert("точка находится в 3 четверти");
}
else if(x > 0 && y < 0){
    alert("точка находится в 4 четверти");
}

//  Задания для практики do...while 
// 1.Игра "Угадай число" Программа загадывает случайное число от 1 до 100. 
//   Пользователь должен угадать его, вводя числа. Если число больше загаданного — программа сообщает "Меньше!",
//   если меньше — "Больше!". После угадывания программа выводит количество попыток.
let kolAttempt;
do{
    alert("угадай число от 1 до 100");
    let num = parseInt(prompt("введите число"));
    let genderNum =parseInt (Math.random()* 100)+1;
    alert(genderNum);
    kolAttempt++;
    if(num < genderNum){
        alert("Ваше число слишком маленькое")
    }
    else if(num > genderNum){
        alert("Ваше число слишком большое")
    }
    
}while(num !== genderNum)
    alert("ВЕЛИКОЛЕПНО вы угадали");
    alert("количество попыток  =  " + kolAttempt);

// 2. Копилка мечты Пользователь хочет накопить определённую сумму на мечту.
//   В начале он вводит сумму, которую хочет накопить. Затем каждый месяц он вносит какую-то сумму.
//   Программа спрашивает: "Хотите внести ещё деньги?" Если "да" — продолжает, если "нет" — завершает
//   и сообщает, удалось ли накопить нужную сумму. 
//3. 🎟 Покупка билетов Пользователь хочет купить билеты в кино, но их ограниченное количество. 
//   Программа спрашивает, сколько билетов он хочет купить, 
//   и уменьшает количество доступных билетов. Если билетов не хватает — сообщает,
//  сколько осталось, и предлагает выбрать меньшее количество. Завершается, когда билеты кончились. 
// Задания для практики for 
// 1.  🗓 Календарь месяца Пользователь вводит число от 1 до 12 (номер месяца). 
// Программа выводит все дни этого месяца в формате: 1 января 2 января ... 31 января 
// Для февраля учитывать високосный год (если введён год). 
// 2. Таблица умножения в красивом формате Вывести таблицу умножения от 1 до 10 в таком виде:
//  1 x 1 = 1    2 x 1 = 2    ...   10 x 1 = 10 
//  1 x 2 = 2    2 x 2 = 4    ...   10 x 2 = 20
//  ... 
// 1 x 10 = 10  2 x 10 = 20  ...    10 x 10 = 100
//  Форматирование можно сделать с \t или padEnd() для ровных столбцов. 
// 3.Генерация случайных паролей Пользователь вводит, сколько символов должно быть в пароле.
// Программа генерирует случайный пароль из цифр, букв (верхнего и нижнего регистра) и спецсимволов. 