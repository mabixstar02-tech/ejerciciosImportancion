import Rutinas from "./Rutinas.js";

class Clientes {

    nombre
    documento
    telefono
    edad
    rutinas

    constructor(nombre, documento, telefono, edad) {
        this.nombre = nombre
        this.documento = documento
        this.telefono = telefono
        this.edad = edad
        this.rutinas = []
    }

    registrarNombre(nuevoNombre) {
        this.nombre = nuevoNombre
    }

    registrarDocumento(nuevoDocumento) {
        this.documento = nuevoDocumento
    }

    registrarTelefono(nuevoTelefono) {
        this.telefono = nuevoTelefono
    }

    registrarEdad(nuevaEdad) {
        this.edad = nuevaEdad
    }

    asignarRutina(rutina) {
        this.rutinas.push(rutina)
    }

    verCliente() {
        console.log("Nombre del cliente: " + this.nombre)
        console.log("Documento: " + this.documento)
        console.log("Teléfono: " + this.telefono)
        console.log("Edad: " + this.edad)

        console.log("Rutinas asignadas:")

        for (let i = 0; i < this.rutinas.length; i++) {
            this.rutinas[i].verRutina()
        }
    }
}

export default Clientes