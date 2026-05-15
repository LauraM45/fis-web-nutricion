package backend.controller;

import backend.model.Alergia;
import backend.model.Intolerancia;
import backend.service.RestriccionAlimentariaService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/restricciones")
@CrossOrigin(origins = "http://localhost:5173")
public class RestriccionAlimentariaController {
    private final RestriccionAlimentariaService restriccionAlimentariaService;

    public RestriccionAlimentariaController(RestriccionAlimentariaService restriccionAlimentariaService) {
        this.restriccionAlimentariaService = restriccionAlimentariaService;
    }

    @PostMapping("/alergias")
    public ResponseEntity<Alergia> guardarAlergia(@RequestBody Alergia alergia) {
        return ResponseEntity.ok(restriccionAlimentariaService.guardarAlergia(alergia));
    }

    @PostMapping("/intolerancias")
    public ResponseEntity<Intolerancia> guardarIntolerancia(@RequestBody Intolerancia intolerancia) {
        return ResponseEntity.ok(restriccionAlimentariaService.guardarIntolerancia(intolerancia));
    }

    @GetMapping("/alergias")
    public ResponseEntity<List<Alergia>> listarAlergias() {
        return ResponseEntity.ok(restriccionAlimentariaService.listarAlergias());
    }

    @GetMapping("/intolerancias")
    public ResponseEntity<List<Intolerancia>> listarIntolerancias() {
        return ResponseEntity.ok(restriccionAlimentariaService.listarIntolerancias());
    }

    @GetMapping("/alergias/buscar")
    public ResponseEntity<Alergia> buscarAlergiaPorNombre(@RequestParam String nombre) {
        return restriccionAlimentariaService.buscarAlergiaPorNombre(nombre)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/intolerancias/buscar")
    public ResponseEntity<Intolerancia> buscarIntoleranciaPorNombre(@RequestParam String nombre) {
        return restriccionAlimentariaService.buscarIntoleranciaPorNombre(nombre)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/alergias/{id}")
    public ResponseEntity<Void> eliminarAlergia(@PathVariable Integer id) {
        restriccionAlimentariaService.eliminarAlergia(id);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/intolerancias/{id}")
    public ResponseEntity<Void> eliminarIntolerancia(@PathVariable Integer id) {
        restriccionAlimentariaService.eliminarIntolerancia(id);
        return ResponseEntity.noContent().build();
    }
}