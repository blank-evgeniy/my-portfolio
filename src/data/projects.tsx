type projectPhotos = {
    mainPhoto: string,
    functionalPhoto: string,
    mobilePhoto: string,
}

export type project = {
    name: string,
    description: string,
    photos: projectPhotos,
    stack: string[],
    link: string,
}

const projects: project[] = [
    {
        name: 'Сайт кафе',
        description: 'Это мой первый проект, целью которого было закрепить полученные знания об html, css и нативном js. Также в нем я  воспользовался препроцессором SCSS и и методологией BEM.',
        photos: {
            mainPhoto: 'cafe_main.jpg',
            functionalPhoto: '.jpg',
            mobilePhoto: '.jpg',
        },
        stack: ['html', 'scss', 'js'],
        link: 'https://blank-evgeniy.github.io/cafe_js/',
    },
    {
        name: 'Тестирование по React',
        description: 'Проект, разрабатывая который я укрепил свои знания по React, а также изучил основы tailwind. Сайт представляет собой тестирование.',
        photos: {
            mainPhoto: 'test_main.jpg',
            functionalPhoto: '.jpg',
            mobilePhoto: '.jpg',
        },
        stack: ['react', 'tailwind'],
        link: 'https://testing-form-react.vercel.app/',
    },
    {
        name: 'RE: Zero - characters',
        description: 'В этом проекте я применил еще две изученные мною технологии: ts и redux. На сайте реализованы: вывод постранично списка персонажей, их поиск и фильтрация.',
        photos: {
            mainPhoto: 'rezero_main.jpg',
            functionalPhoto: '.jpg',
            mobilePhoto: '.jpg',
        },
        stack: ['react', 'scss', 'redux-toolkit'],
        link: 'https://rezero-react-redux-ts.vercel.app/',
    },
]

export default projects;