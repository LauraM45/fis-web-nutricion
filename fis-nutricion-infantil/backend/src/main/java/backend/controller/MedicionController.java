package backend.controller;

import backend.model.HistorialMedicion;
import backend.model.MedicionPeso;
import backend.model.MedicionTalla;
import backend.service.MedicionService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/mediciones")
@CrossOrigin(origins = "http://localhost:5173")
public class MedicionController {
    private final MedicionService medicionService;

    public MedicionController(MedicionService medicionService) {
        this.medicionService = medicionService;
    }

    @PostMapping("/historiales")
    public ResponseEntity<HistorialMedicion> crearHistorial(@RequestBody HistorialMedicion historialMedicion) {
        return ResponseEntity.ok(medicionService.crearHistorial(historialMedicion));
    }

    @GetMapping("/historiales/{idHistorial}")
    public ResponseEntity<HistorialMedicion> buscarHistorial(@PathVariable Integer idHistorial) {
        return medicionService.buscarHistorial(idHistorial)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/peso")
    public ResponseEntity<MedicionPeso> registrarPeso(@RequestBody MedicionPeso medicionPeso) {
        return ResponseEntity.ok(medicionService.registrarPeso(medicionPeso));
    }

    @PostMapping("/talla")
    public ResponseEntity<MedicionTalla> registrarTalla(@RequestBody MedicionTalla medicionTalla) {
        return ResponseEntity.ok(medicionService.registrarTalla(medicionTalla));
    }

    @GetMapping("/peso/historial/{idHistorial}")
    public ResponseEntity<List<MedicionPeso>> listarPesosPorHistorial(@PathVariable Integer idHistorial) {
        return ResponseEntity.ok(medicionService.listarPesosPorHistorial(idHistorial));
    }

    @GetMapping("/talla/historial/{idHistorial}")
    public ResponseEntity<List<MedicionTalla>> listarTallasPorHistorial(@PathVariable Integer idHistorial) {
        return ResponseEntity.ok(medicionService.listarTallasPorHistorial(idHistorial));
    }
}