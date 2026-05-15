package backend.controller;

import backend.model.PerfilInfantil;
import backend.service.PerfilInfantilService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/perfiles-infantiles")
@CrossOrigin(origins = "http://localhost:5173")
public class PerfilInfantilController {
    private final PerfilInfantilService perfilInfantilService;

    public PerfilInfantilController(PerfilInfantilService perfilInfantilService) {
        this.perfilInfantilService = perfilInfantilService;
    }

    @PostMapping
    public ResponseEntity<PerfilInfantil> crear(@RequestBody PerfilInfantil perfilInfantil) {
        return ResponseEntity.ok(perfilInfantilService.crear(perfilInfantil));
    }

    @GetMapping
    public ResponseEntity<List<PerfilInfantil>> listar() {
        return ResponseEntity.ok(perfilInfantilService.listar());
    }

    @GetMapping("/{id}")
    public ResponseEntity<PerfilInfantil> buscarPorId(@PathVariable Integer id) {
        return perfilInfantilService.buscarPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/tutor/{idPerfilTutor}")
    public ResponseEntity<List<PerfilInfantil>> listarPorTutor(@PathVariable Integer idPerfilTutor) {
        return ResponseEntity.ok(perfilInfantilService.listarPorTutor(idPerfilTutor));
    }

    @PutMapping("/{id}")
    public ResponseEntity<PerfilInfantil> actualizar(@PathVariable Integer id, @RequestBody PerfilInfantil perfilInfantil) {
        return ResponseEntity.ok(perfilInfantilService.actualizar(id, perfilInfantil));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Integer id) {
        perfilInfantilService.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}