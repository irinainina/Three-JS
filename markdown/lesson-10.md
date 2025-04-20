# Урок 10: Debug UI (панель для настройки параметров)

## Зачем нужно
- Быстро менять параметры без переписывания кода (цвет, позиция, скорость и т.д.).
- Удобно для отладки, тестирования и согласования с дизайнером или клиентом.

## Библиотека: lil-gui
Устанавливается через npm:
```bash
npm install lil-gui
```
Или подключается через CDN:
```html
<script src="https://cdn.jsdelivr.net/npm/lil-gui@0.17"></script>
```

## Пример использования
```js
import GUI from 'lil-gui';

const gui = new GUI();

const cube = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshStandardMaterial({ color: 0x00ff00 })
);
scene.add(cube);

// Добавим параметры в GUI
gui.add(cube.position, 'x').min(-5).max(5).step(0.1).name('Position X');
gui.add(cube.material, 'wireframe');
gui.addColor(cube.material, 'color').name('Color');
```

## Вывод
- Debug UI ускоряет настройку сцены.
- Позволяет интерактивно управлять параметрами без перекомпиляции.
