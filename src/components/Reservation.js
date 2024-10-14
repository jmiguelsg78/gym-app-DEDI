import React from 'react';

function Reservation() {
  const machines = [
    { id: 1, name: 'Press banca', available: true },
    { id: 2, name: 'Press Militar', available: false },
    { id: 3, name: 'Extension de cuadriceps', available: true },
    { id: 4, name: 'Triceps en polea', available: true },
    { id: 5, name: 'Elevaciones laterales', available: true },
    { id: 6, name: 'Femoral tumbado', available: true },
    { id: 7, name: 'Elevaciones de gemelo', available: false },
    { id: 8, name: 'Sentadilla hack', available: false },
    { id: 9, name: 'Prensa de pierna', available: true },
    { id: 10, name: 'Biceps en banco scott', available: true },
    { id: 11, name: 'Jalon al pecho', available: true },
    { id: 12, name: 'Hiptrast', available: true },
    { id: 13, name: 'Remo gironda', available: false },
    { id: 14, name: 'Press inclinado en multipower', available: true },
    { id: 15, name: 'Patada de gluteo en maquina', available: false },

  ];

  return (
    <section>
      <h1>Reserva de Máquinas</h1>
      <ul>
        {machines.map(machine => (
          <li key={machine.id}>
            <h2>{machine.name}</h2>
            <p>{machine.available ? 'Disponible' : 'No disponible'}</p>
            {machine.available && <button>Reservar</button>}
            {!machine.available && <button disabled>Reservar</button>}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Reservation;