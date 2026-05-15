package backend.controller;

import backend.model.Tutor;
import backend.service.TutorService;
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
@RequestMapping("/api/tutores")
@CrossOrigin(origins = "http://localhost:5173")
public class TutorController {
    private final TutorService tutorService;

    public TutorController(TutorService tutorService) {
        this.tutorService = tutorService;
    }

    @PostMapping
    public ResponseEntity<Tutor> guardar(@RequestBody Tutor tutor) {
        return ResponseEntity.ok(tutorService.guardar(tutor));
    }

    @GetMapping
    public ResponseEntity<List<Tutor>> listar() {
        return ResponseEntity.ok(tutorService.listar());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Tutor> buscarPorId(@PathVariable Integer id) {
        return tutorService.buscarPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Tutor> actualizar(@PathVariable Integer id, @RequestBody Tutor tutor) {
        return ResponseEntity.ok(tutorService.guardar(tutor));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Integer id) {
        tutorService.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}