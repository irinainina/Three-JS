# Урок 35: Импорт и оптимизация сцены из Blender

## Импорт модели
```js
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';

const gltfLoader = new GLTFLoader();
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath('/draco/');
gltfLoader.setDRACOLoader(dracoLoader);

gltfLoader.load('/models/scene.glb', (gltf) => {
  scene.add(gltf.scene);
});
```

## Проверка после импорта
- Убедись, что сцена отцентрована
- Удали временные объекты (например, кубы-заглушки)
- Проверь масштаб и ориентацию модели

## Оптимизация
- Использовать `castShadow = false`, если объект не должен отбрасывать тени
- Проверить, отключены ли `frustumCulled = false` только при необходимости
- Вызывать `.traverse()` для настройки всех вложенных объектов:
```js
gltf.scene.traverse((child) => {
  if (child.isMesh) {
    child.castShadow = true;
    child.receiveShadow = true;
  }
});
```

## Вывод
- Импорт модели через `GLTFLoader`
- Для сжатия используем `DRACOLoader`
- После импорта — базовая оптимизация через `.traverse()` и удаление лишнего
