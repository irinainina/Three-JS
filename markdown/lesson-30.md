# Урок 30: Оптимизация производительности

## Цель
- Поддерживать **60 FPS** (или больше) на большинстве устройств

## Измерение FPS
```js
import Stats from 'three/examples/jsm/libs/stats.module.js';
const stats = new Stats();
document.body.appendChild(stats.dom);

function animate() {
  stats.begin();
  renderer.render(scene, camera);
  stats.end();
  requestAnimationFrame(animate);
}
```

## Оптимизация GPU
- Уменьшить **количество полигонов**
- Использовать **compressed textures**
- Выключить тени, если не нужны (`castShadow = false`)
- Использовать `MeshBasicMaterial` для нефотореалистичных сцен

## Оптимизация CPU
- Избегать тяжёлой логики в `animate()`
- Не обновлять каждый кадр, если можно реже (`setInterval`, `raf skip`)
- Удалять неиспользуемые объекты (`scene.remove()` + `.dispose()`)

## Общие советы
- Отключить `antialias` для слабых устройств
- Использовать `devicePixelRatio = Math.min(window.devicePixelRatio, 2)`

## Вывод
- Следи за FPS с `stats.js`
- Балансируй качество и скорость
- Убирай всё, что не видно или не используется
