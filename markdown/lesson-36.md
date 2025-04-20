# Урок 36: Финальные детали сцены ✨

## Цель
- Добавить "жизнь" в сцену: анимации, светлячки, спецэффекты
- Использовать приёмы из предыдущих уроков (шейдеры, частицы, анимация)

## Эффект светлячков
- Используется `THREE.Points`
- Позиции генерируются случайно
- Цвет и размер можно настраивать через `ShaderMaterial`

## Пример добавления светлячков
```js
const count = 100;
const positions = new Float32Array(count * 3);
for (let i = 0; i < count * 3; i++) {
  positions[i] = (Math.random() - 0.5) * 4;
}

const geometry = new THREE.BufferGeometry();
geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

const material = new THREE.ShaderMaterial({
  transparent: true,
  blending: THREE.AdditiveBlending,
  depthWrite: false,
  vertexShader: '...glsl...',
  fragmentShader: '...glsl...'
});

const fireflies = new THREE.Points(geometry, material);
scene.add(fireflies);
```

## Эффект портала (ShaderMaterial)
- Анимированное искажение цвета или формы
- Основано на `uv`, `time` и `sin`, `noise`, и т.д.

## Вывод
- Детали и анимации делают сцену живой
- Используй частицы и шейдеры для атмосферных эффектов
- Хорошее завершение проекта — интерактивный и красивый результат
