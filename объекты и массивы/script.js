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

    // let fruts = ["apple", "banana", {name:"ann"},true,23,[1,2,3],]
    // fruts[2][3]
    // arreeName[0] = 34;
    // arreeName[1] = 34;
    // arreeName[2] = 34;
    // arrayName.length = 5;
    // let dpfgh = fruts.pop();
    // fruts.push();
    // fruts.pop();
    // fruts.shift();
    // fruts.unshift();
    // fruts.split();
    // fruts.join();

    // let fruts = ["apple", "banana", "peach"];
    // let uppercaseFruts = fruts.map(function(frut){
    //     return frut.toUpperCase();
    // });
    // console.log(uppercaseFruts);
    // console.log(fruts);

    // let fruts = ["apple", "banana", "peach"];
    // let longFruits = fruts.filter(function(frut){
    //     return frut.length > 5;
    // });
    // console.log(longFruits);

// let numbers = [10,20,30,40];
// let summ = numbers.reduce(function(accumulator, currentValue){
//     return accumulator + currentValue;
// }, 0);
// console.log(summ);

// let fruts = ["apple", "banana", "peach"];
// fruts.splice(1,1);
// console.log(fruts );

// let fruts = ["apple", "banana", "peach"];
// let someFruts = fruts.slice(0,2);
// console.log(someFruts );
// console.log(fruts );


//двумерный массив


// let matrix = [
//     [7,8,9],
//     [4,5,6],
//     [1,2,3]
// ];
// console.log(matrix[0][0] );
// console.log(matrix[1][2] );


// let matrix = [
//     [7,8,9],
//     [4,5,6],
//     [1,2,3]
//  ];

//  for(let i = 0; i < matrix.length; i++){
//     let row = "";
//     for(let j = 0; j < matrix[i].length; j++){
//         row += matrix[i][j].toString().padStart(2, "  ") + "  ";
//         // console.log(matrix[i][j]);

//     }
//     console.log(row);
//  }



 let matrix = [
    [7,8,9],
    [4,5,6],
    [1,2,3]
 ];
 matrix[1][1] = 99;
 console.log(matrix);



