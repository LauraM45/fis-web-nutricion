package backend.model;

public interface Autenticable {
    void cerrarSesion();
    boolean iniciarSesion();
}
