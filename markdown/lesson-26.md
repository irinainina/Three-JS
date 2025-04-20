# Урок 26: Проект — Бушующее море 🌊 (Raging Sea)

## Что делаем
- Используем `PlaneGeometry` + `ShaderMaterial`
- Анимируем вершины для создания волн (vertex shader)
- Добавляем градиент или цвет в зависимости от высоты (fragment shader)

## Ключевые идеи
- Чем больше сегментов у плоскости — тем плавнее волны
- Вершины перемещаются по синусоиде, используя `time` и `uv`

## Vertex Shader (пример)
```glsl
void main() {
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  modelPosition.y += sin(modelPosition.x * 4.0 + time) * 0.1;
  gl_Position = projectionMatrix * viewMatrix * modelPosition;
}
```

## Fragment Shader (пример)
```glsl
void main() {
  gl_FragColor = vec4(0.0, 0.4, 0.6, 1.0);
}
```

## Вывод
- Эффект волны создаётся на GPU, без физики
- Можно управлять амплитудой, скоростью, частотой через GUI
- Отличный пример использования кастомных шейдеров для динамического ландшафта
