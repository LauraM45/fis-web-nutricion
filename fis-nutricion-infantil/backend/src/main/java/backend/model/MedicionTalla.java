package backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "mediciones_talla")
public class MedicionTalla extends Medicion {
    private double talla;

    @Override
    public void consultarMedicion() {}

    @Override
    public void registrarMedicion() {}

    public double getTalla() {
        return talla;
    }

    public void setTalla(double talla) {
        this.talla = talla;
    }

}
