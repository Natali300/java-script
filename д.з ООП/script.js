// Задание 1:
// Класс Person (Человек) Условие
// : Создайте класс Person, который содержит имя (name) и возраст (age).
// Добавьте метод greet(), который выводит: "Привет, меня зовут ИМЯ и мне ВОЗРАСТ лет". 
class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
        }
       greet(){
       console.log(`Привет, меня зовут ${this.name} и мне ${this.age} года`);
        }        
    }
const persons = [
    new Person("Людмила ",33),
    new Person("Евгений ",44),
    new Person("Светлана ",4)

];
persons.forEach(function(person) {
    person.greet();
});
 
// ✅ Задание 2: 
// Создайте класс Car, у которого есть:
// ● свойства: brand (марка), model (модель), year (год выпуска) 
// ● метод getInfo(), который выводит в консоль строку с информацией об автомобиле 
// Создайте 2 объекта машины и вызовите метод getInfo() для каждого. 
class Car{
    constructor( brand,model,year){
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    getInfo(){
        console.log(`Автомобиль марка: ${this.brand} модель:  ${this.model} год выпуска: ${this.year}`);
    }
}
const cars = [
    new Car ("Daewoo "," Nexia ",2000),
    new Car ("Hyundai "," Gets ",2023),
    new Car ("Kia "," Cerato ",2013)
];
cars.forEach(function(car) {
    car.getInfo();
});

// ✅ Задание 3: 
// Создайте класс Book, у которого есть: 
// ● свойства: title (название), author (автор), year (год издания) 
// ● метод describe(), который выводит в консоль информацию о книге 
class Book{
    constructor(author,title,year){
        this.title = title;
        this.author = author;
        this.year = year;
    }
    describe(){
        console.log(`автор:  ${this.author}, название: ${this.title}, год издания: ${this.year} год`);
    }
}
const books = [
   new Book("Кузьмина С.Ф. ","История русской литературы XX века ", 2009),
   new Book("Иванов А.В.","Пищеблок",2019),
   new Book("Филиппова А.Г.","Российская социология детства",2016)   
];

// ✅ Задание 4: Создайте 2 книги и вызовите метод describe(). 
books.forEach(function(book) {
    book.describe();
});

// Сейчас мы модернизируем пример с книгами так, чтобы в нём появились все 
// три ключевых принципа ООП: 
// ● наследование
class ExtendsBook extends Book{
    _genre;
    constructor(author,title,genre,year){
        super(author,title,year);
        this._genre = genre;
    }
    describe(){
        console.log(`автор:  ${this.author}, название: ${this.title}, жанр: ${this._genre}, год издания: ${this.year} год`);
    }
}
const extendsBooks = [
    new ExtendsBook("Кузьмина С.Ф. ","История русской литературы XX века ","Наука" ,2009),
    new ExtendsBook("Иванов А.В.","Пищеблок","роман",2019),
    new ExtendsBook("Филиппова А.Г.","Российская социология детства","Наука",2016)   
 ];
  
 extendsBooks.forEach(function(extendsBook) {
    extendsBook.describe();
 });
// ● инкапсуляция 
// ● полиморфизм 
// 🧠 Цель: На основе Book создать расширенный пример с дополнительным классом,
// приватным свойством и переопределением метода. 

