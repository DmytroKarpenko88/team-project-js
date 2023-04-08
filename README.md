# Filmoteka

## URLS

- [Main Instruction](https://docs.google.com/spreadsheets/d/1Nqu0GSddprM_I402OnudsdgPxkUhCtb71Y3zjUvx8E0/edit?usp=sharing)
- [Trello Instruction](https://trello.com/b/eesbzFD4/filmoteka)
- [Parcel Project Template](https://github.com/goitacademy/parcel-project-template)
- [technical specification](https://docs.google.com/spreadsheets/d/1Nqu0GSddprM_I402OnudsdgPxkUhCtb71Y3zjUvx8E0/edit?usp=sharing)
- [Mock-up](https://www.figma.com/file/9ramHXtKj0KodfWpQwWqOF/Filmoteka?node-id=0-1&t=eSeM4vYd6F2ASnGV-0)
- [Booster API](https://developers.themoviedb.org/3/trending/get-trending)
- [Search movies](https://developers.themoviedb.org/3/search/search-movies)
- [Get movies details](https://developers.themoviedb.org/3/movies/get-movie-details)
- [Get movies videos](https://developers.themoviedb.org/3/movies/get-movie-videos)
- [Scrumpoker](https://www.scrumpoker-online.org/en/) Додала селектори ID на
  кнопки "Watch", "Queue", "add Watch", "add Queue" і слухачів.

## API

​ Іменований експорт ​

```javascript
import { serviceApi } from './service-api.js';
```

​

### `getListMovies(period, page=1)`

​ _Повертає дані у вигляді промісу для переліку сторінки `page` на період
`period`_ ​

#### Параметри:

​

- `period` - `{string: ("day"|"week")}` Обов'язковий параметр, що вказує за який
  період потрібні дані.
- `page` - `{number}` Необов'язковий параметр, що вказує на сторінку пагінації
  на головній сторінці. ​

#### Очикуємий результат

​

```javascript
{
  page: number; // Поточна сторінка пагінації
  totalPages: number; // Загальна кількість сторінок
  listMovies: [
    // Масив об'єктів
    {
      id, // number - ідентифікатор фільму
      genres, // array[strings] - масив жанрів
      poster, // string - шлях до картинки
      release, // number - рік релізу
      title, // string - назва
      overview, // string - Опис стрічки
    },
  ];
}
```

​

#### LocalStorage

​ Додається поле `genres` з об'єктом жанрів, де ​

- **ключ** - ідентифікатор жанру
- **значення** - назва жанру ​

### `getMovie(movieId)`

​ _Повертає дані про один-єдиний фільм_ ​

#### Параметри:

​

- `movieId` - `{number}` Ідентифікатор фільму ​

```
Поки не використовуємо
```

​

### `searchMovie(query)`

​ _Шукає дані про фільми за даними з пошуку_ ​

#### Параметри:

​

- `query` - `{string}` Рядок запиту ​

### `getTrailer(movieId)`

​ _Отримання трейлера по ідентифікатору відео_ ​

#### Параметри:

​

- `movieId` - `{number}` Ідентифікатор фільму
