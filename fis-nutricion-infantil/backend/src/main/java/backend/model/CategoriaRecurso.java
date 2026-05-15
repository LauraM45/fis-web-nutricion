package backend.model;

import java.util.ArrayList;
import java.util.List;

public class CategoriaRecurso extends BibliotecaRecursos {
    private List<BibliotecaRecursos> componentes;
    private String nombreCategoria;

    public CategoriaRecurso() {
        this.componentes = new ArrayList<>();
    }

    @Override
    public void agregar() {}

    @Override
    public void eliminar() {}

    @Override
    public String mostrarContenido() {
        return nombreCategoria;
    }

    @Override
    public BibliotecaRecursos obtenerRecurso() {
        return this;
    }

    public List<BibliotecaRecursos> getComponentes() {
        return componentes;
    }

    public void setComponentes(List<BibliotecaRecursos> componentes) {
        this.componentes = componentes;
    }

    public String getNombreCategoria() {
        return nombreCategoria;
    }

    public void setNombreCategoria(String nombreCategoria) {
        this.nombreCategoria = nombreCategoria;
    }
}
 