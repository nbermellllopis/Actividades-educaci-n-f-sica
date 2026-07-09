# Cuestionario del cuerpo humano

## Qué es este proyecto
Este proyecto es un recurso interactivo para trabajar el cuerpo humano de forma visual y sencilla. Incluye un cuestionario sobre músculos y huesos, y una actividad de arrastrar y soltar para colocar músculos en su sitio.

## Estructura del proyecto
- `index.html`: página de entrada con el menú principal.
- `cuestionario.html`: cuestionario de 15 preguntas con imágenes y resultado final.
- `musculos.html`: actividad de la parte delantera del cuerpo.
- `musculos_posteriores.html`: actividad de la parte trasera del cuerpo.
- `huesos.html`: actividad de la parte delantera del esqueleto y los huesos.
- `styles.css`: estilos compartidos para las pantallas del menú y de músculos.
- `script.js`: lógica de arrastrar y soltar para ambas páginas de músculos.
- `images/`: imágenes usadas en el menú y en las actividades.

## Cómo funciona
### 1. Menú inicial
La página principal, `index.html`, muestra una imagen relacionada con el cuerpo humano y dos accesos:
- `Cuestionario`
- `Músculos`
- `Huesos`

### 2. Cuestionario
Al abrir `cuestionario.html`, el usuario ve 15 preguntas de opción múltiple. Cada pregunta:
- muestra un enunciado corto,
- enseña una imagen de apoyo,
- ofrece 3 respuestas,
- marca la opción correcta o incorrecta,
- y permite pasar a la siguiente pregunta con el botón `Siguiente`.

Al terminar, el sistema calcula el número de aciertos, muestra un mensaje final y enseña una imagen de celebración. Desde ahí se puede reiniciar el cuestionario con `Volver a empezar`.

#### Preguntas actuales del cuestionario
1. ¿Cuál es la principal función del esqueleto?
2. ¿Qué hueso protege principalmente el cerebro?
3. ¿Qué músculo permite doblar el brazo al flexionar el codo?
4. ¿Qué hueso es el más largo del cuerpo humano?
5. ¿Cuál de estos músculos se encuentra en la parte delantera del muslo?
6. ¿Qué articulación permite mover el brazo en muchas direcciones?
7. ¿Qué función tienen los músculos en el cuerpo?
8. ¿Cuál de estos huesos forma parte de la columna vertebral?
9. ¿Qué músculo está situado en la parte posterior del brazo?
10. ¿Qué huesos protegen principalmente el corazón y los pulmones?
11. ¿Qué ocurre cuando un músculo se contrae?
12. ¿Qué hueso une el brazo con el hombro?
13. ¿Qué músculos trabajan principalmente cuando nos ponemos de puntillas?
14. ¿Qué tipo de tejido une un músculo a un hueso?
15. ¿Qué sistema del cuerpo forman conjuntamente los huesos, músculos y articulaciones?

#### Imágenes usadas en el cuestionario
- `images/esqueleto_huesos.png`
- `images/cerebro.jpg`
- `images/musculos-frente.jpg`
- `images/huesos.jpg`
- `images/musculos_delante.png`
- `images/musculos-cuerpo.svg`
- `images/musculos_detras.png`
- `images/esqueleto.jpg`
- `images/levantando-vaso.jpg`
- `images/celebrando.jpg` (pantalla final)

### 3. Actividades de músculos
Las páginas `musculos.html` y `musculos_posteriores.html` usan la misma lógica JavaScript. El funcionamiento es este:
- se muestran etiquetas con nombres de músculos,
- el usuario arrastra cada etiqueta hasta la zona correcta de la imagen,
- si acierta, el músculo desaparece de la lista y la zona queda completada,
- si falla, aparece un mensaje de ayuda,
- el botón `Volver a empezar` restablece la actividad.

### 4. Actividad de huesos
La página `huesos.html` reutiliza la misma base visual e interactiva que la parte delantera de músculos, pero cambia el contenido para trabajar huesos del esqueleto. En esta actividad:
- se usan las mismas posiciones de arrastre que en la versión frontal de músculos,
- las respuestas cambian a cráneo, clavícula, costillas, radio, húmero, pelvis, fémur y peroné,
- la imagen de apoyo es `images/esqueleto_huesos.png`.

## Detalles técnicos
- El cuestionario está implementado con HTML, CSS y JavaScript directamente dentro de `cuestionario.html`.
- Las imágenes del cuestionario se cargan desde la carpeta `images/` para facilitar mantenimiento y sustitución de recursos.
- La lógica de arrastrar y soltar se aplica automáticamente a cualquier sección con la clase `muscles-board`, por eso sirve tanto para la parte delantera como para la trasera.
- El diseño es responsive y se adapta a pantallas pequeñas.

## Cómo usarlo
1. Abre `index.html` en un navegador.
2. Elige entre `Cuestionario` o `Músculos`.
3. En el cuestionario, selecciona una respuesta y pulsa `Siguiente`.
4. En la actividad de músculos, arrastra cada nombre a su zona correcta.
5. Usa los botones de volver para reiniciar o cambiar de pantalla.

## Cómo probarlo en local
1. Abre una terminal en la carpeta del proyecto.
2. Ejecuta `python -m http.server 8000`.
3. Abre `http://localhost:8000/index.html` en el navegador.

Si no quieres usar terminal, también puedes abrir directamente `index.html` con doble clic.

## Objetivo educativo
El recurso está pensado para primaria y primer ciclo de ESO. Su objetivo es ayudar a reconocer huesos y músculos básicos, entender para qué sirven y practicar con apoyo visual.
