# Урок 11: Текстуры в Three.js

## Что такое текстура
- Текстура — это изображение, которое "натягивается" на поверхность геометрии.
- Она добавляет детализацию без увеличения количества полигонов.

## Загрузка и применение текстуры
```js
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('/textures/brick/color.jpg');

const material = new THREE.MeshBasicMaterial({ map: texture });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
```

## Основные типы текстур
- **Color map (diffuse)** — основное изображение.
- **Alpha map** — прозрачность.
- **Normal map** — имитация рельефа.
- **Roughness map** — шероховатость (для PBR материалов).
- **Metalness map** — отражающая способность.
- **Ambient Occlusion (AO)** — затенение в углах и стыках.

## Вывод
- Текстуры делают объекты более реалистичными.
- Загружаются через `TextureLoader`.
- Используются в `Mesh*Material` через параметр `map` и другие свойства.
