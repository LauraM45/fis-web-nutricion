package backend.model;

public class RecetaPersonalizadaBuilder implements IRecetaBuilder {
    private Receta receta;

    public RecetaPersonalizadaBuilder() {
        this.receta = new Receta();
    }

    public void agregarCarbohidratoCompuesto() {}
    public void agregarCarbohidratoSimple() {}
    public void agregarGrasaSaludable() {}
    public void agregarProteina() {}
    public void obtenerResultado() {}

    public Receta getReceta() {
        return receta;
    }

    public void setReceta(Receta receta) {
        this.receta = receta;
    }
}
