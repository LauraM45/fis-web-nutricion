package backend.model;

import java.util.ArrayList;
import java.util.List;

public abstract class Alertas {
    protected boolean estado;
    protected String frecuencia;
    protected String horaProgramada;
    protected int idAlerta;
    protected String mensaje;
    protected List<IObserver> observadores;

    public Alertas() {
        this.observadores = new ArrayList<>();
    }

    public void cancelarAlerta() {
        this.estado = false;
    }

    public void enviarNotificacion() {
        for (IObserver observador : observadores) {
            observador.actualizar();
        }
    }

    public void programarAlerta() {
        this.estado = true;
    }

    public boolean isEstado() {
        return estado;
    }

    public void setEstado(boolean estado) {
        this.estado = estado;
    }

    public String getFrecuencia() {
        return frecuencia;
    }

    public void setFrecuencia(String frecuencia) {
        this.frecuencia = frecuencia;
    }

    public String getHoraProgramada() {
        return horaProgramada;
    }

    public void setHoraProgramada(String horaProgramada) {
        this.horaProgramada = horaProgramada;
    }

    public int getIdAlerta() {
        return idAlerta;
    }

    public void setIdAlerta(int idAlerta) {
        this.idAlerta = idAlerta;
    }

    public String getMensaje() {
        return mensaje;
    }

    public void setMensaje(String mensaje) {
        this.mensaje = mensaje;
    }

    public List<IObserver> getObservadores() {
        return observadores;
    }

    public void setObservadores(List<IObserver> observadores) {
        this.observadores = observadores;
    }
}
