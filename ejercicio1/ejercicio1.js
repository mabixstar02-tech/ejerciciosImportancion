// Una biblioteca necesita desarrollar un sistema básico que permita el préstamo
// de los libros, a quién se le ha prestado y qué libros se han prestado

// SUSTANTIVOS => Quién necesita interactuar

// Historias de usuario

// Libros, Usuarios, Prestamo

import Libros from "./Libros.js";

import Prestamos from "./Prestamos.js";

import Usuarios from "./Usuarios.js";

// Instancias

let quijote = new Libros ("El Quijote", "Norma", "Miguel de Cervantes");

let maria = new Libros ("La Maria", "Norma", "Jorge Isaacs");

quijote.verLibro();

maria.verLibro();

let prestarQuijoteMaria=new Prestamos("2/10/2026", "5/10/2026")
prestarQuijoteMaria.registrarLibros(quijote)
prestarQuijoteMaria.registrarLibros(maria)

prestarQuijoteMaria.verLibro()

let mabel=new Usuarios("Mabel", "Muñoz", "222", "123")
mabel.verInfo()