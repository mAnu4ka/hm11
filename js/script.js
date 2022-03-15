let movi = [{
        what: 'cartoons',
        genre: 'Мультфильмы',
        name: 'Тайная жизнь домашних животных',
        photo: '../SLP-01.jpg',
        des: 'Что делают домашние животные пока хозяева пропадают на работе? С тоской смотрят в окно? Смиренно дремлют на коврике у двери? Как бы не так. Они ведут свою тайную жизнь',
        rating: {
            kino: '6.7',
            imdb: '6.93'
        },
        content: [
            'Эверест Abominable',
            'Холодное сердце 2',
            'История игрушек 4',
            'Иван Царевич',
            'Дитя погоды'
        ],

    }, {
        what: 'TVseries',
        genre: 'Сериалы',
        name: 'Ведьмак',
        photo: '../812133.700xp.jpg',
        des: 'Состоялась премьера первого сезона мистического сериала «Ведьмак» стримингового сервиса Netflix, главную роль в котором исполнил Генри Кавилл. Это далеко не первый фэнтези-сериал, завоевавший внимание зрителей.',
        rating: {
            kino: '7.3',
            imdb: '8.8'
        },
        content: [
            'Тетрадь смерти',
            'DOTA: Кровь дракона',
            'FightWorld',
            'Рассвет апокалипсиса',
            'Да здравствует король Джулиан'
        ]
    },
    {
        what: 'Clips',
        genre: 'Клипы',
        name: 'MORGENSHTERN - ДУЛО ',
        photo: '../2021120216511947a3533af6.jpg',
        des: 'Несмотря на то, что первое место в рейтинге YouTube досталось Лагучеву, именно Моргенштерна можно назвать главным героем 2021 года.',
        rating: {
            kino: '10',
            imdb: '10'
        },
        content: [
            'Слава Бебро',
            'MORGENSHTERN - ПОЧЕМУ',
            'lil eazzyy - Onna Come Up',
            'lil eazzyy - Activated',
            'Gazan - ХАБИБИ'
        ],
    },
    {
        what: 'Trailers',
        genre: 'Трейлеры',
        name: 'Прыгучая братва',
        photo: '../Без названия.jpg',
        des: 'Элла – обычная девочка подросток, которая недавно переехала с побережье в небольшой городок вместе с папой. На новом месте Элле непросто освоиться и часто по вечерам девочка чувствует себя особенно одиноко, мечтая поскорее',
        rating: {
            kino: '9.7',
            imdb: '4'
        },
        content: [
            'Исправь меня, если сможешь',
            'Свингеры',
            'Гарри Поттер 20 лет спустя: Возвращение в Хогвартс',
            'Внебрачные связи',
            'На взводе: Битва за Uber'
        ],
    },
    {
        what: 'Films',
        genre: 'Фильмы',
        name: 'МАРСИАНИН',
        photo: '../bg.jpg',
        des: 'ИСТОРИЯ ЧЕЛОВЕКА, ВЫЖИВШЕГО НА ЧУЖОЙ ПЛАНЕТЕ В ОДИНОЧКУ',
        rating: {
            kino: '8.0',
            imdb: '7.7'
        },
        content: [
            "Логан",
            "Одержимость",
            "Лига справедливости",
            "Скотт Пилигрим против...",
            "Ла-ла лэнд",
        ],

    }
]

let promo__content = document.querySelector('.promo__content')
let promo__menu_item = document.querySelectorAll('.promo__menu-item')
let main = document.querySelector('.promo')
let count = 0
let ul
let deflul
const promo = () => {
    let divv = document.createElement('div')
    divv.classList.add('promo__content')
    divv.classList.add('none')
    main.append(divv)
}
promo()

let promo__contentall = document.querySelectorAll('.promo__content')

const createBlock = (a, red) => {
    red.innerHTML = ' '
    red.innerHTML = `<div class="promo__bg">
    <div class="promo__genre">${a.genre}</div>
    <div class="promo__title">${a.name}</div>
    <div class="promo__descr">${a.des}</div>
    <div class="promo__ratings">
    <span>IMDb:${a.rating.imdb} </span>
    <span>Кинопоиск: :${a.rating.kino}</span>
    </div>
    </div>
    <div class="promo__interactive">
    <div>
    <div class="promo__interactive-title">ПРОСМОТРЕННЫЕ ФИЛЬМЫ</div>
    <ul class="promo__interactive-list">
    </ul>
    </div>
    <div>
    <form class="add">
    <div class="promo__interactive-title">ДОБАВИТЬ НОВЫЙ ФИЛЬМ</div>
    <span>Введите название фильма</span>
    <input class="adding__input" type="text" placeholder="Что уже посмотрено...?">
    <span>Сделать его любимым?</span>
    <input type="checkbox">
    <span class="yes">Да!</span>
    <button>Подтвердить</button>
    </form>
    </div>
    </div>`
}



const links = () => {
    let red
    let blue
    let chekl
    for (const item of promo__menu_item) {
        item.onclick = () => {
            chekl = item.getAttribute('class')
            if (chekl == 'promo__menu-item') {
                for (const item of promo__contentall) {
                    let classs = item.getAttribute('class')
                    if (classs == 'promo__content none') red = item
                    else blue = item
                    console.log(blue);
                }
                Remouvrm('li')
                let what = item.getAttribute('what')
                item.classList.add('promo__menu-item_active')
                console.log(red);
                chek(what, red)
                Remouvrm('div', red, blue)
            } else if (chekl == 'promo__menu-item promo__menu-item_active') {
                console.log('незя');
            }
        }
        createBlock(movi[4], promo__contentall[0])
    }
}

links()

const Remouvrm = (a, b, c) => {
    ul = document.querySelectorAll('.promo__interactive-list')
    console.log(ul);
    if (a == 'li')
    for (const item of promo__menu_item) item.classList.remove('promo__menu-item_active')
    else if (a == 'ul')
    for (const item of ul) {
        item.innerHTML = ' '
    }
    else if (a == 'div') {
        b.classList.remove('none')
        c.classList.add('none')
    } else
    for (const item of img) item.remove()
}



const CreateElement = (what, dful) => {
    Remouvrm('ul')
    count = 0
    for (let item of what.content) {
        count++
        let li = document.createElement('li')
        let div = document.createElement('div')
        div.classList.add('delete')
        li.innerText = `${count}.${item}`
        li.classList.add('promo__interactive-item')
        li.append(div)
        dful.append(li)
    }
}

const chek = (whatchek, red) => {
    for (let item of movi) {
        if (item.what == whatchek) {
            createBlock(item, red)
            changeBgImg(item);
            CreateElement(item, ul[0])
        }
    }
}

let promo__genre = document.querySelector('.promo__genre')
let img = document.querySelectorAll('img[alt="some picture"]')
let promo__bg = document.querySelector('.promo__bg');

const changeBgImg = (a) => {
    promo__bg.style.backgroundImage = `url(${a.photo})`;
    promo__genre.innerText = 'драма'
}

const sort = () => {
    for (const item of movi) {
        item.content.sort()
    }
}


sort()
Remouvrm()