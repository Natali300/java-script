// const btn = document.querySelector("button");// 2способ обработки события
// btn.onclick = ()=> alert("Привет, привет");



// btn.addEventListener('click',() => alert("Приветствую")); //3 способ обработки события


// btn.addEventListener('click',() => console.log("Первый обработчик"));
// btn.addEventListener('click',() => console.log("Второй обработчик")); // 

document.querySelector("button").addEventListener('click', function(event){ // объект эвент
console.log(event);
} );