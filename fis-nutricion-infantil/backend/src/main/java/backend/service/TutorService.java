package backend.service;

import backend.model.Tutor;
import backend.repository.TutorRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TutorService {
    private final TutorRepository tutorRepository;

    public TutorService(TutorRepository tutorRepository) {
        this.tutorRepository = tutorRepository;
    }

    public Tutor guardar(Tutor tutor) {
        return tutorRepository.save(tutor);
    }

    public List<Tutor> listar() {
        return tutorRepository.findAll();
    }

    public Optional<Tutor> buscarPorId(Integer id) {
        return tutorRepository.findById(id);
    }

    public void eliminar(Integer id) {
        tutorRepository.deleteById(id);
    }
}
