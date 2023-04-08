# API

Іменований експорт

```javascript
import { serviceApi } from './service-api.js';
````

Застосування:

* Або за допомогою `.then`

```javascript
serviceApi.method().then(fn).catch(err)
```

* Або за допомогою `async/await`

```javascript
async function fn() {
  try {
    const res = await serviceApi.method();
    // ...
  } catch(err) {
    // ...
  }
}
```

## `getListMovies(period, page=1)`

*Повертає дані у вигляді промісу для переліку сторінки `page` на період `period`*

### Параметри:

* `period` - `{string: ("day"|"week")}` Обов'язковий параметр, що вказує за який період потрібні дані.
* `page` - `{number}` Необов'язковий параметр, що вказує на сторінку пагінації на головній сторінці.

### Очикуємий результат

```javascript
{
  page: number // Поточна сторінка пагінації
  totalPages: number // Загальна кількість сторінок
  listMovies: [ // Масив об'єктів
    {
      id, // number - ідентифікатор фільму
      genres, // array[strings] - масив жанрів
      poster, // (string|null) - шлях до картинки
      release, // number - рік релізу
      title, // string - назва
      overview, // string - Опис стрічки
      popularity, // number
      original_title, // string
      vote_average, // number
      vote_count, // number
    }
  ]
}
```

### LocalStorage

Додається поле `genres` з об'єктом жанрів, де

* **ключ** - ідентифікатор жанру
* **значення** - назва жанру

## `getMovie(movieId)`

*Повертає дані про один-єдиний фільм*

### Параметри:

* `movieId` - `{number}` Ідентифікатор фільму

```
Поки не використовуємо
```

## `searchMovie(query)`

*Шукає дані про фільми за даними з пошуку*

### Параметри:

* `query` - `{string}` Рядок запиту

### Очикуємий результат

```javascript
{
  page: number // Поточна сторінка пагінації
  totalPages: number // Загальна кількість сторінок
  listMovies: [ // Масив об'єктів
    {
      id, // number - ідентифікатор фільму
      genres, // array[strings] - масив жанрів
      poster, // string - шлях до картинки
      release, // number - рік релізу
      title, // string - назва
      overview, // string - Опис стрічки
    }
  ]
}
```

## `getTrailer(movieId)`

*Отримання трейлера по ідентифікатору відео*

### Параметри:

* `movieId` - `{number}` Ідентифікатор фільму

### Очикуємий результат:

*Посилання на трейлер на YouTube* - `{string}`