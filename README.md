starter-kit
========================

Разработка frontend

## Зависимости
- Node.js 4.5.0+
- Gulp 3.8+

## Установка Gulp
```bash
$ npm install --global gulp-cli
```

## Установка
Перейти в корневую папку проекта
```bash
$ npm i
```

## Запуск
Запускает локальный сервер и следит за обновлениями файлов(watcher)
```bash
$ gulp
```
Сборщик(минификатор)
```bash
$ gulp build
```

## Структура проекта
```bash
assets/**/*.{jade, js(es6), scss} - исходники
```
```bash
assets/blocks/*.{jade, js(es6), scss} - независимые блоки
```
```bash
public/**/*.{html, js(es5), css} - сборка
```
```bash
public/fonts - шрифты
```
```bash
public/node_modules/* - сторонние библиотеки для frontend
```

## Работа с изображениями
```bash
assets/images/* - загружать изображение 2x(для ретины)
```
на выходе получаются
```bash
public/images/2x/* - оптимизированное изображение 2x(для ретины)
public/images/1x/* - оптимизированное изображение 1x
```
Если исходное изображение не для ретины, загружать сразу в public/images/2x/*