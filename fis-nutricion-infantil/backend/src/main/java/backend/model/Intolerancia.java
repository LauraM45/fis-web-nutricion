package backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "intolerancias")
public class Intolerancia extends RestriccionAlimentaria {
    private String gradoIntolerancia;

    @Override
    public void agregarRestriccion() {}

    @Override
    public void consultarRestriccion() {}

    @Override
    public void eliminarRestriccion() {}

    public boolean validarIntolerancia() {
        return true;
    }
    public String getGradoIntolerancia() {
        return gradoIntolerancia;
    }

    public void setGradoIntolerancia(String gradoIntolerancia) {
        this.gradoIntolerancia = gradoIntolerancia;
    }
}
