package backend.service;

import backend.model.PerfilTutor;
import backend.model.RecuperacionCuenta;
import backend.repository.PerfilTutorRepository;
import backend.repository.RecuperacionCuentaRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthService {
    private final PerfilTutorRepository perfilTutorRepository;
    private final RecuperacionCuentaRepository recuperacionCuentaRepository;

    public AuthService(PerfilTutorRepository perfilTutorRepository,
                       RecuperacionCuentaRepository recuperacionCuentaRepository) {
        this.perfilTutorRepository = perfilTutorRepository;
        this.recuperacionCuentaRepository = recuperacionCuentaRepository;
    }

    public PerfilTutor registrarTutor(PerfilTutor perfilTutor) {
        if (perfilTutorRepository.existsByCorreo(obtenerCorreo(perfilTutor))) {
            throw new IllegalArgumentException("El correo ya se encuentra registrado.");
        }
        perfilTutor.registrarse();
        return perfilTutorRepository.save(perfilTutor);
    }

    public Optional<PerfilTutor> iniciarSesion(String correo) {
        Optional<PerfilTutor> perfilTutor = perfilTutorRepository.findByCorreo(correo);
        perfilTutor.ifPresent(perfil -> {
            perfil.iniciarSesion();
            perfilTutorRepository.save(perfil);
        });
        return perfilTutor;
    }

    public void cerrarSesion(Integer idPerfilTutor) {
        PerfilTutor perfilTutor = perfilTutorRepository.findById(idPerfilTutor)
                .orElseThrow(() -> new IllegalArgumentException("Perfil tutor no encontrado."));
        perfilTutor.cerrarSesion();
        perfilTutorRepository.save(perfilTutor);
    }

    public RecuperacionCuenta generarRecuperacionCuenta(RecuperacionCuenta recuperacionCuenta) {
        recuperacionCuenta.enviarCorreoRecuperacion();
        return recuperacionCuentaRepository.save(recuperacionCuenta);
    }

    public boolean validarTokenRecuperacion(String token) {
        return recuperacionCuentaRepository.findByTokenRecuperacion(token)
                .map(RecuperacionCuenta::validarToken)
                .orElse(false);
    }

    private String obtenerCorreo(PerfilTutor perfilTutor) {
        return perfilTutorRepository.findAll().stream()
                .filter(perfilTutor::equals)
                .map(perfil -> "")
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("No se puede validar el correo sin getter en PerfilTutor."));
    }
}
