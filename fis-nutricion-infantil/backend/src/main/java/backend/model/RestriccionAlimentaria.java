package backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;

@Entity
@Inheritance(strategy = InheritanceType.JOINED)
public abstract class RestriccionAlimentaria {
    protected String descripcion;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    protected int idRestriccion;

    protected String nombre;


    public void agregarRestriccion() {}
    public void consultarRestriccion() {}
    public void eliminarRestriccion() {}
}
