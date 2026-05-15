package backend.model;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Transient;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "perfiles_infantiles")
public class PerfilInfantil extends Perfil {
    @OneToOne(cascade = CascadeType.ALL)
    private Infante infante;

    @OneToOne(cascade = CascadeType.ALL)
    private HistorialMedicion historialMedicion;

    @Transient
    private ControlNutricional controlNutricional;

    @ManyToMany
    @JoinTable(
            name = "perfil_infantil_restricciones",
            joinColumns = @JoinColumn(name = "perfil_infantil_id"),
            inverseJoinColumns = @JoinColumn(name = "restriccion_id")
    )
    private List<RestriccionAlimentaria> restricciones;

    @ManyToOne
    @JoinColumn(name = "perfil_tutor_id")
    private PerfilTutor perfilTutor;
    public PerfilInfantil() {
        this.historialMedicion = new HistorialMedicion();
        this.controlNutricional = new ControlNutricional();
        this.restricciones = new ArrayList<>();
    }

    public void actualizarPerfil() {}
    public void consultarPerfil() {}

    @Override
    public void crearPerfil() {}

    @Override
    public void editarPerfil() {}

    @Override
    public void eliminarPerfil() {}
}
