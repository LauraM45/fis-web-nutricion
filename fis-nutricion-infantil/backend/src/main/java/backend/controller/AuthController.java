package backend.controller;

import backend.model.PerfilTutor;
import backend.model.RecuperacionCuenta;
import backend.service.AuthService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {
    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/registro")
    public ResponseEntity<PerfilTutor> registrarTutor(@RequestBody PerfilTutor perfilTutor) {
        return ResponseEntity.ok(authService.registrarTutor(perfilTutor));
    }

    @PostMapping("/login")
    public ResponseEntity<PerfilTutor> iniciarSesion(@RequestBody Map<String, String> credenciales) {
        String correo = credenciales.get("correo");
        return authService.iniciarSesion(correo)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/logout/{idPerfilTutor}")
    public ResponseEntity<Void> cerrarSesion(@PathVariable Integer idPerfilTutor) {
        authService.cerrarSesion(idPerfilTutor);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/recuperacion")
    public ResponseEntity<RecuperacionCuenta> generarRecuperacion(@RequestBody RecuperacionCuenta recuperacionCuenta) {
        return ResponseEntity.ok(authService.generarRecuperacionCuenta(recuperacionCuenta));
    }

    @GetMapping("/recuperacion/validar")
    public ResponseEntity<Boolean> validarToken(@RequestParam String token) {
        return ResponseEntity.ok(authService.validarTokenRecuperacion(token));
    }
}