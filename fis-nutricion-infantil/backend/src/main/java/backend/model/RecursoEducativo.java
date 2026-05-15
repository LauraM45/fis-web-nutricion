package backend.model;

public class RecursoEducativo extends BibliotecaRecursos {
    private String contenido;
    private String fuente;
    private int idRecurso;
    private String titulo;

    @Override
    public void agregar() {}

    @Override
    public void eliminar() {}

    @Override
    public String mostrarContenido() {
        return titulo + ": " + contenido;
    }

    @Override
    public BibliotecaRecursos obtenerRecurso() {
        return this;
    }

    public String getContenido() {
        return contenido;
    }

    public void setContenido(String contenido) {
        this.contenido = contenido;
    }

    public String getFuente() {
        return fuente;
    }

    public void setFuente(String fuente) {
        this.fuente = fuente;
    }

    public int getIdRecurso() {
        return idRecurso;
    }

    public void setIdRecurso(int idRecurso) {
        this.idRecurso = idRecurso;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }
}
