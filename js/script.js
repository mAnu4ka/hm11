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
//тут сортировка верхнего масива
movieDB.movies.sort()

// нахождение нужного элемента(скипаем этот момент)
let promo__adv = document.querySelector('.promo__adv')
let img__chek = document.querySelector('img')
let promo__genre = document.querySelector('.promo__genre')
let promo__interactiv = document.querySelector('.promo__interactive-list')
let imgas = promo__adv.children
let sda = promo__adv.children[1].typeof
let count = 0
let vseParray = Array.from(imgas)
//вот все img 
let img = document.querySelectorAll('img[alt="some picture"]')
let result = vseParray.filter(word => word.length == img__chek.length);
let promo__bg = document.querySelector('.promo__bg');
let ul = document.querySelector('.promo__interactive-list')
let form = document.querySelector('.add')
//с инета взял но понял!!
const changeBgImg = () => {
    promo__bg.style.backgroundImage = `url(./bg.jpg)`;
    promo__genre.innerText = 'драма'
}
// сделал п оп ростому удаление рекламы
const Remouvrm = () =>{
    for (const item of img) {
        item.remove()
    }
}
// самое простое создание элемента
const CreateElement = () => {
    //очистка элементов чтобы не было багов
    ul.innerHTML = " "
    //заново преопределяю каунт чтобы не было багов
    count = 0
    for (const item of movieDB.movies) {
        //прибовление
        count++
        let li = document.createElement('li')
        let div = document.createElement('div')
        div.classList.add('delete')
        li.innerText = `${count}. ${item}`
        li.classList.add('promo__interactive-item')
        li.append(div)
        ul.append(li)
    }
}
// ну вот всё поставте звёздочку
changeBgImg();
CreateElement()
Remouvrm()
