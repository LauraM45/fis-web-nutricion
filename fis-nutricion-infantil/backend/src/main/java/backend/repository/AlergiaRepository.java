package backend.repository;

import backend.model.Alergia;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AlergiaRepository extends JpaRepository<Alergia, Integer> {
    Optional<Alergia> findByNombre(String nombre);
}
