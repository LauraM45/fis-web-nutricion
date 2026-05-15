package backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import java.time.LocalDateTime;

@Entity
@Inheritance(strategy = InheritanceType.JOINED)
public abstract class Medicion {
    protected LocalDateTime fechaRegistro;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    protected int idMedicion;

    @ManyToOne
    @JoinColumn(name = "historial_id")
    protected HistorialMedicion historialMedicion;

    public Medicion() {
        this.fechaRegistro = LocalDateTime.now();
    }

    public abstract void consultarMedicion();
    public abstract void registrarMedicion();
}
