class Medico {

    nombre
    documento
    especialidad
    telefono

    constructor(nombre, documento, especialidad, telefono) {
        this.nombre = nombre
        this.documento = documento
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

    verInfo() {
        console.log("Nombre del médico: " + this.nombre)
        console.log("Documento: " + this.documento)
        console.log("Especialidad: " + this.especialidad)
        console.log("Teléfono: " + this.telefono)
    }
}

export default Medico