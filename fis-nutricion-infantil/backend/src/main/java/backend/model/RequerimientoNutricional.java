package backend.model;

public class RequerimientoNutricional {
    private double aguaRecomendada;
    private double caloriasRecomendadas;

    public void mostrarRequerimientos() {}

    public double getAguaRecomendada() {
        return aguaRecomendada;
    }

    public void setAguaRecomendada(double aguaRecomendada) {
        this.aguaRecomendada = aguaRecomendada;
    }

    public double getCaloriasRecomendadas() {
        return caloriasRecomendadas;
    }

    public void setCaloriasRecomendadas(double caloriasRecomendadas) {
        this.caloriasRecomendadas = caloriasRecomendadas;
    }
}
