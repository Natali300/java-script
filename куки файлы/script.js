document.cookie = "username=Admin";
console.log(document.cookie);
//определенная настройка 1 token код для куки ссесии . для того что идентифицировать куки
document.cookie = "token=1234; expires = Tue, 01 May 2025 12:00:00 UTC ";//2 expires назначаем дату можно прошлую для того чтоб кука была удалена или задаем определенную дату когда нужно удалить
document.cookie = "username=; expires=Mon, 01 Jan 1970 00:00:00 UTC"//назначаем дату  прошлую для того чтоб кука была удалена


