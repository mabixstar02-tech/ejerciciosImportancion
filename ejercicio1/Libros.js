class Libros {

    nombre
    editorial
    autor

    constructor(nombre, editorial, autor) {
        this.nombre = nombre
        this.editorial = editorial
        this.autor = autor
    }

    registrarNombre(nuevoNombre) {
        this.nombre = nuevoNombre
    }

    registrarEditorial(nuevaEditorial) {
        this.editorial = nuevaEditorial
    }

    registrarAutor(nuevoAutor) {
        this.autor = nuevoAutor
    }

    verLibro() {
        console.log("Nombre del libro: " + this.nombre, "Editorial: " + this.editorial, "Autor: " + this.autor)
    }
}

export default Libros