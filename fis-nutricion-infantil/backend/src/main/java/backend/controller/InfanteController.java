package backend.controller;

import backend.model.Infante;
import backend.service.InfanteService;
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
@RequestMapping("/api/infantes")
@CrossOrigin(origins = "http://localhost:5173")
public class InfanteController {
    private final InfanteService infanteService;

    public InfanteController(InfanteService infanteService) {
        this.infanteService = infanteService;
    }

    @PostMapping
    public ResponseEntity<Infante> guardar(@RequestBody Infante infante) {
        return ResponseEntity.ok(infanteService.guardar(infante));
    }

    @GetMapping
    public ResponseEntity<List<Infante>> listar() {
        return ResponseEntity.ok(infanteService.listar());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Infante> buscarPorId(@PathVariable Integer id) {
        return infanteService.buscarPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Infante> actualizar(@PathVariable Integer id, @RequestBody Infante infante) {
        return ResponseEntity.ok(infanteService.guardar(infante));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Integer id) {
        infanteService.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}