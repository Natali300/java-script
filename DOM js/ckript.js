function changeText(){
    const p = document.getElementById("dom");//взять элементы по названию id
    p.textContent = "Текст изменён!";
}
console.log(document);//обращаемся ко всему документу
console.log(document.body);//обращаемся к body
console.log(document.head);
console.log(document.title);
document.title = "новый заголовок";
const elements = document.getElementsByClassName("box")//взять элементы по названию класса
console.log(elements[0].textContent);


const first = document.querySelector(".text");//вытягивает 1-й злемент класса
const oll = document.querySelectorAll(".text");//вытягивает все элементы класса
console.log(first);
console.log(oll);

const el = document.getElementById("block");
console.log(el.textContent);
el.textContent = "New text";
el.innerHTML = "<strong> жирный текст</strong>";
console.log(el.innerHTML );

const cs = document.getElementById("styleIt");
cs.style.color = "red";
cs.style.fontSize = "24px";

const newP = document.createElement("p");// позволяет создать новый элемент, передав в параметре имя тега. 
newP.textContent = "я новый параграф";
document.body.appendChild(newP);//вставит в конец новый параграф(то что содержится в newP)

setTimeout(()=>{
    newP.remove(); //удалить элемент
},5000);

const img = document.getElementById("cat");
console.log(img.getAttribute("src"));
img.setAttribute("alt","кот, cat")//(имя, значение)alt-краткое содержание картинки
img.setAttribute("width","200");

