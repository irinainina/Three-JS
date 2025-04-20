# Урок 14: Освещение в Three.js

## Зачем нужен свет
- Большинство материалов (например, `MeshStandardMaterial`) реагируют на освещение.
- Без источников света сцена будет тёмной.

## Основные типы света

```js
// Мягкое равномерное освещение (без теней)
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

// Точечный источник света (как лампочка)
const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(2, 3, 4);
scene.add(pointLight);

// Направленный свет (как солнце)
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

// Прожектор
const spotLight = new THREE.SpotLight(0xffffff);
spotLight.position.set(0, 5, 5);
scene.add(spotLight);
```

## Настройки и советы
- Интенсивность (`intensity`) по умолчанию = `1`. Можно уменьшать/увеличивать.
- Добавляйте `AmbientLight` для общей засветки и `PointLight` или `DirectionalLight` для объёма.

## Вывод
- Для реалистичного вида нужен хотя бы один свет.
- `AmbientLight + PointLight` — хорошее базовое сочетание.
- Светы можно анимировать, перемещать, делать цветными.