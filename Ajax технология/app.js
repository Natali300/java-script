document.getElementById("loadBtn").addEventListener("click", ()=>{
    fetch("data.json") //отправляем запрос 
    .then(response=>{  //получаем ответ и ловим ошибки и обрабатываем через if
        if(!response.ok){ //если ответ не успешный то
            throw new Error("ошибка сети");
        }
        return response.json();
    })
    .then(data=> {// когда преобразование завершается
        document.getElementById("output").textContent = data.message;
    })
    .catch(error=> {
         console.error("ОШИБКА: ", error);

    });
});