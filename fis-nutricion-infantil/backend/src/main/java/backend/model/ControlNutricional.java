package backend.model;

public class ControlNutricional {
    private EstadoNutricional estado;
    private IEstrategiaNutricional estrategia;
    private ParametroNutricional parametro;
    private RequerimientoNutricional requerimiento;

    public ControlNutricional() {
        this.estado = new EstadoNutricional();
        this.parametro = new ParametroNutricional();
        this.requerimiento = new RequerimientoNutricional();
    }

    public void aplicarControlNutricional() {}

    public EstadoNutricional evaluarEstado() {
        return estado;
    }

    public ParametroNutricional generarParametros() {
        return parametro;
    }

    public RequerimientoNutricional generarRequerimiento() {
        return requerimiento;
    }

     public void setEstrategia() {}

    public EstadoNutricional getEstado() {
        return estado;
    }

    public void setEstado(EstadoNutricional estado) {
        this.estado = estado;
    }

    public IEstrategiaNutricional getEstrategia() {
        return estrategia;
    }

    public void setEstrategia(IEstrategiaNutricional estrategia) {
        this.estrategia = estrategia;
    }

    public ParametroNutricional getParametro() {
        return parametro;
    }

    public void setParametro(ParametroNutricional parametro) {
        this.parametro = parametro;
    }

    public RequerimientoNutricional getRequerimiento() {
        return requerimiento;
    }

    public void setRequerimiento(RequerimientoNutricional requerimiento) {
        this.requerimiento = requerimiento;
    }
}