# Урок 6: Анимации в Three.js

## Как работает анимация
- Анимация — это многократный рендер сцены с изменениями между кадрами.
- Используется функция `requestAnimationFrame()` — она вызывает функцию обновления каждый кадр (обычно 60 раз в секунду).

## Пример базовой анимации
```js
function animate() {
  requestAnimationFrame(animate);

  // Обновляем состояние сцены (например, вращаем куб)
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  // Перерисовываем сцену
  renderer.render(scene, camera);
}

animate();
```

## Использование deltaTime
Чтобы анимация была одинаково плавной на любых устройствах:

```js
let previousTime = 0;

function animate(currentTime) {
  requestAnimationFrame(animate);

  const deltaTime = (currentTime - previousTime) / 1000; // в секундах
  previousTime = currentTime;

  // Плавное вращение независимо от FPS
  cube.rotation.x += deltaTime;
  cube.rotation.y += deltaTime;

  renderer.render(scene, camera);
}

animate();
```

## Вывод
- `requestAnimationFrame` — основа для всех анимаций в Three.js.
- Внутри неё пишем логику движения/изменения объектов.
- `deltaTime` позволяет сделать движение плавным и одинаковым на всех устройствах.
