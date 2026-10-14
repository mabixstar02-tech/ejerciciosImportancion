// Un gimnasio necesita desarrollar un sistema para gestionar clientes, entrenadores y rutinas de entrenamiento.
// El sistema debe permitir registrar los datos de los clientes, como nombre, documento, teléfono y edad. 
// Cada cliente puede tener una o varias rutinas asignadas.
// También se deben registrar los datos de los entrenadores, como nombre, especialidad y teléfono. 
// Un entrenador puede estar encargado de diferentes rutinas.
// Una rutina debe almacenar su nombre, objetivo, duración y el entrenador encargado.
// El sistema debe permitir crear objetos, asignar rutinas a los clientes y mostrar la información correspondiente.

import Clientes from "./Clientes.js";

import Entrenadores from "./Entrenadores.js";

import Rutinas from "./Rutinas.js";

// Instancias

let carlos = new Entrenadores("Carlos", "Musculacion", "3101234567");

let raul = new Entrenadores("Raul", "Cardio", "3209876543");

// Crear rutinas

let rutinaFuerza = new Rutinas("Fuerza", "Aumentar masa muscular", 60, carlos);

let rutinaCardio = new Rutinas("Cardio", "Mejorar resistencia", 30, raul);

// Mostrar entrenadores

carlos.verEntrenador();

raul.verEntrenador();

// Mostrar rutinas

rutinaFuerza.verRutina();

rutinaCardio.verRutina();

// Crear clientes

let mabel = new Clientes("Mabel", "12345", "3001234567", 20);

let laura = new Clientes("Laura", "67890", "3117654321", 25);

// Asignar rutinas a los clientes

mabel.registrarRutinas(rutinaFuerza);

mabel.registrarRutinas(rutinaCardio);

laura.registrarRutinas(rutinaCardio);

// Mostrar informacion de los clientes

mabel.verCliente();

laura.verCliente();