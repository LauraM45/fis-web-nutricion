package backend.model;

public class RecordatorioComida extends Alertas {
    private String tipoComida;

    @Override
    public void cancelarAlerta() {
        super.cancelarAlerta();
    }

    @Override
    public void enviarNotificacion() {
        super.enviarNotificacion();
    }

    public String generarRecordatorioComida() {
        return "Recordatorio de comida";
    }

    @Override
    public void programarAlerta() {
        super.programarAlerta();
    }

    public String getTipoComida() {
        return tipoComida;
    }

    public void setTipoComida(String tipoComida) {
        this.tipoComida = tipoComida;
    }
}
