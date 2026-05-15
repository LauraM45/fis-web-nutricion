package backend.model;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "historiales_medicion")
public class HistorialMedicion {
    private int cantidadRegistros;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idHistorial;

    @OneToMany(mappedBy = "historialMedicion", cascade = CascadeType.ALL)
    private List<Medicion> mediciones;

    public HistorialMedicion() {
        this.mediciones = new ArrayList<>();
    }

    public void almacenarMedicion() {}

    public void consultarHistorial() {}

    public void eliminarRegistro() {}

    public int getCantidadRegistros() {
        return cantidadRegistros;
    }

    public void setCantidadRegistros(int cantidadRegistros) {
        this.cantidadRegistros = cantidadRegistros;
    }

    public int getIdHistorial() {
        return idHistorial;
    }

    public void setIdHistorial(int idHistorial) {
        this.idHistorial = idHistorial;
    }

    public List<Medicion> getMediciones() {
        return mediciones;
    }

    public void setMediciones(List<Medicion> mediciones) {
        this.mediciones = mediciones;
        this.cantidadRegistros = mediciones == null ? 0 : mediciones.size();
    }

}
