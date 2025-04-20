# Урок 13: 3D-текст в Three.js

## Как создать 3D-текст
- Используется класс `TextGeometry` из модуля `three/examples/jsm/geometries/TextGeometry.js`.
- Для генерации текста требуется шрифт в формате `.typeface.json`.

## Шаги:
1. Загрузить `FontLoader`.
2. Загрузить `.typeface.json` шрифт.
3. Создать `TextGeometry`.
4. Создать `Mesh` и добавить в сцену.

## Пример
```js
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';

const loader = new FontLoader();
loader.load('/fonts/helvetiker_regular.typeface.json', function (font) {
  const geometry = new TextGeometry('Hello 3D!', {
    font: font,
    size: 1,
    height: 0.2,
    curveSegments: 12,
    bevelEnabled: true,
    bevelThickness: 0.03,
    bevelSize: 0.02,
    bevelSegments: 5
  });

  const material = new THREE.MeshStandardMaterial({ color: 0xff8800 });
  const textMesh = new THREE.Mesh(geometry, material);
  scene.add(textMesh);
});
```

## Где взять шрифт
- В репозитории Three.js: `three/examples/fonts/`
- Или конвертировать свой через онлайн-конвертер в формат `.typeface.json`

## Вывод
- `TextGeometry` позволяет добавлять 3D-текст в сцену.
- Необходим отдельный шрифт.
- Поддерживает фаски (bevel), сегменты кривых, толщину и т.д.