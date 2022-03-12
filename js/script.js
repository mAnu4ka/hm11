/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма">>

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS>>

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту >>

5) Добавить нумерацию выведенных фильмов >>*/

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Одержимость",
        "Лига справедливости",
        "Скотт Пилигрим против...",
        "Ла-ла лэнд",
    ]
};
movieDB.movies.sort()


let promo__adv = document.querySelector('.promo__adv')
let img__chek = document.querySelector('img')
let promo__genre = document.querySelector('.promo__genre')
let promo__interactiv = document.querySelector('.promo__interactive-list')
let imgas = promo__adv.children
let sda = promo__adv.children[1].typeof
let count = 0
let vseParray = Array.from(imgas)
let result = vseParray.filter(word => word.length == img__chek.length);
let promo__bg = document.querySelector('.promo__bg');
let ul = document.querySelector('.promo__interactive-list')
let form = document.querySelector('.add')
const changeBgImg = () => {
    promo__bg.style.backgroundImage = `url(./bg.jpg)`;
    promo__genre.innerText = 'драма'
}

const CreateElement = () => {
    ul.innerHTML = " "
    count = 0
    for (const item of movieDB.movies) {
        count++
        let li = document.createElement('li')
        let div = document.createElement('div')
        div.classList.add('delete')
        li.innerText = `${count}. ${item}`
        li.classList.add('promo__interactive-item')
        li.append(div)
        ul.append(li)
        console.log(movieDB.movies);
    }
}
changeBgImg();
CreateElement()