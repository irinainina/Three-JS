# Урок 23: Реалистичный рендер в Three.js ✨

## Основные приёмы для реалистичности

### 1. Используй PBR-материалы
```js
const material = new THREE.MeshStandardMaterial({
  metalness: 0.3,
  roughness: 0.4,
  envMap: environmentMapTexture
});
```
- `MeshStandardMaterial` или `MeshPhysicalMaterial`
- Обязательно: карты **normal**, **roughness**, **metalness**, **ao**, **height** (если есть)

### 2. Освещение через HDRI (окружение)
```js
const rgbeLoader = new RGBELoader();
rgbeLoader.load('/textures/environment.hdr', (texture) => {
  texture.mapping = THREE.EquirectangularReflectionMapping;
  scene.environment = texture;
  scene.background = texture;
});
```
- Используй HDRI как фон и источник отражений
- Формат: `.hdr` (вместе с `RGBELoader`)

### 3. Настройка рендера
```js
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.25;
renderer.outputEncoding = THREE.sRGBEncoding;
```
- `toneMapping`: реалистичный контраст
- `exposure`: яркость
- `sRGBEncoding`: правильная цветопередача

## Вывод
- Реализм достигается сочетанием: **материалы + освещение + тонмаппинг + текстуры**
- Используй HDRI и корректные настройки рендера для лучшего результата
