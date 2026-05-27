import { useEffect, useMemo, useState } from 'react'
import { perfilInfantilService } from '../../services/perfilInfantilService'
import { medicionService } from '../../services/medicionService'

const fallbackProfiles = [
  {
    idPerfil: 'demo-1',
    infante: {
      nombre: 'Mateo',
      apellido: 'García',
      fechaNacimiento: '2019-03-12',
      sexo: 'Masculino',
    },
    estado: true,
    status: 'Estable',
    weight: '16.5 kg',
    height: '102 cm',
  },
  {
    idPerfil: 'demo-2',
    infante: {
      nombre: 'Sofía',
      apellido: 'Ruiz',
      fechaNacimiento: '2021-08-24',
      sexo: 'Femenino',
    },
    estado: true,
    status: 'Seguimiento',
    weight: '11.2 kg',
    height: '88 cm',
  },
]

const emptyForm = {
  nombre: '',
  apellido: '',
  fechaNacimiento: '',
  sexo: '',
  tipoDocumento: '',
}

function ProfilesPage() {
  const [profiles, setProfiles] = useState([])
  const [selectedProfile, setSelectedProfile] = useState(null)
  const [showCreate, setShowCreate] = useState(false)
  const [childForm, setChildForm] = useState(emptyForm)
  const [peso, setPeso] = useState('')
  const [talla, setTalla] = useState('')
  const [loading, setLoading] = useState(true)
  const [message, setMessage] = useState('')

  const visibleProfiles = profiles.length > 0 ? profiles : fallbackProfiles

  useEffect(() => {
    loadProfiles()
  }, [])

  async function loadProfiles() {
    try {
      setLoading(true)
      const data = await perfilInfantilService.listar()
      setProfiles(Array.isArray(data) ? data : [])
    } catch {
      setProfiles([])
      setMessage('No se pudieron cargar perfiles desde la API. Se muestran datos de ejemplo visual.')
    } finally {
      setLoading(false)
    }
  }

  function updateChild(field, value) {
    setChildForm((current) => ({ ...current, [field]: value }))
  }

  async function createProfile(event) {
    event.preventDefault()

    try {
      const newProfile = await perfilInfantilService.crear({
        infante: childForm,
      })

      setProfiles((current) => [...current, newProfile])
      setSelectedProfile(newProfile)
      setChildForm(emptyForm)
      setShowCreate(false)
      setMessage('Perfil infantil creado correctamente.')
    } catch (error) {
      setMessage(error?.response?.data?.message || 'No se pudo crear el perfil infantil.')
    }
  }

  async function registerWeight(event) {
    event.preventDefault()

    try {
      await medicionService.registrarPeso({
        peso: Number(peso),
      })
      setPeso('')
      setMessage('Peso registrado correctamente.')
    } catch {
      setMessage('No se pudo registrar el peso. Verifica el endpoint de mediciones.')
    }
  }

  async function registerHeight(event) {
    event.preventDefault()

    try {
      await medicionService.registrarTalla({
        talla: Number(talla),
      })
      setTalla('')
      setMessage('Talla registrada correctamente.')
    } catch {
      setMessage('No se pudo registrar la talla. Verifica el endpoint de mediciones.')
    }
  }

  const selectedName = useMemo(() => {
    if (!selectedProfile) return 'Selecciona un perfil'
    return `${selectedProfile.infante?.nombre ?? 'Perfil'} ${selectedProfile.infante?.apellido ?? ''}`.trim()
  }, [selectedProfile])

  return (
    <div className="animate-in slide-in-from-bottom-4 duration-500">
      <div className="mb-8 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
        <div>
          <h2 className="text-3xl font-bold text-primary">Perfiles infantiles</h2>
          <p className="mt-1 max-w-2xl text-on-surface-variant">
            Gestiona información, mediciones biométricas, restricciones, alertas y seguimiento nutricional.
          </p>
        </div>

        <button
          className="flex w-fit items-center gap-2 rounded-xl bg-primary px-6 py-3 font-bold text-on-primary shadow-md transition hover:opacity-90"
          onClick={() => setShowCreate((value) => !value)}
          type="button"
        >
          <span className="material-symbols-outlined">person_add</span>
          Nuevo perfil
        </button>
      </div>

      {message && (
        <div className="mb-6 rounded-xl border border-primary/20 bg-primary-fixed/40 px-5 py-3 text-sm font-semibold text-primary">
          {message}
        </div>
      )}

      {showCreate && (
        <section className="mb-8 rounded-2xl border border-outline-variant bg-surface-container-lowest p-6 shadow-sm">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-primary">Crear perfil infantil</h3>
            <p className="text-sm text-on-surface-variant">
              Registra los datos básicos del niño o niña.
            </p>
          </div>

          <form className="grid gap-4 md:grid-cols-2" onSubmit={createProfile}>
            <Input label="Nombre" value={childForm.nombre} onChange={(value) => updateChild('nombre', value)} />
            <Input label="Apellido" value={childForm.apellido} onChange={(value) => updateChild('apellido', value)} />
            <Input label="Fecha de nacimiento" type="date" value={childForm.fechaNacimiento} onChange={(value) => updateChild('fechaNacimiento', value)} />
            <Input label="Sexo" value={childForm.sexo} onChange={(value) => updateChild('sexo', value)} />
            <Input label="Tipo documento" value={childForm.tipoDocumento} onChange={(value) => updateChild('tipoDocumento', value)} />

            <div className="flex items-end">
              <button className="w-full rounded-xl bg-primary px-6 py-3 font-bold text-on-primary" type="submit">
                Guardar perfil
              </button>
            </div>
          </form>
        </section>
      )}

      <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_420px]">
        <section>
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-bold text-on-surface">Perfiles creados</h3>
            {loading && <span className="text-sm text-on-surface-variant">Cargando...</span>}
          </div>

          <div className="bento-grid">
            {visibleProfiles.map((profile, index) => (
              <ProfileCard
                key={profile.idPerfil ?? index}
                profile={profile}
                selected={selectedProfile?.idPerfil === profile.idPerfil}
                onClick={() => setSelectedProfile(profile)}
              />
            ))}
          </div>
        </section>

        <aside className="rounded-2xl border border-outline-variant bg-surface-container-lowest p-6 clinical-shadow">
          <div className="mb-6 flex items-start justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                Perfil activo
              </p>
              <h3 className="mt-1 text-2xl font-bold text-primary">{selectedName}</h3>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-fixed text-primary">
              <span className="material-symbols-outlined">badge</span>
            </div>
          </div>

          {!selectedProfile ? (
            <div className="rounded-xl border border-dashed border-outline-variant p-6 text-center">
              <span className="material-symbols-outlined mb-2 text-4xl text-primary">touch_app</span>
              <p className="font-bold">Selecciona un perfil</p>
              <p className="mt-1 text-sm text-on-surface-variant">
                Al hacer click en una card, la información completa se carga aquí sin salir del módulo.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              <section className="rounded-xl bg-surface-container-low p-4">
                <h4 className="mb-3 font-bold">Información general</h4>
                <div className="grid gap-3 text-sm">
                  <InfoRow label="Nombre" value={selectedName} />
                  <InfoRow label="Nacimiento" value={selectedProfile.infante?.fechaNacimiento ?? 'Sin registro'} />
                  <InfoRow label="Sexo" value={selectedProfile.infante?.sexo ?? 'Sin registro'} />
                  <InfoRow label="Estado" value={selectedProfile.status ?? 'Activo'} />
                </div>
              </section>

              <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-1">
                <MetricCard label="IMC" value="16.2" detail="Rango saludable" icon="accessibility_new" />
                <MetricCard label="TMB" value="984 kcal" detail="Estimación diaria" icon="bolt" />
                <MetricCard label="Hidratación" value="72%" detail="Meta diaria" icon="water_drop" />
                <MetricCard label="Calorías" value="1450" detail="Recomendadas" icon="local_fire_department" />
              </section>

              <section className="rounded-xl border border-outline-variant p-4">
                <h4 className="mb-4 font-bold">Registrar mediciones</h4>
                <div className="grid gap-4">
                  <form className="flex gap-3" onSubmit={registerWeight}>
                    <input
                      className="min-w-0 flex-1 rounded-xl border border-outline-variant px-4 py-3 text-sm"
                      placeholder="Peso en kg"
                      type="number"
                      step="0.1"
                      value={peso}
                      onChange={(event) => setPeso(event.target.value)}
                    />
                    <button className="rounded-xl bg-primary px-4 py-3 font-bold text-on-primary" type="submit">
                      Guardar
                    </button>
                  </form>

                  <form className="flex gap-3" onSubmit={registerHeight}>
                    <input
                      className="min-w-0 flex-1 rounded-xl border border-outline-variant px-4 py-3 text-sm"
                      placeholder="Talla en cm"
                      type="number"
                      step="0.1"
                      value={talla}
                      onChange={(event) => setTalla(event.target.value)}
                    />
                    <button className="rounded-xl bg-secondary px-4 py-3 font-bold text-on-secondary" type="submit">
                      Guardar
                    </button>
                  </form>
                </div>
              </section>

              <section className="rounded-xl border border-error-container bg-error-container/20 p-4">
                <h4 className="mb-3 flex items-center gap-2 font-bold text-error">
                  <span className="material-symbols-outlined">warning</span>
                  Restricciones alimentarias
                </h4>
                <p className="text-sm text-on-error-container">
                  Configura alergias e intolerancias para filtrar recetas recomendadas.
                </p>
                <button className="mt-4 rounded-full bg-error px-4 py-2 text-sm font-bold text-white" type="button">
                  Configurar restricciones
                </button>
              </section>

              <section className="rounded-xl border border-outline-variant p-4">
                <h4 className="mb-3 font-bold">Alertas y recordatorios</h4>
                <div className="flex flex-wrap gap-2">
                  <Tag icon="water_drop" label="Hidratación" />
                  <Tag icon="restaurant" label="Comidas" />
                  <Tag icon="monitor_weight" label="Mediciones" />
                </div>
              </section>
            </div>
          )}
        </aside>
      </div>
    </div>
  )
}

function ProfileCard({ profile, selected, onClick }) {
  const name = `${profile.infante?.nombre ?? 'Perfil'} ${profile.infante?.apellido ?? ''}`.trim()
  const status = profile.status ?? (profile.estado ? 'Activo' : 'Inactivo')

  return (
    <button
      className={`group rounded-xl border bg-surface-container-lowest p-6 text-left clinical-shadow transition-all hover:border-primary ${
        selected ? 'border-primary ring-4 ring-primary/10' : 'border-outline-variant'
      }`}
      onClick={onClick}
      type="button"
    >
      <div className="mb-4 flex items-start justify-between">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-fixed text-primary shadow-sm transition-transform group-hover:scale-105">
          <span className="material-symbols-outlined text-4xl">child_care</span>
        </div>
        <span
          className={`rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-tight ${
            status === 'Alerta'
              ? 'bg-error-container text-on-error-container'
              : 'bg-secondary-container text-on-secondary-container'
          }`}
        >
          {status}
        </span>
      </div>

      <h3 className="text-lg font-bold">{name}</h3>
      <p className="mb-4 text-sm text-on-surface-variant">
        {profile.infante?.fechaNacimiento ?? 'Fecha sin registrar'}
      </p>

      <div className="flex gap-2">
        <div className="flex-1 rounded-lg bg-surface-container-low p-2 text-center">
          <p className="text-[10px] font-bold uppercase text-outline">Peso</p>
          <p className="text-sm font-bold text-primary">{profile.weight ?? 'N/D'}</p>
        </div>
        <div className="flex-1 rounded-lg bg-surface-container-low p-2 text-center">
          <p className="text-[10px] font-bold uppercase text-outline">Talla</p>
          <p className="text-sm font-bold text-primary">{profile.height ?? 'N/D'}</p>
        </div>
      </div>
    </button>
  )
}

function Input({ label, value, onChange, type = 'text' }) {
  return (
    <label className="flex flex-col gap-1">
      <span className="ml-1 text-xs font-bold text-on-surface-variant">{label}</span>
      <input
        className="rounded-xl border border-outline-variant px-4 py-3 text-sm transition focus:border-primary focus:ring-4 focus:ring-primary/10"
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  )
}

function InfoRow({ label, value }) {
  return (
    <div className="flex justify-between gap-4">
      <span className="text-on-surface-variant">{label}</span>
      <span className="font-bold">{value}</span>
    </div>
  )
}

function MetricCard({ label, value, detail, icon }) {
  return (
    <article className="rounded-xl border border-outline-variant bg-surface-container-lowest p-4">
      <div className="mb-3 flex items-center gap-2 text-primary">
        <span className="material-symbols-outlined">{icon}</span>
        <span className="text-xs font-bold uppercase">{label}</span>
      </div>
      <p className="text-2xl font-bold">{value}</p>
      <p className="text-xs text-on-surface-variant">{detail}</p>
    </article>
  )
}

function Tag({ icon, label }) {
  return (
    <span className="flex items-center gap-1 rounded-full bg-primary-fixed px-3 py-1 text-xs font-bold text-on-primary-fixed-variant">
      <span className="material-symbols-outlined text-[16px]">{icon}</span>
      {label}
    </span>
  )
}

export default ProfilesPage