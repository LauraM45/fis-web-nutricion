package backend.controller;

import backend.model.GraficaCrecimiento;
import backend.model.ProgresoDiario;
import backend.service.ProgresoService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/progreso")
@CrossOrigin(origins = "http://localhost:5173")
public class ProgresoController {
    private final ProgresoService progresoService;

    public ProgresoController(ProgresoService progresoService) {
        this.progresoService = progresoService;
    }

    @PostMapping("/diario")
    public ResponseEntity<ProgresoDiario> calcularProgresoDiario(@RequestBody ProgresoDiario progresoDiario) {
        return ResponseEntity.ok(progresoService.calcularProgresoDiario(progresoDiario));
    }

    @GetMapping("/graficas/peso-edad")
    public ResponseEntity<GraficaCrecimiento> generarGraficaPesoEdad() {
        return ResponseEntity.ok(progresoService.generarGraficaPesoEdad());
    }

    @GetMapping("/graficas/talla-edad")
    public ResponseEntity<GraficaCrecimiento> generarGraficaTallaEdad() {
        return ResponseEntity.ok(progresoService.generarGraficaTallaEdad());
    }
}