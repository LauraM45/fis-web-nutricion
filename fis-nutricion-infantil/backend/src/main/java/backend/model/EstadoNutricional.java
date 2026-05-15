package backend.model;

public class EstadoNutricional {
    private String clasificacionIMC;
    private String nivelRiesgo;
    private String observacion;

    public String evaluarIMC() {
        return clasificacionIMC;
    }

    public String generarObservacion() {
        return observacion;
    }

    public String mostrarEstado() {
        return clasificacionIMC + " - " + nivelRiesgo;
    }
}
