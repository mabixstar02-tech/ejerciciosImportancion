class Alquiler {

    fechaInicio
    fechaFinalizacion
    cliente
    vehiculo

    constructor(fechaInicio, fechaFinalizacion, cliente, vehiculo) {
        this.fechaInicio = fechaInicio
        this.fechaFinalizacion = fechaFinalizacion
        this.cliente = cliente
        this.vehiculo = vehiculo
    }

    verAlquiler() {
        console.log("INFORMACION DEL ALQUILER")
        console.log("Fecha de inicio: " + this.fechaInicio)
        console.log("Fecha de finalizacion: " + this.fechaFinalizacion)

        console.log("DATOS DEL CLIENTE")
        this.cliente.verCliente()

        console.log("DATOS DEL VEHICULO")
        this.vehiculo.verVehiculo()
    }
}

export default Alquiler