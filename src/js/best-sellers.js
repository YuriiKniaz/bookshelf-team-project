import axios from "axios";

const TOPBOOKS_URL = 'https://books-backend.p.goit.global/books/top-books';
async function fetchTopBooks() {
    try {
        const response = await axios.get(TOPBOOKS_URL);
        console.log(response);
        return response.data.map(({ list_name, books }) => {
            return {
                list_name,
                books
            }
        })
    }
    catch (error) {
        'Sorry, there are no books in this category';
    }
}
const refs = {
    bestsellersEl: document.querySelector('.bestsellers'),
    buttonEl: document.querySelector('.btn'),
}

refs.buttonEl.addEventListener('click', onClick);
async function onClick() {
    const listEl = await fetchTopBooks();
    const elements = createBestsellers(listEl);
    refs.bestsellersEl.innerHTML = elements;
}

function createBestsellers(data) {
    console.log(data);
    return data.map(({ list_name, books }) => {
        // if (document.documentElement.clientWidth < 768) {
        //     return `<ul class="category-list">${list_name}
        // <li class="category-item"><img class="item-image" src="${books[0].book_image}" alt="${books[0].title}"><h2 class="item-title">${books[0].title}</h2><p class="item-author">${books[0].author}</p></li>
        // </ul>
        // <button type="button" class="seemorebtn" data-category="${list_name}">See more</button>`
        // }
        // if (document.documentElement.clientWidth < 1440) {
        //     return `<ul class="category-list">${list_name}
        // <li class="category-item"><img class="item-image" src="${books[0].book_image}" alt="${books[0].title}"><h2 class="item-title">${books[0].title}</h2><p class="item-author">${books[0].author}</p></li>
        // <li class="category-item"><img class="item-image" src="${books[1].book_image}" alt="${books[1].title}"><h2 class="item-title">${books[1].title}</h2><p class="item-author">${books[1].author}</p></li>
        // <li class="category-item"><img class="item-image" src="${books[2].book_image}" alt="${books[2].title}"><h2 class="item-title">${books[2].title}</h2><p class="item-author">${books[2].author}</p></li>
        // </ul>
        // <button type="button" class="seemorebtn" data-category="${list_name}">See more</button>`
        // } else {
        return `<h2 class="category-list-title">${list_name}</h2>
            <ul class="category-list">
        <li class="category-item"><a class="link" href=""><div class="book-card"><div class="overlay-wrapper"><img class="item-image" src="${books[0].book_image}" alt="${books[0].title}" width="180" heigth="256"><p class="overlay">QUICK VIEW</p></div><div class="item-text"><h3 class="item-title">${books[0].title}</h3><p class="item-author">${books[0].author}</p></div></div></a></li>
        <li class="category-item"><a class="link" href=""><div class="book-card"><div class="overlay-wrapper"><img class="item-image" src="${books[1].book_image}" alt="${books[1].title}" width="180" heigth="256"><p class="overlay">QUICK VIEW</p></div><div class="item-text"><h3 class="item-title">${books[1].title}</h3><p class="item-author">${books[1].author}</p></div></div></a></li>
        <li class="category-item"><a class="link" href=""><div class="book-card"><div class="overlay-wrapper"><img class="item-image" src="${books[2].book_image}" alt="${books[2].title}" width="180" heigth="256"><p class="overlay">QUICK VIEW</p></div><div class="item-text"><h3 class="item-title">${books[2].title}</h3><p class="item-author">${books[2].author}</p></div></div></a></li>
        <li class="category-item"><a class="link" href=""><div class="book-card"><div class="overlay-wrapper"><img class="item-image" src="${books[3].book_image}" alt="${books[3].title}" width="180" heigth="256"><p class="overlay">QUICK VIEW</p></div><div class="item-text"><h3 class="item-title">${books[3].title}</h3><p class="item-author">${books[3].author}</p></div></div></a></li>
        <li class="category-item"><a class="link" href=""><div class="book-card"><div class="overlay-wrapper"><img class="item-image" src="${books[4].book_image}" alt="${books[4].title}" width="180" heigth="256"><p class="overlay">QUICK VIEW</p></div><div class="item-text"><h3 class="item-title">${books[4].title}</h3><p class="item-author">${books[4].author}</p></div></div></a></li>
        </ul>
        <button type="button" class="seemorebtn" data-category="${list_name}">See more</button>`
        
    }).join("");
}