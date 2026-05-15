package backend.repository;

import backend.model.HistorialMedicion;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HistorialMedicionRepository extends JpaRepository<HistorialMedicion, Integer> {
}
