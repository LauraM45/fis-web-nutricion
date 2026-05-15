package backend.model;

public interface IRecetaBuilder {
    void agregarCarbohidratoCompuesto();
    void agregarCarbohidratoSimple();
    void agregarGrasaSaludable();
    void agregarProteina();
    void obtenerResultado();
}
