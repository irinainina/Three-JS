# Урок 15: Тени в Three.js

## Как включить тени
```js
// Включаем тени на рендерере
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap; // мягкие тени (опционально)
```

## Источник света
```js
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 5, 5);
light.castShadow = true; // включаем тени от света
scene.add(light);
```

## Объекты в сцене
```js
const sphere = new THREE.Mesh(geometry, material);
sphere.castShadow = true; // объект отбрасывает тень

const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.receiveShadow = true; // объект принимает тень

scene.add(sphere, plane);
```

## Настройки качества теней (опционально)
```js
light.shadow.mapSize.width = 1024;
light.shadow.mapSize.height = 1024;
light.shadow.camera.near = 1;
light.shadow.camera.far = 20;
```

## Вывод
- Для теней нужно явно включить `castShadow` и `receiveShadow`.
- Только определённые источники света поддерживают тени: `DirectionalLight`, `SpotLight`, `PointLight`.
- Тени влияют на производительность — регулируй `mapSize` для баланса.