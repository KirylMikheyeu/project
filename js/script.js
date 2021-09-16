" use strict";

const numberofFilms = +prompt('Сколько фильмов вы уже посмотрели?','');

const personalMovieDB = {
    count: numberofFilms,
    muvies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?',''),
      c = prompt('Сколько фильмов вы уже посмотрели?',''),
      d =  prompt('На сколько оцените его?','');

personalMovieDB.muvies[a] = b; 
personalMovieDB.muvies[c] = d;           

console.log(personalMovieDB);      