package backend.model;

public class FachadaNutricional {
    private ControlNutricional controlNutricional;

    public FachadaNutricional() {
        this.controlNutricional = new ControlNutricional();
    }

    public EstadoNutricional consultarEstadoNutricional() {
        return controlNutricional.evaluarEstado();
    }

    public ParametroNutricional consultarParametros() {
        return controlNutricional.generarParametros();
    }

    public RequerimientoNutricional consultarRequerimientos() {
        return controlNutricional.generarRequerimiento();
    }

    public void generarAnalisisNutricional() {
        controlNutricional.aplicarControlNutricional();
    }
}
