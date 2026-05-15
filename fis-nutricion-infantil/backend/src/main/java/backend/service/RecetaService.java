package backend.service;

import backend.model.Receta;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class RecetaService {
    private final List<Receta> recetas = new ArrayList<>();

    public Receta guardar(Receta receta) {
        recetas.add(receta);
        return receta;
    }

    public List<Receta> listar() {
        return recetas;
    }

    public List<Receta> consultarRecetarioPersonalizado() {
        return recetas.stream()
                .filter(Receta::validarRestricciones)
                .toList();
    }

    public List<Receta> recomendarPorAporteCalorico(double caloriasMaximas) {
        return recetas.stream()
                .filter(receta -> receta.obtenerAporteCalorico() <= caloriasMaximas)
                .toList();
    }

    public Optional<Receta> buscarPorIndice(int indice) {
        if (indice < 0 || indice >= recetas.size()) {
            return Optional.empty();
        }
        return Optional.of(recetas.get(indice));
    }
}
