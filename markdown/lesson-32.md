# Урок 32: Совмещение HTML и WebGL

## Зачем нужно
- Показать текст или интерфейс, привязанный к 3D-объектам
- Добавить подсказки, описание, кнопки на сцену

## Как это работает
- Располагаем HTML-элемент (например, `<div>`) поверх canvas
- Переводим 3D-позицию в 2D-координаты экрана

## Пример
```js
const screenPosition = helmetMesh.position.clone();
screenPosition.project(camera);

const translateX = (screenPosition.x * 0.5 + 0.5) * window.innerWidth;
const translateY = (-screenPosition.y * 0.5 + 0.5) * window.innerHeight;

document.querySelector('.label').style.transform = `translate(${translateX}px, ${translateY}px)`;
```

## CSS (позиционирование поверх canvas)
```css
.label {
  position: absolute;
  pointer-events: auto;
  transform: translate(-50%, -50%);
}
```

## Вывод
- Можно привязывать HTML к 3D-объектам через `.project()`
- Отлично подходит для подписей, UI, пояснений
- Не требует Canvas2D или шейдеров — обычный DOM поверх сцены
