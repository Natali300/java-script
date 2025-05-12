const container = document.getElementById("book-list");
fetch('./books.json')
.then(response => response.json())
.then(data => {
    data.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');
        bookDiv.innerHTML = `
        <h3>${book.title}</h3>
        <p><strong>автор</strong>${book.author}</p>
        <p><strong>год</strong>${book.year}</p>
        `;
        container.appendChild(bookDiv);
    });
})
.catch(error => {
    console.error("ошибка загрузки json ",error);
});
