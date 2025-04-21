// console.log(window.innerWidth);//обратились напрямую к window объекта(вызвали ширину)
// alert("Hi"); //сокращенное от window.alert("Hi");

// alert("Привет");
// const name = prompt("как вас зовут");
// confirm("вы уверены");

console.log(location.href);//полный адрес страницы

console.log(navigator.userAgent);//информация о браузере
console.log(navigator.language);//информация о языке браузера
console.log(navigator.onLine);//узнаем находится ли устройство в сети
console.log(navigator.mediaDevices);//


console.log(screen.width,screen.height);//узнаем высоту и ширину экрана
console.log(screen.availHeight,screen.availWidth);
console.log(screen.colorDepth);//узнаем глубину цвета


history.back();
history.forward();
history.go(-1);
history.go(2);
let state = history.state; 


