package backend.model;

public class EstrategiaPrimeraInfancia implements IEstrategiaNutricional {
    private int edadMax;
    private int edadMin;

    public EstrategiaPrimeraInfancia() {
        this.edadMin = 2;
        this.edadMax = 5;
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