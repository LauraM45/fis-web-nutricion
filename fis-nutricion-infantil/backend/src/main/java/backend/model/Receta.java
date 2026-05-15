package backend.model;

import java.util.ArrayList;
import java.util.List;

public class Receta {
    private double calorias;
    private String categoria;
    private String descripcion;
    private int idReceta;
    private String nombre;
    private String preparacion;
    private List<Ingrediente> ingredientes;

    public Receta() {
        this.ingredientes = new ArrayList<>();
    }

    public List<Ingrediente> mostrarIngredientes() {
        return ingredientes;
    }

    public double obtenerAporteCalorico() {
        return calorias;
    }

    public boolean validarRestricciones() {
        return true;
    }

    public double getCalorias() {
        return calorias;
    }

    public void setCalorias(double calorias) {
        this.calorias = calorias;
    }

    public String getCategoria() {
        return categoria;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public int getIdReceta() {
        return idReceta;
    }

    public void setIdReceta(int idReceta) {
        this.idReceta = idReceta;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getPreparacion() {
        return preparacion;
    }

    public void setPreparacion(String preparacion) {
        this.preparacion = preparacion;
    }

    public List<Ingrediente> getIngredientes() {
        return ingredientes;
    }

    public void setIngredientes(List<Ingrediente> ingredientes) {
        this.ingredientes = ingredientes;
    }
}
