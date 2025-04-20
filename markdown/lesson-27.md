# Урок 27: Анимированная галактика ✨

## Зачем
- Анимировать частицы через CPU (JavaScript) слишком тяжело при большом количестве точек
- Вместо этого — анимация через **vertex shader** (на GPU)

## Как работает
- Меняем `PointsMaterial` на `ShaderMaterial`
- Передаём `time` как uniform в шейдер
- Смещаем позиции частиц внутри `vertexShader`

## Пример vertex shader (вращение)
```glsl
uniform float uTime;
attribute float aScale;

void main() {
  vec3 pos = position;
  float angle = uTime * 0.2 + pos.x * 0.5;
  float radius = length(pos.xy);
  pos.x = cos(angle) * radius;
  pos.y = sin(angle) * radius;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  gl_PointSize = aScale * 2.0;
}
```

## Вывод
- Анимация галактики через шейдеры даёт высокую производительность
- Позволяет вращать, пульсировать и изменять поведение частиц
- Используется `ShaderMaterial` + `BufferAttributes` + `uniforms`
