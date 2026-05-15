package backend.service;

import backend.model.Alergia;
import backend.model.Intolerancia;
import backend.repository.AlergiaRepository;
import backend.repository.IntoleranciaRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RestriccionAlimentariaService {
    private final AlergiaRepository alergiaRepository;
    private final IntoleranciaRepository intoleranciaRepository;

    public RestriccionAlimentariaService(AlergiaRepository alergiaRepository,
                                         IntoleranciaRepository intoleranciaRepository) {
        this.alergiaRepository = alergiaRepository;
        this.intoleranciaRepository = intoleranciaRepository;
    }

    public Alergia guardarAlergia(Alergia alergia) {
        alergia.agregarRestriccion();
        return alergiaRepository.save(alergia);
    }

    public Intolerancia guardarIntolerancia(Intolerancia intolerancia) {
        intolerancia.agregarRestriccion();
        return intoleranciaRepository.save(intolerancia);
    }

    public List<Alergia> listarAlergias() {
        return alergiaRepository.findAll();
    }

    public List<Intolerancia> listarIntolerancias() {
        return intoleranciaRepository.findAll();
    }

    public Optional<Alergia> buscarAlergiaPorNombre(String nombre) {
        return alergiaRepository.findByNombre(nombre);
    }

    public Optional<Intolerancia> buscarIntoleranciaPorNombre(String nombre) {
        return intoleranciaRepository.findByNombre(nombre);
    }

    public void eliminarAlergia(Integer id) {
        alergiaRepository.deleteById(id);
    }

    public void eliminarIntolerancia(Integer id) {
        intoleranciaRepository.deleteById(id);
    }
}
