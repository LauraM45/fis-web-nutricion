package backend.repository;

import backend.model.Intolerancia;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface IntoleranciaRepository extends JpaRepository<Intolerancia, Integer> {
    Optional<Intolerancia> findByNombre(String nombre);
}
