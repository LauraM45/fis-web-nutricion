import Badge from '../common/Badge'
import MetricCard from '../common/MetricCard'

function ProfileDetail({ profile }) {
  if (!profile) {
    return (
      <div className="rounded-xl border border-dashed border-outline-variant bg-surface-container-lowest p-8 text-center">
        <span className="material-symbols-outlined text-5xl text-primary">child_care</span>
        <h3 className="mt-4 text-xl font-bold">Selecciona un perfil</h3>
        <p className="mt-2 text-sm text-on-surface-variant">
          Aquí se mostrará la información nutricional completa del menor.
        </p>
      </div>
    )
  }

  const name = profile.nombre || profile.name || 'Perfil infantil'
  const age = profile.edad || profile.age || 'Edad no registrada'

  return (
    <section className="rounded-xl border border-outline-variant bg-surface-container-lowest p-6 clinical-shadow">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-5">
          <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-primary-fixed text-primary">
            <span className="material-symbols-outlined text-5xl">child_care</span>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-bold text-on-surface">{name}</h2>
              <span className="material-symbols-outlined text-primary">verified</span>
            </div>
            <p className="text-on-surface-variant">{age}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              <Badge>Perfil activo</Badge>
              <Badge tone="secondary">Seguimiento nutricional</Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <MetricCard label="IMC" value={profile.imc || '16.2'} icon="accessibility_new" tone="secondary" />
        <MetricCard label="TMB" value={profile.tmb || '980'} unit="kcal" icon="bolt" tone="primary" />
        <MetricCard label="Hidratación" value={profile.hidratacion || '75'} unit="%" icon="water_drop" tone="primary" />
        <MetricCard label="Calorías" value={profile.calorias || '1450'} unit="kcal" icon="local_fire_department" tone="warning" />
      </div>
    </section>
  )
}

export default ProfileDetail