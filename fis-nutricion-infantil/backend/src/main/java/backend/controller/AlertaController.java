package backend.controller;

import backend.model.AlertaHidratacion;
import backend.model.Alertas;
import backend.model.RecordatorioComida;
import backend.service.AlertaService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/alertas")
@CrossOrigin(origins = "http://localhost:5173")
public class AlertaController {
    private final AlertaService alertaService;

    public AlertaController(AlertaService alertaService) {
        this.alertaService = alertaService;
    }

    @PostMapping("/hidratacion")
    public ResponseEntity<Alertas> programarHidratacion(@RequestBody AlertaHidratacion alertaHidratacion) {
        return ResponseEntity.ok(alertaService.programar(alertaHidratacion));
    }

    @PostMapping("/comidas")
    public ResponseEntity<Alertas> programarComida(@RequestBody RecordatorioComida recordatorioComida) {
        return ResponseEntity.ok(alertaService.programar(recordatorioComida));
    }

    @GetMapping
    public ResponseEntity<List<Alertas>> listar() {
        return ResponseEntity.ok(alertaService.listar());
    }
}