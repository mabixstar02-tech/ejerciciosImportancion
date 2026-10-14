import Libros from "./Libros.js";

class Prestamos{

    fechaPrestamo
    fechaDevolucion

    constructor(libro, fechaPrestamo, fechaDevolucion){
        this.fechaPrestamo=fechaPrestamo
        this.fechaDevolucion=fechaDevolucion
        this.libro=[];
    }
    registrarLibros(libro){
        this.libro.push(libro)
    }
    verLibro(){
        for(let i=0;i<this.libro.length;i++){
            console.log(this.libro[i] + "Fecha prestamo: " + this.fechaPrestamo)
        }
    }
}
export default Prestamos