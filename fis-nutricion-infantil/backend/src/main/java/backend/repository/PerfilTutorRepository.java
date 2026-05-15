package backend.repository;

import backend.model.PerfilTutor;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PerfilTutorRepository extends JpaRepository<PerfilTutor, Integer> {
    boolean existsByCorreo(String correo);

    Optional<PerfilTutor> findByCorreo(String correo);
}
