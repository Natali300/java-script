let currentData = new Date();
console.log(currentData);

const option ={
    weekday:'long',
    year:'numeric',
    month:'long',
    day:'numeric',

    hour:'2-digit',
    timeZone:'Europe/Moscow',
    minute:'2-digit',
    second:'2-digit',
    hour12:false
};
const moscowTime = new Date().toLocaleString('ru-RU', option);
console.log(moscowTime);
