package backend.service;

import backend.model.Infante;
import backend.repository.InfanteRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class InfanteService {
    private final InfanteRepository infanteRepository;

    public InfanteService(InfanteRepository infanteRepository) {
        this.infanteRepository = infanteRepository;
    }

    public Infante guardar(Infante infante) {
        return infanteRepository.save(infante);
    }

    public List<Infante> listar() {
        return infanteRepository.findAll();
    }

    public Optional<Infante> buscarPorId(Integer id) {
        return infanteRepository.findById(id);
    }

    public void eliminar(Integer id) {
        infanteRepository.deleteById(id);
    }
}
