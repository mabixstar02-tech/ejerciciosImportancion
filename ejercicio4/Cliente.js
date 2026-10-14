class Cliente {

    nombre
    documento
    telefono
    alquileres

    constructor(nombre, documento, telefono) {
        this.nombre = nombre
        this.documento = documento
        this.telefono = telefono
        this.alquileres = []
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

    registrarAlquiler(alquiler) {
        this.alquileres.push(alquiler)
    }

    verCliente() {
        console.log("Nombre: " + this.nombre)
        console.log("Documento: " + this.documento)
        console.log("Telefono: " + this.telefono)
    }
}

export default Cliente