package backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name = "recuperaciones_cuenta")
public class RecuperacionCuenta {
    private boolean estadoToken;
    private LocalDateTime fechaExpiracion;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idRecuperacion;
    private String tokenRecuperacion;

    public void enviarCorreoRecuperacion() {
        generarToken();
    }

    public String generarToken() {
        this.estadoToken = true;
        this.fechaExpiracion = LocalDateTime.now().plusMinutes(30);
        this.tokenRecuperacion = UUID.randomUUID().toString();
        return tokenRecuperacion;
    }

    public void restablecerContrasena() {
        this.estadoToken = false;
    }

    public boolean validarToken() {
        return estadoToken && fechaExpiracion != null && fechaExpiracion.isAfter(LocalDateTime.now());
    }
}
