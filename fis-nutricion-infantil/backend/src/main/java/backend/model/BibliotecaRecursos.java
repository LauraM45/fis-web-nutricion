package backend.model;

public abstract class BibliotecaRecursos {
    public abstract void agregar();
    public abstract void eliminar();
    public abstract String mostrarContenido();
    public abstract BibliotecaRecursos obtenerRecurso();
}
