package backend.controller;

import backend.model.EstadoNutricional;
import backend.model.FachadaNutricional;
import backend.model.ParametroNutricional;
import backend.model.RequerimientoNutricional;
import backend.service.NutricionService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/nutricion")
@CrossOrigin(origins = "http://localhost:5173")
public class NutricionController {
    private final NutricionService nutricionService;

    public NutricionController(NutricionService nutricionService) {
        this.nutricionService = nutricionService;
    }

    @PostMapping("/analisis")
    public ResponseEntity<FachadaNutricional> generarAnalisisNutricional() {
        return ResponseEntity.ok(nutricionService.generarAnalisisNutricional());
    }

    @GetMapping("/estado")
    public ResponseEntity<EstadoNutricional> consultarEstadoNutricional() {
        return ResponseEntity.ok(nutricionService.consultarEstadoNutricional());
    }

    @GetMapping("/parametros")
    public ResponseEntity<ParametroNutricional> consultarParametros() {
        return ResponseEntity.ok(nutricionService.consultarParametros());
    }

    @GetMapping("/requerimientos")
    public ResponseEntity<RequerimientoNutricional> consultarRequerimientos() {
        return ResponseEntity.ok(nutricionService.consultarRequerimientos());
    }
}