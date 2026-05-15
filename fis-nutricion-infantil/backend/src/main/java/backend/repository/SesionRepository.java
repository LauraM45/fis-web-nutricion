package backend.repository;

import backend.model.Sesion;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface SesionRepository extends JpaRepository<Sesion, Integer> {
    Optional<Sesion> findByTokenSesion(String tokenSesion);
}
