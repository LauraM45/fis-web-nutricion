package backend.model;

public class NotificadorPerfil implements IObserver {
    private boolean estadoObserver;
    private PerfilInfantil perfil;

    @Override
    public void actualizar() {
        this.estadoObserver = true;
    }
    public boolean isEstadoObserver() {
        return estadoObserver;
    }

    public void setEstadoObserver(boolean estadoObserver) {
        this.estadoObserver = estadoObserver;
    }

    public PerfilInfantil getPerfil() {
        return perfil;
    }

    public void setPerfil(PerfilInfantil perfil) {
        this.perfil = perfil;
    }

}
