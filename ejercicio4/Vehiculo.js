class Vehiculo {

    placa
    marca
    modelo
    tipo

    constructor(placa, marca, modelo, tipo) {
        this.placa = placa
        this.marca = marca
        this.modelo = modelo
        this.tipo = tipo
    }

    registrarPlaca(nuevaPlaca) {
        this.placa = nuevaPlaca
    }

    registrarMarca(nuevaMarca) {
        this.marca = nuevaMarca
    }

    registrarModelo(nuevoModelo) {
        this.modelo = nuevoModelo
    }

    registrarTipo(nuevoTipo) {
        this.tipo = nuevoTipo
    }

    verVehiculo() {
        console.log("Placa: " + this.placa)
        console.log("Marca: " + this.marca)
        console.log("Modelo: " + this.modelo)
        console.log("Tipo de vehiculo: " + this.tipo)
    }
}

export default Vehiculo