package backend.repository;

import backend.model.PerfilInfantil;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PerfilInfantilRepository extends JpaRepository<PerfilInfantil, Integer> {
    List<PerfilInfantil> findByPerfilTutorIdPerfil(Integer idPerfilTutor);
}
