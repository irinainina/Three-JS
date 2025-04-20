# Урок 29: Post-processing (постобработка)

## Что это
- Эффекты, применяемые **после** рендера сцены
- Добавляют реализм или стилизацию: размытие, засветка, хроматические аберрации и т.д.

## Библиотека: `postprocessing` от Poimandres (или `three/examples/jsm/postprocessing`)

## Базовая структура
```js
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';

const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));
composer.addPass(new UnrealBloomPass());

function animate() {
  requestAnimationFrame(animate);
  composer.render();
}
```

## Примеры эффектов
- **UnrealBloomPass** — засветка ярких участков
- **GlitchPass** — глитч-эффект
- **DotScreenPass** — пиксельный/ретро-фильтр
- **FilmPass** — шум, царапины, виньетка

## Вывод
- Post-processing = финальный визуальный слой
- Прост в использовании, мощен по эффектам
- Используется `EffectComposer` и цепочка `Pass`
