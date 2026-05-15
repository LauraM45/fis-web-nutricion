package backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "mediciones_peso")
public class MedicionPeso extends Medicion {
    private double peso;

    @Override
    public void consultarMedicion() {}

    @Override
    public void registrarMedicion() {}

    public double getPeso() {
        return peso;
    }

    public void setPeso(double peso) {
        this.peso = peso;
    }

}
