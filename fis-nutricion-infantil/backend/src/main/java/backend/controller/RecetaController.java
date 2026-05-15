package backend.controller;

import backend.model.Receta;
import backend.service.RecetaService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/recetas")
@CrossOrigin(origins = "http://localhost:5173")
public class RecetaController {
    private final RecetaService recetaService;

    public RecetaController(RecetaService recetaService) {
        this.recetaService = recetaService;
    }

    @PostMapping
    public ResponseEntity<Receta> guardar(@RequestBody Receta receta) {
        return ResponseEntity.ok(recetaService.guardar(receta));
    }

    @GetMapping
    public ResponseEntity<List<Receta>> listar() {
        return ResponseEntity.ok(recetaService.listar());
    }

    @GetMapping("/personalizadas")
    public ResponseEntity<List<Receta>> consultarRecetarioPersonalizado() {
        return ResponseEntity.ok(recetaService.consultarRecetarioPersonalizado());
    }

    @GetMapping("/recomendadas")
    public ResponseEntity<List<Receta>> recomendarPorAporteCalorico(@RequestParam double caloriasMaximas) {
        return ResponseEntity.ok(recetaService.recomendarPorAporteCalorico(caloriasMaximas));
    }

    @GetMapping("/{indice}")
    public ResponseEntity<Receta> buscarPorIndice(@PathVariable int indice) {
        return recetaService.buscarPorIndice(indice)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}