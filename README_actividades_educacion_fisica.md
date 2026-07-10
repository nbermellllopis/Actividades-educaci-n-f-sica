# Actividades de Educación Física

## Qué es este proyecto
Este proyecto es un recurso interactivo para trabajar contenidos de Educación Física en primaria y primer ciclo de ESO. Incluye actividades de:
- hábitos saludables y alimentación,
- cuestionarios de opción múltiple,
- y ejercicios de arrastrar y soltar sobre imágenes.

## Estructura actual
- `index.html`: portada principal con tres bloques (hábitos saludables, icono central y cuerpo humano).
- `cuestionario_habitos_saludables.html`: cuestionario de 15 preguntas sobre hábitos saludables y alimentación.
- `alimentacion.html`: actividad de pirámide alimenticia con arrastrar y soltar imágenes de alimentos.
- `cuestionario.html`: cuestionario de 15 preguntas sobre músculos y huesos.
- `musculos.html`: actividad de músculos (vista delantera).
- `musculos_posteriores.html`: actividad de músculos (vista trasera).
- `huesos.html`: actividad de arrastrar y soltar huesos.
- `styles.css`: estilos compartidos del menú y de las actividades de músculos/huesos.
- `script.js`: lógica de arrastrar y soltar para `musculos.html`, `musculos_posteriores.html` y `huesos.html`.
- `images/`: banco de imágenes para todas las actividades.

## Menú principal (`index.html`)
La portada muestra:
- título: **Actividades de Educación Física**,
- icono central: `images/icono.png`,
- franja izquierda **Hábitos saludables** con enlaces a:
	- `cuestionario_habitos_saludables.html`,
	- `alimentacion.html`,
- franja derecha **El cuerpo humano** con enlaces a:
	- `musculos.html`,
	- `huesos.html`,
	- `cuestionario.html`.

## Actividades incluidas

### 1. Cuestionario de hábitos saludables
Archivo: `cuestionario_habitos_saludables.html`

Características:
- 15 preguntas tipo test (3 opciones por pregunta).
- Orden de respuestas mezclado (no siempre la correcta en la misma letra).
- Feedback inmediato de acierto/error.
- Resultado final con porcentaje y mensaje.
- Imagen de apoyo por pregunta.

### 2. Pirámide de la alimentación
Archivo: `alimentacion.html`

Características:
- Banco de alimentos con imágenes a ambos lados.
- Pirámide central con zonas de suelta por categoría.
- Validación de categoría correcta/incorrecta.
- Botón para reiniciar la actividad.

### 3. Cuestionario del cuerpo humano
Archivo: `cuestionario.html`

Características:
- 15 preguntas sobre huesos, músculos y aparato locomotor.
- Sistema de feedback y resultado final equivalente al cuestionario de hábitos.

### 4. Músculos y huesos (arrastrar y soltar)
Archivos:
- `musculos.html`
- `musculos_posteriores.html`
- `huesos.html`

Características:
- Etiquetas arrastrables.
- Zonas de colocación sobre imagen.
- Mensaje de acierto/error.
- Reinicio rápido de la actividad.

## Detalles técnicos
- Proyecto estático HTML/CSS/JavaScript (sin backend).
- Parte de los cuestionarios implementada con script embebido en su propio HTML.
- Lógica común de drag and drop en `script.js` para las actividades de músculos y huesos.
- Diseño adaptado a pantallas pequeñas con media queries.

## Cómo usarlo
1. Abre `index.html` en un navegador.
2. Elige el bloque temático y entra en una actividad.
3. En los cuestionarios: selecciona opción y pulsa `Siguiente`.
4. En drag and drop: arrastra cada elemento a su zona correspondiente.

## Ejecución local recomendada
1. Abre terminal en la carpeta del proyecto.
2. Ejecuta:

```bash
python -m http.server 8000
```

3. Abre `http://localhost:8000/index.html` en el navegador.

También puedes abrir `index.html` directamente con doble clic.

## Objetivo educativo
Facilitar el aprendizaje activo mediante actividades visuales e interactivas sobre:
- alimentación equilibrada,
- hábitos saludables,
- y conocimiento básico del cuerpo humano.
