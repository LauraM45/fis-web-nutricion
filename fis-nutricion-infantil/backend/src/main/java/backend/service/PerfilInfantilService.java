package backend.service;

import backend.model.PerfilInfantil;
import backend.repository.PerfilInfantilRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PerfilInfantilService {
    private final PerfilInfantilRepository perfilInfantilRepository;

    public PerfilInfantilService(PerfilInfantilRepository perfilInfantilRepository) {
        this.perfilInfantilRepository = perfilInfantilRepository;
    }

    public PerfilInfantil crear(PerfilInfantil perfilInfantil) {
        perfilInfantil.crearPerfil();
        return perfilInfantilRepository.save(perfilInfantil);
    }

    public PerfilInfantil actualizar(Integer id, PerfilInfantil perfilInfantil) {
        if (!perfilInfantilRepository.existsById(id)) {
            throw new IllegalArgumentException("Perfil infantil no encontrado.");
        }
        perfilInfantil.actualizarPerfil();
        return perfilInfantilRepository.save(perfilInfantil);
    }

    public List<PerfilInfantil> listar() {
        return perfilInfantilRepository.findAll();
    }

    public List<PerfilInfantil> listarPorTutor(Integer idPerfilTutor) {
        return perfilInfantilRepository.findByPerfilTutorIdPerfil(idPerfilTutor);
    }

    public Optional<PerfilInfantil> buscarPorId(Integer id) {
        return perfilInfantilRepository.findById(id);
    }

    public void eliminar(Integer id) {
        perfilInfantilRepository.deleteById(id);
    }
}
