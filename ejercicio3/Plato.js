class Plato {

    nombre
    categoria
    precio
    disponibilidad

    constructor(nombre, categoria, precio, disponibilidad) {
        this.nombre = nombre
        this.categoria = categoria
        this.precio = precio
        this.disponibilidad = disponibilidad
    }

    registrarNombre(nuevoNombre) {
        this.nombre = nuevoNombre
    }

    registrarCategoria(nuevaCategoria) {
        this.categoria = nuevaCategoria
    }

    registrarPrecio(nuevoPrecio) {
        this.precio = nuevoPrecio
    }

    registrarDisponibilidad(nuevaDisponibilidad) {
        this.disponibilidad = nuevaDisponibilidad
    }

    verPlato() {
        console.log("Nombre del plato: " + this.nombre)
        console.log("Categoría: " + this.categoria)
        console.log("Precio: " + this.precio)
        console.log("Disponibilidad: " + this.disponibilidad)
    }
}

export default Plato