package backend.repository;

import backend.model.MedicionPeso;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MedicionPesoRepository extends JpaRepository<MedicionPeso, Integer> {
    List<MedicionPeso> findByHistorialMedicionIdHistorial(Integer idHistorial);
}
