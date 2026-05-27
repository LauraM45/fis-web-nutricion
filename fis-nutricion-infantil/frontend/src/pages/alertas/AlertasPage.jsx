import { useState } from 'react'
import { Badge, Button, SectionHeader } from '../../components/common'

const initialAlerts = [
  {
    id: 1,
    tipo: 'Hidratación',
    perfil: 'Mateo García',
    mensaje: 'Recordatorio de consumo de agua cada 2 horas.',
    hora: '10:00 AM',
    estado: 'Activa',
  },
  {
    id: 2,
    tipo: 'Comida',
    perfil: 'Sofía Ruiz',
    mensaje: 'Recordatorio para almuerzo principal.',
    hora: '12:30 PM',
    estado: 'Activa',
  },
  {
    id: 3,
    tipo: 'Seguimiento',
    perfil: 'Lucía Méndez',
    mensaje: 'Registrar nueva medición de peso y talla.',
    hora: '05:00 PM',
    estado: 'Pendiente',
  },
]

function AlertsPage() {
  const [alerts, setAlerts] = useState(initialAlerts)

  function toggleAlert(id) {
    setAlerts((current) =>
      current.map((alert) =>
        alert.id === id
          ? {
              ...alert,
              estado: alert.estado === 'Activa' ? 'Pausada' : 'Activa',
            }
          : alert,
      ),
    )
  }

  return (
    <div>
      <SectionHeader
        title="Alertas y recordatorios"
        description="Gestiona notificaciones de hidratación, comidas principales y seguimiento nutricional."
        action={
          <Button icon="add_alert">
            Nueva alerta
          </Button>
        }
      />

      <div className="grid grid-cols-1 gap-5">
        {alerts.map((alert) => (
          <article
            key={alert.id}
            className="rounded-xl border border-outline-variant bg-surface-container-lowest p-6 clinical-shadow"
          >
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-fixed text-primary">
                  <span className="material-symbols-outlined">
                    {alert.tipo === 'Hidratación' ? 'water_drop' : 'notifications'}
                  </span>
                </div>

                <div>
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <h3 className="text-lg font-bold text-on-surface">{alert.tipo}</h3>
                    <Badge tone={alert.estado === 'Activa' ? 'secondary' : 'neutral'}>
                      {alert.estado}
                    </Badge>
                  </div>

                  <p className="text-sm font-bold text-primary">{alert.perfil}</p>
                  <p className="mt-1 text-on-surface-variant">{alert.mensaje}</p>
                  <p className="mt-2 text-sm text-on-surface-variant">
                    Hora programada: <strong>{alert.hora}</strong>
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Button variant="outline" icon="edit">
                  Editar
                </Button>
                <Button
                  variant={alert.estado === 'Activa' ? 'danger' : 'secondary'}
                  icon={alert.estado === 'Activa' ? 'pause' : 'play_arrow'}
                  onClick={() => toggleAlert(alert.id)}
                >
                  {alert.estado === 'Activa' ? 'Pausar' : 'Activar'}
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default AlertsPage