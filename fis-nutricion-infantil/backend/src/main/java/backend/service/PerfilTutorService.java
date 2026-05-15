package backend.service;

import backend.model.PerfilTutor;
import backend.repository.PerfilTutorRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PerfilTutorService {
    private final PerfilTutorRepository perfilTutorRepository;

    public PerfilTutorService(PerfilTutorRepository perfilTutorRepository) {
        this.perfilTutorRepository = perfilTutorRepository;
    }

    public PerfilTutor guardar(PerfilTutor perfilTutor) {
        perfilTutor.crearPerfil();
        return perfilTutorRepository.save(perfilTutor);
    }

    public PerfilTutor actualizar(Integer id, PerfilTutor perfilTutor) {
        if (!perfilTutorRepository.existsById(id)) {
            throw new IllegalArgumentException("Perfil tutor no encontrado.");
        }
        perfilTutor.actualizarDatos();
        return perfilTutorRepository.save(perfilTutor);
    }

    public List<PerfilTutor> listar() {
        return perfilTutorRepository.findAll();
    }

    public Optional<PerfilTutor> buscarPorId(Integer id) {
        return perfilTutorRepository.findById(id);
    }

    public Optional<PerfilTutor> buscarPorCorreo(String correo) {
        return perfilTutorRepository.findByCorreo(correo);
    }

    public void eliminar(Integer id) {
        perfilTutorRepository.deleteById(id);
    }
}
