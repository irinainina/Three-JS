const lessons = [
  {
    file: 'lesson-1.md',
    title: 'Урок 1: Введение',
    description: 'Краткое описание курса и тем, которые будут изучаться.',
  },
  {
    file: 'lesson-2.md',
    title: 'Урок 2: Что такое WebGL и зачем использовать Three.js',
    description:
      'Пояснение, что WebGL — это API для 3D в браузере, а Three.js — удобная обёртка над ним.',
  },
  {
    file: 'lesson-3.md',
    title: 'Урок 3: Базовая сцена в Three.js',
    description:
      'Создание минимального проекта без сборщиков: сцена, камера, рендерер.',
  },
  {
    file: 'lesson-4.md',
    title: 'Урок 4: Зачем использовать Webpack',
    description:
      'Обоснование необходимости сборщика для подключения расширений, локального сервера и модулей.',
  },
  {
    file: 'lesson-5.md',
    title: 'Урок 5: Трансформация объектов',
    description:
      'Как перемещать, поворачивать и масштабировать объекты с помощью position, rotation, scale.',
  },
  {
    file: 'lesson-6.md',
    title: 'Урок 6: Анимации',
    description:
      'Цикл requestAnimationFrame, базовая анимация и вариант с deltaTime для стабильной скорости.',
  },
  {
    file: 'lesson-7.md',
    title: 'Урок 7: Камеры',
    description:
      'PerspectiveCamera и OrthographicCamera, когда и зачем использовать.',
  },
  {
    file: 'lesson-8.md',
    title: 'Урок 8: Полноэкранный режим и ресайз',
    description:
      'Как адаптировать рендер под окно и переходить в fullscreen.',
  },
  {
    file: 'lesson-9.md',
    title: 'Урок 9: Геометрии',
    description:
      'Наиболее часто используемые геометрии: куб, сфера, плоскость и т.п.',
  },
  {
    file: 'lesson-10.md',
    title: 'Урок 10: Debug UI',
    description:
      'Использование lil-gui для настройки параметров сцены в реальном времени.',
  },
  {
    file: 'lesson-11.md',
    title: 'Урок 11: Текстуры',
    description:
      'Типы текстур, как загружать и применять через TextureLoader.',
  },
  {
    file: 'lesson-12.md',
    title: 'Урок 12: Материалы',
    description:
      'Сравнение MeshBasic, MeshStandard, MeshPhysical, выбор подходящего под задачу.',
  },
  {
    file: 'lesson-13.md',
    title: 'Урок 13: 3D-текст',
    description:
      'Создание объёмного текста с TextGeometry и загрузкой шрифта .typeface.json.',
  },
  {
    file: 'lesson-14.md',
    title: 'Урок 14: Освещение',
    description:
      'Основные типы света: Ambient, Point, Directional, Spot.',
  },
  {
    file: 'lesson-15.md',
    title: 'Урок 15: Тени',
    description: 'Как включить тени, настроить источники и объекты.',
  },
  {
    file: 'lesson-16.md',
    title: 'Урок 16: Дом с привидениями',
    description:
      'Первый проект: комбинирование объектов, света, теней, текстур.',
  },
  {
    file: 'lesson-17.md',
    title: 'Урок 17: Частицы',
    description:
      'Создание множества точек (Points) и их визуализация с PointsMaterial.',
  },
  {
    file: 'lesson-18.md',
    title: 'Урок 18: Генератор галактики',
    description:
      'Процедурная генерация галактики с параметрами через GUI.',
  },
  {
    file: 'lesson-19.md',
    title: 'Урок 19: Raycaster (лучи и пересечения)',
    description:
      'Инструмент для взаимодействия с объектами сцены. Позволяет реализовать hover, click.',
  },
  {
    file: 'lesson-20.md',
    title: 'Урок 20: Физика',
    description:
      'Подключение cannon-es, создание физических тел, синхронизация с Three.js.',
  },
  {
    file: 'lesson-21.md',
    title: 'Урок 21: Импорт моделей',
    description:
      'Загрузка .glb/.gltf с помощью GLTFLoader, поддержка анимации и материалов.',
  },
  {
    file: 'lesson-22.md',
    title: 'Урок 22: Что такое Blender и зачем он нужен',
    description:
      'Blender — это бесплатная программа для 3D-моделирования.',
  },
  {
    file: 'lesson-23.md',
    title: 'Урок 23: Реалистичный рендер',
    description:
      'Использование HDRI, тонмаппинга, PBR-материалов и sRGB-коррекции.',
  },
  {
    file: 'lesson-24.md',
    title: 'Урок 24: Введение в шейдеры',
    description:
      'Что такое vertex/fragment шейдер, зачем они нужны, как использовать ShaderMaterial.',
  },
  {
    file: 'lesson-25.md',
    title: 'Урок 25: Шейдерные паттерны',
    description:
      'Рисование узоров в fragmentShader с помощью математики и uv.',
  },
  {
    file: 'lesson-26.md',
    title: 'Урок 26: Бушующее море',
    description: 'Проект с анимацией волн через vertexShader.',
  },
  {
    file: 'lesson-27.md',
    title: 'Урок 27: Анимированная галактика',
    description:
      'Оптимизация вращения частиц через vertexShader вместо JS.',
  },
  {
    file: 'lesson-28.md',
    title: 'Урок 28: Модификация стандартных материалов',
    description:
      'Добавление кастомных эффектов через onBeforeCompile без переписывания ShaderMaterial.',
  },
  {
    file: 'lesson-29.md',
    title: 'Урок 29: Постобработка',
    description:
      'Использование EffectComposer и цепочки эффектов (Bloom, Glitch, FilmPass).',
  },
  {
    file: 'lesson-30.md',
    title: 'Урок 30: Оптимизация производительности',
    description:
      'Советы по снижению нагрузки на GPU и CPU, использование stats.js.',
  },
  {
    file: 'lesson-31.md',
    title: 'Урок 31: Загрузка и интро',
    description:
      'LoadingManager, HTML-индикатор загрузки, плавный старт сцены.',
  },
  {
    file: 'lesson-32.md',
    title: 'Урок 32: HTML и WebGL вместе',
    description:
      'Привязка DOM-элементов к объектам сцены с помощью .project() и координат.',
  },
  {
    file: 'lesson-33.md',
    title: 'Урок 33: Создание сцены в Blender',
    description: 'Что такое baking, зачем он нужен для реалистичности.',
  },
  {
    file: 'lesson-34.md',
    title: 'Урок 34: Baking и экспорт',
    description: 'Пошагово: unwrap → bake → экспорт .glb.',
  },
  {
    file: 'lesson-35.md',
    title: 'Урок 35: Импорт и оптимизация сцены',
    description: 'Загрузка .glb, настройка теней, удаление лишнего.',
  },
  {
    file: 'lesson-36.md',
    title: 'Урок 36: Добавление деталей',
    description:
      'Эффекты: частицы (светлячки), кастомный портал с анимацией и шейдерами.',
  },
];
