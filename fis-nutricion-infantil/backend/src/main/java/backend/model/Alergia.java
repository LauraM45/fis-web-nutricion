package backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "alergias")
public class Alergia extends RestriccionAlimentaria {
    private String nivelRiesgo;

    @Override
    public void agregarRestriccion() {}

    @Override
    public void consultarRestriccion() {}

    @Override
    public void eliminarRestriccion() {}

    public boolean validarAlergia() {
        return true;
    }

    public String getNivelRiesgo() {
        return nivelRiesgo;
    }

    public void setNivelRiesgo(String nivelRiesgo) {
        this.nivelRiesgo = nivelRiesgo;
    }
}
