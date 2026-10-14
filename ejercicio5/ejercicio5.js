// Un centro médico necesita desarrollar un sistema para gestionar pacientes, médicos y citas.
// La clase Paciente debe almacenar nombre, documento, edad y teléfono. Un paciente puede tener varias citas médicas.
// La clase Medico debe almacenar nombre, documento, especialidad y teléfono.
// La clase Cita debe almacenar fecha, hora, motivo de consulta, paciente y médico encargado.
// El sistema debe permitir registrar pacientes y médicos, crear citas y mostrar la información completa de cada cita.

import Paciente from "./Paciente.js";
import Medico from "./Medico.js";
import Cita from "./Cita.js";

// Crear pacientes

let paciente1 = new Paciente("Mabel Munoz", "12345", 18, "3101234567");

let paciente2 = new Paciente("Laura Munos", "67890", 17, "3207654321");

// Crear médicos

let medico1 = new Medico("Ana Rodríguez", "11111", "Medicina General", "3001234567");

let medico2 = new Medico("Luis Martínez", "22222", "Pediatría", "3017654321");

// Crear citas

let cita1 = new Cita(
    "15/10/2026",
    "8:00 AM",
    "Dolor de cabeza",
    paciente1,
    medico1
);

let cita2 = new Cita(
    "16/10/2026",
    "10:00 AM",
    "Control médico",
    paciente1,
    medico2
);

let cita3 = new Cita(
    "17/10/2026",
    "2:00 PM",
    "Dolor de garganta",
    paciente2,
    medico1
);

// Mostrar información de los pacientes

paciente1.verInfo();
paciente2.verInfo();

// Mostrar información de los médicos

medico1.verInfo();
medico2.verInfo();

// Mostrar información completa de las citas

cita1.verCita();

cita2.verCita();

cita3.verCita();