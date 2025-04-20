# Урок 31: Введение и прогресс загрузки

## Зачем нужно
- Улучшить первое впечатление
- Показать пользователю, что сцена загружается
- Избежать «пустого экрана» в начале

## Инструменты
- `THREE.LoadingManager` — отслеживает загрузку ассетов
- HTML/CSS — для чёрного фона и прогресс-бара

## Пример
```js
const loadingBar = document.querySelector('.loading-bar');

const loadingManager = new THREE.LoadingManager(
  () => {
    document.querySelector('.overlay').classList.add('fade-out');
  },
  (itemUrl, itemsLoaded, itemsTotal) => {
    const progressRatio = itemsLoaded / itemsTotal;
    loadingBar.style.transform = `scaleX(${progressRatio})`;
  }
);

const textureLoader = new THREE.TextureLoader(loadingManager);
```

## CSS идея
```css
.overlay {
  position: fixed;
  background: black;
  inset: 0;
  transition: opacity 1s;
  z-index: 10;
}
.overlay.fade-out {
  opacity: 0;
  pointer-events: none;
}
```

## Вывод
- Используй `LoadingManager` для отслеживания загрузки
- HTML/CSS для плавного интро и загрузочного индикатора
- Показывай сцену только когда всё готово
