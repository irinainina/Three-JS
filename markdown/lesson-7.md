# Урок 7: Камеры в Three.js

## Основные типы камер

### 1. PerspectiveCamera
- Имитирует человеческое зрение.
- Объекты, находящиеся дальше, выглядят меньше.
- Используется по умолчанию в большинстве 3D-сцен.

```js
const camera = new THREE.PerspectiveCamera(
  75,                          // угол обзора в градусах
  window.innerWidth / window.innerHeight, // аспект (ширина / высота)
  0.1,                         // ближняя граница
  1000                         // дальняя граница
);

camera.position.z = 5;
```

### 2. OrthographicCamera
- Объекты не искажаются с расстоянием.
- Хорошо подходит для 2D, UI или изометрических проекций.

```js
const aspect = window.innerWidth / window.innerHeight;
const camera = new THREE.OrthographicCamera(
  -aspect, aspect, 1, -1, 0.1, 1000
);

camera.position.z = 5;
```

## Вывод
- В 99% случаев используется `PerspectiveCamera`.
- Знание `OrthographicCamera` может пригодиться для специальных задач.
- Камеру можно двигать, вращать, анимировать — это обычный `Object3D`.
