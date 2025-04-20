# Урок 19: Raycaster (лучи и пересечения)

## Что такое Raycaster
- Позволяет "стрелять лучом" из точки в направлении и определять пересечения с объектами.
- Применения: столкновения, прицеливание, наведение мыши, взаимодействие.

## Пример создания луча
```js
const raycaster = new THREE.Raycaster()
const origin = new THREE.Vector3(-3, 0, 0)
const direction = new THREE.Vector3(1, 0, 0).normalize()
raycaster.set(origin, direction)
```

## Проверка пересечений
```js
const intersects = raycaster.intersectObjects([object1, object2, object3])
```
- Возвращает массив объектов с данными: точка пересечения, объект, расстояние и т.д.

## Анимация и обновление на каждом кадре
- Обновляй луч в `tick()`
- Меняй цвет объектов в зависимости от пересечения

## События наведения и клика
- Сохраняем `currentIntersect`
- Определяем `mouseenter` / `mouseleave`, сравнивая прошлое и текущее состояние
- Обрабатываем клик по объекту через `addEventListener('click', ...)`

## Наведение мыши
```js
const mouse = new THREE.Vector2()
window.addEventListener('mousemove', (event) => {
  mouse.x = event.clientX / sizes.width * 2 - 1
  mouse.y = -(event.clientY / sizes.height) * 2 + 1
})

raycaster.setFromCamera(mouse, camera)
```

## Вывод
- Raycaster — мощный инструмент для взаимодействия с объектами сцены
- Позволяет реализовать hover, click, и столкновения
- Требует нормализации направлений и обновления каждый кадр
