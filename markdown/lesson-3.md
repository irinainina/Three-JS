# Урок 3: Базовая сцена в Three.js

## Структура проекта

Минимальная сцена создаётся с помощью двух файлов:
- `index.html`
- `script.js`

Никаких сборщиков и зависимостей — всё вручную, с подключением библиотеки через CDN.

## Пример проекта

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Basic Scene</title>
    <style>body { margin: 0; }</style>
  </head>
  <body>
    <script src="https://unpkg.com/three@0.150.1/build/three.min.js"></script>
    <script src="script.js"></script>
  </body>
</html>
```

```js
// script.js
// Создание сцены
const scene = new THREE.Scene();

// Камера
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

// Рендерер
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Рендеринг сцены
renderer.render(scene, camera);
```

## Вывод

- Это минимально рабочий шаблон Three.js.
- Пока ничего не отображается — объекты добавим позже.
