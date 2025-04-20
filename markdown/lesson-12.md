# Урок 12: Материалы в Three.js

## Что такое материал
- Материал определяет, как выглядит объект: цвет, освещённость, отражения, прозрачность и т.д.
- Применяется к геометрии через `Mesh`.

## Часто используемые материалы

```js
// Простой цвет без освещения
new THREE.MeshBasicMaterial({ color: 0xff0000 });

// Реагирует на свет
new THREE.MeshStandardMaterial({ color: 0x00ff00 });

// Глянцевый (реалистичный)
new THREE.MeshPhysicalMaterial({ clearcoat: 1 });

// Проволочный каркас
new THREE.MeshBasicMaterial({ wireframe: true });
```

## Основные материалы
| Материал                  | Освещение | Применение                         |
|---------------------------|-----------|------------------------------------|
| MeshBasicMaterial         | ❌        | Простой цвет, без освещения        |
| MeshStandardMaterial      | ✅        | PBR (реалистичное освещение)       |
| MeshPhysicalMaterial      | ✅        | Расширение Standard + спецэффекты |
| MeshLambertMaterial       | ✅        | Базовое освещение, быстрый рендер |
| MeshPhongMaterial         | ✅        | Блики, глянец, устаревший стиль    |

## Пример
```js
const geometry = new THREE.SphereGeometry();
const material = new THREE.MeshStandardMaterial({ color: 0x2194ce });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
```

## Вывод
- Выбор материала влияет на визуал и производительность.
- Для реалистичного рендера — `MeshStandardMaterial` или `MeshPhysicalMaterial`.
- Для отладки или простых сцен — `MeshBasicMaterial`.
