package backend.repository;

import backend.model.MedicionTalla;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MedicionTallaRepository extends JpaRepository<MedicionTalla, Integer> {
    List<MedicionTalla> findByHistorialMedicionIdHistorial(Integer idHistorial);
}
