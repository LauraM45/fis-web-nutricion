package backend.service;

import backend.model.GraficaCrecimiento;
import backend.model.GraficaPesoEdad;
import backend.model.GraficaTallaEdad;
import backend.model.ProgresoDiario;
import org.springframework.stereotype.Service;

@Service
public class ProgresoService {
    public ProgresoDiario calcularProgresoDiario(ProgresoDiario progresoDiario) {
        progresoDiario.calcularProgreso();
        return progresoDiario;
    }

    public GraficaCrecimiento generarGraficaPesoEdad() {
        GraficaCrecimiento grafica = new GraficaPesoEdad();
        grafica.generarGrafica();
        return grafica;
    }

    public GraficaCrecimiento generarGraficaTallaEdad() {
        GraficaCrecimiento grafica = new GraficaTallaEdad();
        grafica.generarGrafica();
        return grafica;
    }
}
