// Una empresa de alquiler necesita desarrollar un sistema para gestionar vehículos, clientes y alquileres.
// La clase Vehiculo debe almacenar placa, marca, modelo y tipo de vehículo.
// La clase Cliente debe almacenar nombre, documento y teléfono. Un cliente puede realizar varios alquileres.
// La clase Alquiler debe almacenar la fecha de inicio, fecha de finalización, cliente y vehículo alquilado.
// El sistema debe permitir registrar vehículos y clientes, realizar alquileres y mostrar la información de cada alquiler.

import Vehiculo from "./Vehiculo.js";
import Cliente from "./Cliente.js";
import Alquiler from "./Alquiler.js";

// Instancias de vehiculos

let carro = new Vehiculo("ABC123", "Chevrolet", "Onix", "Carro");

let moto = new Vehiculo("XYZ789", "Yamaha", "FZ", "Moto");

// Instancias de clientes

let cliente1 = new Cliente("Mabel Munoz", "123456", "3001234567");

let cliente2 = new Cliente("Laura Munoz", "654321", "3107654321");

// Crear alquileres

let alquiler1 = new Alquiler(
    "12/10/2026",
    "15/10/2026",
    cliente1,
    carro
);

let alquiler2 = new Alquiler(
    "20/10/2026",
    "22/10/2026",
    cliente1,
    moto
);

let alquiler3 = new Alquiler(
    "25/10/2026",
    "28/10/2026",
    cliente2,
    carro
);

// Registrar alquileres a cada cliente

cliente1.registrarAlquiler(alquiler1);
cliente1.registrarAlquiler(alquiler2);

cliente2.registrarAlquiler(alquiler3);

// Mostrar vehiculos

console.log("VEHICULOS REGISTRADOS");

carro.verVehiculo();
moto.verVehiculo();

// Mostrar clientes

console.log("CLIENTES REGISTRADOS");

cliente1.verCliente();
cliente2.verCliente();

// Mostrar alquileres

alquiler1.verAlquiler();
alquiler2.verAlquiler();
alquiler3.verAlquiler();

// Mostrar cantidad de alquileres por cliente

console.log("Alquileres de " + cliente1.nombre + ": " + cliente1.alquileres.length);

console.log("Alquileres de " + cliente2.nombre + ": " + cliente2.alquileres.length);