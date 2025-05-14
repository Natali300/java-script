const searchInput = document.getElementById("search");
const userList = document.getElementById("user-list");
const loading = document.getElementById("loading");
searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    loading.style.display = 'block';
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users =>{
        loading.style.display = 'none';
        const filtered = users.filter(user=>  //сортируем данные
            user.name.toLowerCase().includes(query)
        );
        //очищаем список
        userList.innerHTML = '';
        filtered.forEach(user => {
            const li = document.createElement('li');
            li.textContent = `${user.name} - ${user.email}`;
            const button = document.createElement('button');
            btn.textContent = "подробнее";
            btn.addEventListener('click', ()=>{
                const details = document.createElement('div');
                details.classList.add('details');
                details.innerHTML = `
                Адрес : ${user.address.city},${user.address.street}
                Телефон : ${user.phone}
                Сайт : <a href= "http://${user.website}" 
                target = "_blank">${user.website}</a>`;
                li.appendChild(details);
                btn.display = true;
            });
            li.appendChild(btn);
            userList.appendChild(li);
        });
        //если ничего не найдено
        if(filtered.length === 0 && query.trim() !==''){
            userList.innerHTML = '<li>ничего не найдено</li>';
        }
    })
    .catch(error =>{
        loading.style.display = 'none';
        console.error('ошибка загрузки : ', error);
        userList.innerHTML = '<li>произошла ошибка при загрузке </li>';
    });
    

})