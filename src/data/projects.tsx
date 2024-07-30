type projectPhotos = {
    mainPhoto: string;
    functionalPhoto: string;
    mobilePhoto: string;
};

export type project = {
    name: string;
    description: string;
    photos: projectPhotos;
    stack: string[];
    link: string;
};

const projects: project[] = [
    {
        name: 'Верстка лендинга кафе',
        description:
            'Это мой первый проект, целью которого было закрепить полученные знания об html, css и нативном js. Также в нем я  воспользовался препроцессором SCSS и методологией BEM.',
        photos: {
            mainPhoto: 'cafe_main.jpg',
            functionalPhoto: 'cafe_dop.jpg',
            mobilePhoto: 'cafe_mob.jpg',
        },
        stack: ['HTML', 'SASS', 'JS'],
        link: 'https://blank-evgeniy.github.io/cafe_js/',
    },
    {
        name: 'Сайт-тестирование',
        description:
            'Проект, разрабатывая который я укрепил свои знания по React, а также изучил основы tailwind. Сайт представляет собой тестирование.',
        photos: {
            mainPhoto: 'test_main.jpg',
            functionalPhoto: 'test_dop.jpg',
            mobilePhoto: 'test_mob.jpg',
        },
        stack: ['React', 'Tailwind'],
        link: 'https://testing-form-react.vercel.app/',
    },
    {
        name: 'Сайт просмотра персонажей',
        description:
            'В этом проекте я применил еще две изученные мною технологии: ts и redux. На сайте реализованы: вывод постранично списка персонажей, их поиск и фильтрация.',
        photos: {
            mainPhoto: 'rezero_main.jpg',
            functionalPhoto: 'rezero_dop.jpg',
            mobilePhoto: 'rezero_mob.jpg',
        },
        stack: ['React', 'Sass', 'TypeScript', 'Redux Toolkit'],
        link: 'https://rezero-react-redux-ts.vercel.app/',
    },
    {
        name: 'Сайт-каталог лака для ногтей',
        description:
            'Данный проект - это заказ моего знакомого. Мне нужно было реализовать сайт, на котором пользователи смогут просматривать товары и добавлять в корзину, а владелец мог бы сам добавлять товары в базу данных. Здесь представлена демо-версия сайта.',
        photos: {
            mainPhoto: 'nail_main.jpg',
            functionalPhoto: 'nail_dop.jpg',
            mobilePhoto: 'nail_mob.jpg',
        },
        stack: [
            'React',
            'TypeScript',
            'Bootstrap 5',
            'Redux Toolkit',
            'Firebase',
        ],
        link: 'https://nail-polish-store.vercel.app/',
    },
];

export default projects;
