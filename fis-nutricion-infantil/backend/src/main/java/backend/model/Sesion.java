package backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.time.LocalDate;
import java.util.UUID;

@Entity
@Table(name = "sesiones")
public class Sesion {
    private boolean estado;
    private LocalDate fechaInicio;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idSesion;
    private String tokenSesion;

    public boolean generarSesion() {
        this.estado = true;
        this.fechaInicio = LocalDate.now();
        this.tokenSesion = UUID.randomUUID().toString();
        return true;
    }

    public void invalidarSesion() {
        this.estado = false;
        this.tokenSesion = null;
    }

    public boolean isEstado() {
        return estado;
    }

    public void setEstado(boolean estado) {
        this.estado = estado;
    }

    public LocalDate getFechaInicio() {
        return fechaInicio;
    }

    public void setFechaInicio(LocalDate fechaInicio) {
        this.fechaInicio = fechaInicio;
    }

    public int getIdSesion() {
        return idSesion;
    }

    public void setIdSesion(int idSesion) {
        this.idSesion = idSesion;
    }

    public String getTokenSesion() {
        return tokenSesion;
    }

    public void setTokenSesion(String tokenSesion) {
        this.tokenSesion = tokenSesion;
    }

    public boolean validarCredenciales() {
        return true;
    }

    public boolean verificarSesionActual() {
        return estado && tokenSesion != null;
    }

    public void cerrarSesion() {
        invalidarSesion();
    }
}
