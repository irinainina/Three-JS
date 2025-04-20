# Урок 8: Полноэкранный режим и адаптация к размеру окна

## Автоматическая подгонка под окно
Чтобы рендер всегда занимал всё окно и обновлялся при его изменении:

```js
// Обновление размеров и камеры при изменении окна
window.addEventListener('resize', () => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  // Обновляем размеры рендерера
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Обновляем параметры камеры
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
});
```

## Полноэкранный режим (по клику, например)

```js
window.addEventListener('dblclick', () => {
  const canvas = renderer.domElement;
  if (!document.fullscreenElement) {
    canvas.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
});
```

## Вывод
- Сцена должна адаптироваться к изменению размера окна.
- Полноэкранный режим помогает создать эффект погружения.
- Эти улучшения делают 3D-опыт более реалистичным и отзывчивым.
