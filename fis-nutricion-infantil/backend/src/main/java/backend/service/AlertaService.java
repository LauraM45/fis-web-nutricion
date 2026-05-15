package backend.service;

import backend.model.Alertas;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AlertaService {
    private final List<Alertas> alertas = new ArrayList<>();

    public Alertas programar(Alertas alerta) {
        alerta.programarAlerta();
        alertas.add(alerta);
        return alerta;
    }

    public void cancelar(Alertas alerta) {
        alerta.cancelarAlerta();
    }

    public void enviarNotificacion(Alertas alerta) {
        alerta.enviarNotificacion();
    }

    public List<Alertas> listar() {
        return alertas;
    }
}
