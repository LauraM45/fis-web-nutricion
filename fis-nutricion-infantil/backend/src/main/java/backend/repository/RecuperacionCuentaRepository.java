package backend.repository;

import backend.model.RecuperacionCuenta;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RecuperacionCuentaRepository extends JpaRepository<RecuperacionCuenta, Integer> {
    Optional<RecuperacionCuenta> findByTokenRecuperacion(String tokenRecuperacion);
}
