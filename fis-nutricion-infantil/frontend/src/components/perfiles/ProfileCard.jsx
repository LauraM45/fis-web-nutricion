import Badge from '../common/Badge'

function ProfileCard({ profile, selected = false, onClick }) {
  const name = profile.nombre || profile.name || 'Perfil infantil'
  const age = profile.edad || profile.age || 'Edad no registrada'
  const weight = profile.peso || profile.weight || '--'
  const height = profile.talla || profile.height || profile.estatura || '--'
  const status = profile.estado || profile.status || 'Activo'

  return (
    <button
      className={`w-full rounded-xl border p-5 text-left clinical-shadow transition-all hover:border-primary ${
        selected
          ? 'border-primary bg-primary-fixed/30'
          : 'border-outline-variant bg-surface-container-lowest'
      }`}
      type="button"
      onClick={onClick}
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-fixed text-primary">
          <span className="material-symbols-outlined text-4xl">child_care</span>
        </div>

        <Badge tone={status === 'Alerta' ? 'danger' : 'secondary'}>
          {status}
        </Badge>
      </div>

      <h3 className="text-lg font-bold text-on-surface">{name}</h3>
      <p className="mb-4 text-sm text-on-surface-variant">{age}</p>

      <div className="grid grid-cols-2 gap-2">
        <div className="rounded-lg bg-surface-container-low p-3 text-center">
          <p className="text-[10px] font-bold uppercase text-outline">Peso</p>
          <p className="text-sm font-bold text-primary">{weight}</p>
        </div>

        <div className="rounded-lg bg-surface-container-low p-3 text-center">
          <p className="text-[10px] font-bold uppercase text-outline">Talla</p>
          <p className="text-sm font-bold text-primary">{height}</p>
        </div>
      </div>
    </button>
  )
}

export default ProfileCard