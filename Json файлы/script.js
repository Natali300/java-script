// const user = {
//     name:"Иван",
//     citi:"Ростов на Дону"
// };
// const jsonString = JSON.stringify(user);//объект преобразуем в JSON строчку
// const parsed = JSON.parse(jsonString);
// console.log(jsonString);
// console.log(parsed);

// const book = {
//     title:"гари потер",
//     author:"роулинг",
//     year:1997
// };
// const jsonBook = JSON.stringify(book);
// console.log("json - строка" + jsonBook);
// const parseBook = JSON.parse(jsonBook);
// console.log("объект " ,parseBook);

fetch("https://jsonplaceholder.typicode.com/users")//REST API ОТПРАВИЛИ ЗАПРОС
.then(response => response.json())//преобразовываем в объект
.then(data => {
    data.forEach(user => {
        console.log("имя пользователя: ",user.name);
    });
}) 
.catch(error => {
    console.log("произошла ошибка: ",error);
});                                                                                                     

