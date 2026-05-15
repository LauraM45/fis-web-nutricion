package backend.controller;

import backend.model.PerfilTutor;
import backend.service.PerfilTutorService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/perfiles-tutor")
@CrossOrigin(origins = "http://localhost:5173")
public class PerfilTutorController {
    private final PerfilTutorService perfilTutorService;

    public PerfilTutorController(PerfilTutorService perfilTutorService) {
        this.perfilTutorService = perfilTutorService;
    }

    @PostMapping
    public ResponseEntity<PerfilTutor> guardar(@RequestBody PerfilTutor perfilTutor) {
        return ResponseEntity.ok(perfilTutorService.guardar(perfilTutor));
    }

    @GetMapping
    public ResponseEntity<List<PerfilTutor>> listar() {
        return ResponseEntity.ok(perfilTutorService.listar());
    }

    @GetMapping("/{id}")
    public ResponseEntity<PerfilTutor> buscarPorId(@PathVariable Integer id) {
        return perfilTutorService.buscarPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/buscar")
    public ResponseEntity<PerfilTutor> buscarPorCorreo(@RequestParam String correo) {
        return perfilTutorService.buscarPorCorreo(correo)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<PerfilTutor> actualizar(@PathVariable Integer id, @RequestBody PerfilTutor perfilTutor) {
        return ResponseEntity.ok(perfilTutorService.actualizar(id, perfilTutor));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Integer id) {
        perfilTutorService.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}