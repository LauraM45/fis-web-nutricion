package backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;
import java.time.LocalDate;

@Entity
@Inheritance(strategy = InheritanceType.JOINED)
public abstract class Perfil {
    protected boolean estado;
    protected LocalDate fechaCreacion;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    protected int idPerfil;


    public Perfil() {
        this.estado = true;
        this.fechaCreacion = LocalDate.now();
    }

    public abstract void crearPerfil();
    public abstract void editarPerfil();
    public abstract void eliminarPerfil();
}
