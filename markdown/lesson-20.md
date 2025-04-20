# Урок 20: Физика в Three.js (с Cannon-es)

## Зачем нужна физика
- Позволяет имитировать реальные силы: гравитацию, столкновения, падения, отскоки.
- Делаёт сцену живой и интерактивной.

## Библиотека: cannon-es
```bash
npm install cannon-es
```

## Пример: падающий куб
```js
import * as CANNON from 'cannon-es';

// Мировая физика
const world = new CANNON.World();
world.gravity.set(0, -9.82, 0);

// Куб: физическое тело
const shape = new CANNON.Box(new CANNON.Vec3(0.5, 0.5, 0.5));
const body = new CANNON.Body({
  mass: 1,
  shape: shape,
  position: new CANNON.Vec3(0, 5, 0)
});
world.addBody(body);

// Three.js объект (визуализация)
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// В анимации — обновляем позицию
function animate() {
  world.step(1 / 60);
  mesh.position.copy(body.position);
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
```

## Вывод
- Физика реализуется с помощью внешней библиотеки (например, `cannon-es`).
- Требуется синхронизация между объектами Cannon и объектами Three.js.
- Отлично подходит для интерактивных сцен и игр.
