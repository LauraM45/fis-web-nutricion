package backend.model;

import java.time.LocalDate;

public abstract class GraficaCrecimiento {
    protected LocalDate fechaGeneracion;
    protected int idGrafica;

    public GraficaCrecimiento() {
        this.fechaGeneracion = LocalDate.now();
    }

    public abstract void generarGrafica();
    public abstract void mostrarGrafica();
}
