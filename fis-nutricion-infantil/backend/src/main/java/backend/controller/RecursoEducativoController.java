package backend.controller;

import backend.model.BibliotecaRecursos;
import backend.model.CategoriaRecurso;
import backend.model.RecursoEducativo;
import backend.service.RecursoEducativoService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/recursos")
@CrossOrigin(origins = "http://localhost:5173")
public class RecursoEducativoController {
    private final RecursoEducativoService recursoEducativoService;

    public RecursoEducativoController(RecursoEducativoService recursoEducativoService) {
        this.recursoEducativoService = recursoEducativoService;
    }

    @PostMapping("/educativos")
    public ResponseEntity<BibliotecaRecursos> agregarRecurso(@RequestBody RecursoEducativo recursoEducativo) {
        return ResponseEntity.ok(recursoEducativoService.agregar(recursoEducativo));
    }

    @PostMapping("/categorias")
    public ResponseEntity<BibliotecaRecursos> agregarCategoria(@RequestBody CategoriaRecurso categoriaRecurso) {
        return ResponseEntity.ok(recursoEducativoService.agregar(categoriaRecurso));
    }

    @GetMapping
    public ResponseEntity<List<BibliotecaRecursos>> listar() {
        return ResponseEntity.ok(recursoEducativoService.listar());
    }
}