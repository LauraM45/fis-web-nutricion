package backend.service;

import backend.model.HistorialMedicion;
import backend.model.MedicionPeso;
import backend.model.MedicionTalla;
import backend.repository.HistorialMedicionRepository;
import backend.repository.MedicionPesoRepository;
import backend.repository.MedicionTallaRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MedicionService {
    private final HistorialMedicionRepository historialMedicionRepository;
    private final MedicionPesoRepository medicionPesoRepository;
    private final MedicionTallaRepository medicionTallaRepository;

    public MedicionService(HistorialMedicionRepository historialMedicionRepository,
                           MedicionPesoRepository medicionPesoRepository,
                           MedicionTallaRepository medicionTallaRepository) {
        this.historialMedicionRepository = historialMedicionRepository;
        this.medicionPesoRepository = medicionPesoRepository;
        this.medicionTallaRepository = medicionTallaRepository;
    }

    public HistorialMedicion crearHistorial(HistorialMedicion historialMedicion) {
        return historialMedicionRepository.save(historialMedicion);
    }

    public Optional<HistorialMedicion> buscarHistorial(Integer idHistorial) {
        return historialMedicionRepository.findById(idHistorial);
    }

    public MedicionPeso registrarPeso(MedicionPeso medicionPeso) {
        medicionPeso.registrarMedicion();
        return medicionPesoRepository.save(medicionPeso);
    }

    public MedicionTalla registrarTalla(MedicionTalla medicionTalla) {
        medicionTalla.registrarMedicion();
        return medicionTallaRepository.save(medicionTalla);
    }

    public List<MedicionPeso> listarPesosPorHistorial(Integer idHistorial) {
        return medicionPesoRepository.findByHistorialMedicionIdHistorial(idHistorial);
    }

    public List<MedicionTalla> listarTallasPorHistorial(Integer idHistorial) {
        return medicionTallaRepository.findByHistorialMedicionIdHistorial(idHistorial);
    }
}
