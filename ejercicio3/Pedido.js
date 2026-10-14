class Pedido {

    fecha
    numeroPedido
    cliente
    platos

    constructor(fecha, numeroPedido, cliente) {
        this.fecha = fecha
        this.numeroPedido = numeroPedido
        this.cliente = cliente
        this.platos = []
    }

    registrarPlato(plato) {
        if (plato.disponibilidad == true) {
            this.platos.push(plato)
            console.log("Plato agregado al pedido: " + plato.nombre)
        } else {
            console.log("El plato no está disponible: " + plato.nombre)
        }
    }

    verPedido() {
        console.log("Número de pedido: " + this.numeroPedido)
        console.log("Fecha: " + this.fecha)
        console.log("Cliente: " + this.cliente.nombre)

        console.log("Platos solicitados:")

        let total = 0

        for (let i = 0; i < this.platos.length; i++) {
            console.log(this.platos[i].nombre + " - Precio: " + this.platos[i].precio)
            total = total + this.platos[i].precio
        }

        console.log("Total del pedido: " + total)
    }
}

export default Pedido