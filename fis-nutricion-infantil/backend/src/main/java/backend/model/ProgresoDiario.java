package backend.model;

import java.time.LocalDate;

public class ProgresoDiario {
    private LocalDate fecha;
    private double porcentajeAgua;
    private double porcentajeCalorias;

    public ProgresoDiario() {
        this.fecha = LocalDate.now();
    }

    public void calcularProgreso() {}

    public void mostrarProgreso() {}

    public LocalDate getFecha() {
        return fecha;
    }

    public void setFecha(LocalDate fecha) {
        this.fecha = fecha;
    }

    public double getPorcentajeAgua() {
        return porcentajeAgua;
    }

    public void setPorcentajeAgua(double porcentajeAgua) {
        this.porcentajeAgua = porcentajeAgua;
    }

    public double getPorcentajeCalorias() {
        return porcentajeCalorias;
    }

    public void setPorcentajeCalorias(double porcentajeCalorias) {
        this.porcentajeCalorias = porcentajeCalorias;
    }

}
