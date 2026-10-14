class Cliente {

    nombre
    documento
    telefono
    pedidos

    constructor(nombre, documento, telefono) {
        this.nombre = nombre
        this.documento = documento
        this.telefono = telefono
        this.pedidos = []
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

    registrarPedido(pedido) {
        this.pedidos.push(pedido)
    }

    verInfo() {
        console.log("Nombre del cliente: " + this.nombre)
        console.log("Documento: " + this.documento)
        console.log("Teléfono: " + this.telefono)
    }

    verPedidos() {
        for (let i = 0; i < this.pedidos.length; i++) {
            console.log("Pedido número: " + this.pedidos[i].numeroPedido)
        }
    }
}

export default Cliente