package backend.service;

import backend.model.EstadoNutricional;
import backend.model.FachadaNutricional;
import backend.model.ParametroNutricional;
import backend.model.RequerimientoNutricional;
import org.springframework.stereotype.Service;

@Service
public class NutricionService {
    public FachadaNutricional generarAnalisisNutricional() {
        FachadaNutricional fachadaNutricional = new FachadaNutricional();
        fachadaNutricional.generarAnalisisNutricional();
        return fachadaNutricional;
    }

    public EstadoNutricional consultarEstadoNutricional() {
        return generarAnalisisNutricional().consultarEstadoNutricional();
    }

    public ParametroNutricional consultarParametros() {
        return generarAnalisisNutricional().consultarParametros();
    }

    public RequerimientoNutricional consultarRequerimientos() {
        return generarAnalisisNutricional().consultarRequerimientos();
    }
}
