let name = "Jhon";
let str = `Привет , ${name}`;
console.log(str);
let str1 = " \"Yes \" ";
console.log(str1);
console.log(name.length);
let word = "ПрИвЕт";
console.log(word.toLowerCase());
console.log(word.toUpperCase());

let text = "я люблю Java Script";
console.log(text.includes("Java"));
console.log(text.indexOf("люблю"));


let phrase = "я ненавижу понедельники";
let newPhrase = phrase.replace("ненавижу", "обожаю");
console.log(newPhrase);


let short = phrase.slice(10);
console.log(short);



let input = " я.учу.javaScript";
let parts = input.split(".");  //["я","учу","javaScript"]
let upperParts = parts.map(part => part.toUpperCase());
let result = upperParts.join(" ");
console.log(result);

