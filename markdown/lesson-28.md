# Урок 28: Модификация стандартных материалов

## Проблема
- `ShaderMaterial` даёт гибкость, но требует писать всё вручную
- `MeshStandardMaterial` — удобный, но без кастомных эффектов

## Решение: `onBeforeCompile`
- Позволяет модифицировать шейдер стандартного материала (вставить свои строки)

## Пример
```js
const material = new THREE.MeshStandardMaterial();
material.onBeforeCompile = (shader) => {
  shader.uniforms.uTime = { value: 0 };
  shader.vertexShader = shader.vertexShader.replace(
    '#include <begin_vertex>',
    `#include <begin_vertex>
     transformed.y += sin(position.x * 10.0 + uTime) * 0.1;`
  );
  // сохранить ссылку для анимации
  material.userData.shader = shader;
};
```

## Вывод
- `onBeforeCompile` = способ добавить эффекты, не теряя удобства стандартных материалов
- Позволяет анимировать геометрию или добавлять кастомные фичи без полного переписывания