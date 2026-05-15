package backend.model;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "perfiles_tutor")
public class PerfilTutor extends Perfil implements Autenticable {
    @Column(nullable = false)
    private String contrasena;

    @Column(nullable = false, unique = true)
    private String correo;

    @OneToOne(cascade = CascadeType.ALL)
    private Sesion sesion;

    @OneToOne(cascade = CascadeType.ALL)
    private RecuperacionCuenta recuperacionCuenta;

    @OneToMany(mappedBy = "perfilTutor", cascade = CascadeType.ALL)
    private List<PerfilInfantil> perfilesInfantiles;

    public PerfilTutor() {
        this.sesion = new Sesion();
        this.recuperacionCuenta = new RecuperacionCuenta();
        this.perfilesInfantiles = new ArrayList<>();
    }

    public void actualizarDatos() {}

    @Override
    public void cerrarSesion() {
        sesion.cerrarSesion();
    }

    @Override
    public boolean iniciarSesion() {
        return sesion.generarSesion();
    }

    public void registrarse() {}

    @Override
    public void crearPerfil() {}

    @Override
    public void editarPerfil() {}

    @Override
    public void eliminarPerfil() {}
}
