class Entrenadores {

    nombre
    especialidad
    telefono

    constructor(nombre, especialidad, telefono) {
        this.nombre = nombre
        this.especialidad = especialidad
        this.telefono = telefono
    }

    registrarNombre(nuevoNombre) {
        this.nombre = nuevoNombre
    }

    registrarEspecialidad(nuevaEspecialidad) {
        this.especialidad = nuevaEspecialidad
    }

    registrarTelefono(nuevoTelefono) {
        this.telefono = nuevoTelefono
    }

    verEntrenador() {
        console.log("Nombre del entrenador: " + this.nombre)
        console.log("Especialidad: " + this.especialidad)
        console.log("Teléfono: " + this.telefono)
    }
}

export default Entrenadores