# Урок 9: Геометрии в Three.js

## Что такое геометрия
- Геометрия — это форма объекта в 3D-пространстве.
- Она состоит из вершин (точек), рёбер и граней.
- В Three.js геометрии задаются с помощью встроенных классов.

## Часто используемые геометрии
```js
// Куб
const geometry = new THREE.BoxGeometry(1, 1, 1);

// Сфера
const geometry = new THREE.SphereGeometry(1, 32, 32);

// Плоскость
const geometry = new THREE.PlaneGeometry(5, 5);

// Тороид (бублик)
const geometry = new THREE.TorusGeometry(1, 0.4, 16, 60);

// Цилиндр
const geometry = new THREE.CylinderGeometry(1, 1, 2, 32);
```

## Применение
Геометрия используется при создании `Mesh`:
```js
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
```

## Вывод
- Three.js предоставляет множество готовых геометрий.
- Достаточно указать параметры — и можно сразу использовать в сцене.
