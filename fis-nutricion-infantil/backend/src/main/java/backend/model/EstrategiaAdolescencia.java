package backend.model;

public class EstrategiaAdolescencia implements IEstrategiaNutricional {
    private int edadMax;
    private int edadMin;

    public EstrategiaAdolescencia() {
        this.edadMin = 11;
        this.edadMax = 13;
    }

    public double calcularCalorias() { return 0; }
    public double calcularIMC() { return 0; }
    public double calcularRequerimientoHidrico() { return 0; }
    public double calcularTMB() { return 0; }

    public int getEdadMax() {
        return edadMax;
    }

    public void setEdadMax(int edadMax) {
        this.edadMax = edadMax;
    }

    public int getEdadMin() {
        return edadMin;
    }

    public void setEdadMin(int edadMin) {
        this.edadMin = edadMin;
    }
}
