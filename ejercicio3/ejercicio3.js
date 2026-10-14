// Un restaurante necesita desarrollar un sistema para gestionar clientes, platos y pedidos.
// La clase Plato debe almacenar el nombre del plato, categoría, precio y disponibilidad.
// La clase Cliente debe almacenar nombre, documento y teléfono. Un cliente puede realizar varios pedidos.
// La clase Pedido debe almacenar la fecha, número de pedido, cliente y los platos solicitados.
// Un pedido puede contener varios platos y un mismo plato puede formar parte de varios pedidos.

import Plato from "./Plato.js";

import Cliente from "./Cliente.js";

import Pedido from "./Pedido.js";

// Instancias de los platos

let bandejaPaisa = new Plato("Bandeja paisa", "Almuerzo", 18000, true);

let hamburguesa = new Plato("Hamburguesa", "Comida rápida", 15000, true);

let pizza = new Plato("Pizza", "Comida rápida", 22000, true);

let ensalada = new Plato("Ensalada", "Entrada", 8000, false);

// Mostrar información de los platos

bandejaPaisa.verPlato();

hamburguesa.verPlato();

pizza.verPlato();

ensalada.verPlato();

// Instancia del cliente

let cliente1 = new Cliente("Mabel Muñoz", "123456", "3001234567");

cliente1.verInfo();

// Crear pedidos

let pedido1 = new Pedido("12/10/2026", 1, cliente1);

let pedido2 = new Pedido("13/10/2026", 2, cliente1);

// Registrar platos en el primer pedido

pedido1.registrarPlato(bandejaPaisa);

pedido1.registrarPlato(hamburguesa);

// Registrar platos en el segundo pedido

pedido2.registrarPlato(pizza);

pedido2.registrarPlato(bandejaPaisa);

// Mostrar los pedidos

pedido1.verPedido();

pedido2.verPedido();

// Registrar los pedidos al cliente

cliente1.registrarPedido(pedido1);

cliente1.registrarPedido(pedido2);

// Mostrar los pedidos realizados por el cliente

cliente1.verPedidos();