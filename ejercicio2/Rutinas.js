import Entrenadores from "./Entrenadores.js";

class Rutinas {

    nombre
    objetivo
    duracion
    entrenador

    constructor(nombre, objetivo, duracion, entrenador) {
        this.nombre = nombre
        this.objetivo = objetivo
        this.duracion = duracion
        this.entrenador = entrenador
    }

    registrarNombre(nuevoNombre) {
        this.nombre = nuevoNombre
    }

    registrarObjetivo(nuevoObjetivo) {
        this.objetivo = nuevoObjetivo
    }

    registrarDuracion(nuevaDuracion) {
        this.duracion = nuevaDuracion
    }

    verRutina() {
        console.log("Nombre de la rutina: " + this.nombre)
        console.log("Objetivo: " + this.objetivo)
        console.log("Duración: " + this.duracion + " minutos")
        console.log("Entrenador encargado: " + this.entrenador.nombre)
    }
}

export default Rutinas