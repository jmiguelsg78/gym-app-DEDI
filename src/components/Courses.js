import React from 'react';

function Courses() {
  const courses = [
    { id: 1, name: 'Yoga', description: 'Clase de Yoga', slots: 10 },
    { id: 2, name: 'Spinning', description: 'Entrenamiento en bicicleta', slots: 5 },
    { id: 3, name: 'Bodypump', description: 'Entrenamiento de fuerza con pesas', slots: 8 },
    { id: 4, name: 'Zumba', description: 'Entrenamiento ejercicio aeróbico que combina movimientos de baile con rutinas de fitness.', slots: 9 },
    { id: 5, name: 'Pilates', description: 'Entrenamiento para fortalecer los músculos, mejorar la flexibilidad y desarrollar el control del cuerpo.', slots: 20 },
    { id: 6, name: 'Body jump', description: 'Entrenamiento en trampolin', slots: 8 },
    { id: 7, name: 'Kickboxing', description: 'Una mezcla de artes marciales y boxeo para mejorar la resistencia cardiovascular y tonificar los músculos.', slots: 18 },
    { id: 8, name: 'CrossFit', description: 'Un entrenamiento de alta intensidad que mezcla movimientos funcionales, levantamiento de pesas y ejercicios aeróbicos.', slots: 2 },
    { id: 9, name: 'BodyBalance', description: 'Combina elementos de yoga, pilates y tai chi para mejorar la flexibilidad y reducir el estrés.', slots: 7 },
    { id: 10, name: 'Aquagym', description: 'Ejercicio aeróbico en el agua, con bajo impacto en las articulaciones.', slots: 17 },
    { id: 11, name: 'Natación', description: 'Clases de natación para mejorar la técnica, la resistencia y el acondicionamiento físico general.', slots: 12 },
    { id: 12, name: 'Aqua Zumba:', description: 'Una variación de Zumba en el agua, combinando baile y ejercicio aeróbico.', slots: 15 },
  ];

  return (
    <section>
      <h1>Apuntarse a Cursos</h1>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            <h2>{course.name}</h2>
            <p>{course.description}</p>
            <p>Cupos disponibles: {course.slots}</p>
            <button>Apuntarse</button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Courses;