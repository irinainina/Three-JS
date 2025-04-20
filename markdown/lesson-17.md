# Урок 17: Частицы (Particles) в Three.js

## Что такое частицы
- Частицы — это большое количество маленьких объектов, обычно **точек**, имитирующих природные или магические эффекты.
- Реализуются через `THREE.Points` с `BufferGeometry` и `PointsMaterial`.

## Пример создания частиц
```js
const count = 1000;
const positions = new Float32Array(count * 3);

for (let i = 0; i < count * 3; i++) {
  positions[i] = (Math.random() - 0.5) * 10;
}

const geometry = new THREE.BufferGeometry();
geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

const material = new THREE.PointsMaterial({
  size: 0.1,
  sizeAttenuation: true,
  color: 0xffffff
});

const particles = new THREE.Points(geometry, material);
scene.add(particles);
```

## Варианты применения
- Снег, дождь, дым, огонь, искры
- Фоны, эффекты вокруг объектов, магия, звёзды и т.д.

## Вывод
- Частицы рендерятся эффективно, даже в большом количестве.
- Используются `BufferGeometry` + `PointsMaterial`.
- Можно менять цвет, размер, прозрачность, а также анимировать поведение.
