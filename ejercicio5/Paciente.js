class Paciente {

    nombre
    documento
    edad
    telefono

    constructor(nombre, documento, edad, telefono) {
        this.nombre = nombre
        this.documento = documento
        this.edad = edad
        this.telefono = telefono
    }

    registrarNombre(nuevoNombre) {
        this.nombre = nuevoNombre
    }

    registrarDocumento(nuevoDocumento) {
        this.documento = nuevoDocumento
    }

    registrarEdad(nuevaEdad) {
        this.edad = nuevaEdad
    }

    registrarTelefono(nuevoTelefono) {
        this.telefono = nuevoTelefono
    }

    verInfo() {
        console.log("Nombre del paciente: " + this.nombre)
        console.log("Documento: " + this.documento)
        console.log("Edad: " + this.edad)
        console.log("Teléfono: " + this.telefono)
    }
}

export default Paciente