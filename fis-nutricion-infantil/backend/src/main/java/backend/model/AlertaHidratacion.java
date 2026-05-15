package backend.model;

public class AlertaHidratacion extends Alertas {
    private double cantidadAgua;

    @Override
    public void cancelarAlerta() {
        super.cancelarAlerta();
    }

    @Override
    public void enviarNotificacion() {
        super.enviarNotificacion();
    }

    public String generarRecordatorioHidratacion() {
        return "Recordatorio de hidratacion";
    }

    @Override
     public void programarAlerta() {
        super.programarAlerta();
    }

    public double getCantidadAgua() {
        return cantidadAgua;
    }

    public void setCantidadAgua(double cantidadAgua) {
        this.cantidadAgua = cantidadAgua;
    }
}
