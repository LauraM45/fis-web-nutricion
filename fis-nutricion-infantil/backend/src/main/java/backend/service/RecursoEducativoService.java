package backend.service;

import backend.model.BibliotecaRecursos;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class RecursoEducativoService {
    private final List<BibliotecaRecursos> recursos = new ArrayList<>();

    public BibliotecaRecursos agregar(BibliotecaRecursos recurso) {
        recurso.agregar();
        recursos.add(recurso);
        return recurso;
    }

    public void eliminar(BibliotecaRecursos recurso) {
        recurso.eliminar();
        recursos.remove(recurso);
    }

    public List<BibliotecaRecursos> listar() {
        return recursos;
    }

    public String mostrarContenido(BibliotecaRecursos recurso) {
        return recurso.mostrarContenido();
    }
}
