class Cita {

    fecha
    hora
    motivo
    paciente
    medico

    constructor(fecha, hora, motivo, paciente, medico) {
        this.fecha = fecha
        this.hora = hora
        this.motivo = motivo
        this.paciente = paciente
        this.medico = medico
    }

    registrarFecha(nuevaFecha) {
        this.fecha = nuevaFecha
    }

    registrarHora(nuevaHora) {
        this.hora = nuevaHora
    }

    registrarMotivo(nuevoMotivo) {
        this.motivo = nuevoMotivo
    }

    verCita() {
        console.log("INFORMACIÓN DE LA CITA")
        console.log("Fecha: " + this.fecha)
        console.log("Hora: " + this.hora)
        console.log("Motivo de consulta: " + this.motivo)

        console.log("DATOS DEL PACIENTE")
        this.paciente.verInfo()

        console.log("DATOS DEL MÉDICO")
        this.medico.verInfo()
    }
}

export default Cita