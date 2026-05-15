package backend.model;

public abstract class Ingrediente {
    protected double cantidad;
    protected int idIngrediente;
    protected String nombre;
    protected String unidadMedida;

    public String mostrarIngrediente() {
        return cantidad + " " + unidadMedida + " " + nombre;
    }
}
