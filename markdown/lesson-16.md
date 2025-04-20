# Урок 16: Проект — Дом с привидениями 🏚️

## Что используется
- Геометрия: `BoxGeometry`, `ConeGeometry`, `SphereGeometry`, `PlaneGeometry`.
- Текстуры: кирпичи, трава, дверь (color, normal, roughness, ao).
- Освещение: `AmbientLight`, `DirectionalLight`, `PointLight`.
- Тени: включены на источниках и объектах.

## Основные приёмы
- **Масштаб в сцене**: 1 единица = 1 метр (дверь ≈ 2.2 метра).
- **Материалы**: `MeshStandardMaterial` с множеством карт.
- **Сборка сцены**:
  - Дом: коробка + крыша (конус) + дверь (текстура).
  - Окружение: трава (плоскость с тайлованной текстурой), камни, кресты (box/sphere).
  - Свет: основное освещение + точки у входа.

## Подсказки по коду
```js
// Пример тайлованной травы
const grassTexture = textureLoader.load('textures/grass/color.jpg');
grassTexture.wrapS = THREE.RepeatWrapping;
grassTexture.wrapT = THREE.RepeatWrapping;
grassTexture.repeat.set(8, 8);

const floor = new THREE.Mesh(
  new THREE.PlaneGeometry(20, 20),
  new THREE.MeshStandardMaterial({ map: grassTexture })
);
floor.rotation.x = -Math.PI / 2;
floor.receiveShadow = true;
scene.add(floor);
```

## Вывод
- Отличный проект для тренировки: геометрия, свет, материалы, тени.
- Всё строится из простых компонентов.
- Можно легко адаптировать под другие сцены.
