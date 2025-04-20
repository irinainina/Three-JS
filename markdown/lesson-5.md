# Урок 5: Трансформация объектов в Three.js

## Три основные трансформации
Каждый объект в Three.js (например, `Mesh`) имеет базовые свойства:

- `position` — позиция объекта в 3D-пространстве.
- `rotation` — вращение объекта (в радианах по осям X, Y, Z).
- `scale` — масштаб объекта.

Эти свойства доступны напрямую и могут изменяться вручную или анимироваться.

## Пример
```js
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Позиция
cube.position.x = 1;
cube.position.y = 2;

// Вращение (в радианах)
cube.rotation.y = Math.PI / 4;

// Масштаб
cube.scale.set(1.5, 1, 1);
```

## Вывод
- Трансформации — ключ к работе со сценой и анимацией.
- Все объекты типа `Object3D` (включая `Mesh`, `Camera`, `Group`) поддерживают `position`, `rotation` и `scale`.
- Эти свойства можно анимировать, изменять вручную или с помощью библиотек.