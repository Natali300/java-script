// let users = [{
// name: "Jhon",
// age : 30,
// isStudent : true
// },
// {
// name : "Ann",
// age : 35,
// isStudent : false
// }];
// console.log(users[0].name);
// // console.log(users);
// // console.log(users.name);
// // 2-ой способ записи объекта -- нежелательно использовать
// let user = new Object();
// user.name = "Jhon";
// user.age = 30;
// user.isStudent = true;
// console.log(user.name);

// console.log(user["isStudent"]); // 2-ой способ получить свойства объекта


// let user = {
//     name: "Jhon",
//     age : 30,
//     isStudent : true
//     };
//     user.sity = "Rostov";//добавили в объект свойство
//     console.log(user.sity);
//     console.log(user);
//     user.age = 25; //перезаписываем свойство в объекте 
//     console.log(user);
//     delete user.isStudent;//удаление свойства из объекта
//     console.log(user);
//     console.log("name" in user);//проверяем есть ли такое свойство
//     for(let key in user){       //перебераем все ключи объекта
//          console.log(`${key}:${user[key]}`);
//     }
    //методы объекта

    // let person = {
    //     name: "Jhon",
    //     greet: function(){
    //         console.log("Hello, " + this.name);
    //     }
    // }
    // person.greet();


    // let persons = [
    //     {name : "Ann"},
    //     {name : "Ann"},
    //     {name : "Ann"},
    //     {name : "Ann"},
    //     {name : "Ann"},
    // ];
    // function greets(persons){
    //     console.log("Heloo, "+ persons.name);
    // }
    // persons.forEach(greets);


    // let user = {
    //     name: "nata",
    //     age: 35,
    //     country: "Россия",
    //     job: "програмист"
    // };
    // console.log("исходный объект : ", user);
    // let propToChange = prompt("какое свойство хотите удалить ? (name,age)");
    // let userCopy = {...user};// создали копию объекта
    // if(user.hasOwnProperty(propToChange)){
    //     delete userCopy[propToChange];
    //     console.log("объект после удаления: " , userCopy);
    // }else{
    //     console.log("такого свойства нет");
    // }


    // let product = {
    //     name:"Notebook",
    //     price: 100000,
    //     bpand: "Lenovo",
    //     year: 2025
    // };
    // console.log("Исходный: ",product );
    // let newPrice = Number(prompt("введите новую цену: "));

    // if(!isNaN(newPrice) && newPrice > 0){
    //     let productCopy = {...product};
    //     productCopy.price = newPrice;
    //     console.log("товар после обновления цены: ", productCopy);
    // }else{
    //     console.log("введите правильную цену");
    // }

    let fruts = ["apple", "banana", {name:"ann"},true,23,[1,2,3],]
    fruts[2][3]
    arreeName[0] = 34;
    arreeName[1] = 34;
    arreeName[2] = 34;
    arrayName.length = 5;
    let dpfgh = fruts.pop();
    fruts.push();
    fruts.pop();
    fruts.shift();
    fruts.unshift();
    fruts.split();
    fruts.join();