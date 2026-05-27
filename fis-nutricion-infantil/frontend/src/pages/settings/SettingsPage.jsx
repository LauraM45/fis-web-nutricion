import { useState } from 'react'

const initialProfile = {
  nombre: 'Tutor principal',
  correo: 'tutor@ejemplo.com',
  telefono: '',
  ciudad: '',
}

function SettingsPage() {
  const [activeTab, setActiveTab] = useState('perfil')
  const [profile, setProfile] = useState(initialProfile)
  const [darkMode, setDarkMode] = useState(document.documentElement.classList.contains('dark'))
  const [message, setMessage] = useState('')

  function updateProfile(field, value) {
    setProfile((current) => ({ ...current, [field]: value }))
  }

  function toggleDarkMode() {
    setDarkMode((current) => {
      const next = !current
      document.documentElement.classList.toggle('dark', next)
      return next
    })
  }

  function saveProfile(event) {
    event.preventDefault()
    setMessage('Preferencias guardadas localmente. Conecta este formulario al endpoint del tutor cuando esté disponible.')
  }

  function closeSession() {
    localStorage.removeItem('token')
    setMessage('Sesión cerrada localmente.')
  }

  return (
    <div className="animate-in slide-in-from-right-4 duration-500">
      <section className="mb-10">
        <h2 className="mb-2 text-3xl font-bold text-primary">Configuración</h2>
        <p className="text-on-surface-variant">
          Gestiona información del tutor, preferencias visuales y ajustes generales del sistema.
        </p>
      </section>

      {message && (
        <div className="mb-6 rounded-xl border border-primary/20 bg-primary-fixed/40 px-5 py-3 text-sm font-semibold text-primary">
          {message}
        </div>
      )}

      <div className="grid grid-cols-12 gap-8">
        <aside className="col-span-12 lg:col-span-3">
          <div className="sticky top-24 flex flex-col gap-2">
            <SettingsTab
              active={activeTab === 'perfil'}
              icon="person"
              label="Perfil"
              onClick={() => setActiveTab('perfil')}
            />
            <SettingsTab
              active={activeTab === 'apariencia'}
              icon="palette"
              label="Apariencia"
              onClick={() => setActiveTab('apariencia')}
            />
            <SettingsTab
              active={activeTab === 'seguridad'}
              icon="security"
              label="Seguridad"
              onClick={() => setActiveTab('seguridad')}
            />
            <SettingsTab
              active={activeTab === 'sistema'}
              icon="tune"
              label="Sistema"
              onClick={() => setActiveTab('sistema')}
            />
          </div>
        </aside>

        <section className="col-span-12 space-y-8 lg:col-span-9">
          {activeTab === 'perfil' && (
            <article className="glass-card rounded-2xl border border-outline-variant p-8">
              <div className="mb-8 flex items-center gap-4">
                <div className="rounded-xl bg-primary-fixed p-3 text-primary">
                  <span className="material-symbols-outlined">id_card</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Información personal</h3>
                  <p className="text-sm text-on-surface-variant">
                    Datos generales del tutor responsable.
                  </p>
                </div>
              </div>

              <form className="grid grid-cols-1 gap-6 md:grid-cols-2" onSubmit={saveProfile}>
                <div className="col-span-1 md:col-span-2 mb-2 flex items-center gap-6">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-surface-container-high bg-primary-fixed text-primary">
                    <span className="material-symbols-outlined text-5xl">person</span>
                  </div>
                  <button className="rounded-full bg-primary px-4 py-2 text-xs font-bold text-on-primary" type="button">
                    Cambiar foto
                  </button>
                </div>

                <Input
                  label="Nombre completo"
                  value={profile.nombre}
                  onChange={(value) => updateProfile('nombre', value)}
                />
                <Input
                  label="Correo electrónico"
                  type="email"
                  value={profile.correo}
                  onChange={(value) => updateProfile('correo', value)}
                />
                <Input
                  label="Teléfono"
                  value={profile.telefono}
                  onChange={(value) => updateProfile('telefono', value)}
                />
                <Input
                  label="Ciudad"
                  value={profile.ciudad}
                  onChange={(value) => updateProfile('ciudad', value)}
                />

                <div className="col-span-1 flex justify-end md:col-span-2">
                  <button className="rounded-full bg-primary px-8 py-3 font-bold text-on-primary shadow-md" type="submit">
                    Guardar cambios
                  </button>
                </div>
              </form>
            </article>
          )}

          {activeTab === 'apariencia' && (
            <article className="glass-card rounded-2xl border border-outline-variant p-8">
              <div className="mb-8 flex items-center gap-4">
                <div className="rounded-xl bg-secondary-container p-3 text-secondary">
                  <span className="material-symbols-outlined">palette</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Preferencias visuales</h3>
                  <p className="text-sm text-on-surface-variant">
                    Ajustes de visualización para la interfaz.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <PreferenceRow
                  icon={darkMode ? 'dark_mode' : 'light_mode'}
                  title="Modo oscuro"
                  description="Activa una apariencia oscura para reducir brillo en pantalla."
                >
                  <button
                    onClick={toggleDarkMode}
                    className={`relative h-8 w-16 rounded-full transition ${
                      darkMode ? 'bg-primary' : 'bg-surface-container-highest'
                    }`}
                    type="button"
                  >
                    <span
                      className={`absolute top-1 h-6 w-6 rounded-full bg-white transition ${
                        darkMode ? 'left-9' : 'left-1'
                      }`}
                    ></span>
                  </button>
                </PreferenceRow>

                <PreferenceRow
                  icon="dashboard_customize"
                  title="Vista compacta"
                  description="Reduce espacios entre cards para ver más información."
                >
                  <button className="rounded-full border border-outline-variant px-4 py-2 text-sm font-bold text-on-surface-variant" type="button">
                    Próximamente
                  </button>
                </PreferenceRow>
              </div>
            </article>
          )}

          {activeTab === 'seguridad' && (
            <article className="glass-card rounded-2xl border border-outline-variant p-8">
              <div className="mb-8 flex items-center gap-4">
                <div className="rounded-xl bg-error-container p-3 text-error">
                  <span className="material-symbols-outlined">security</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Seguridad</h3>
                  <p className="text-sm text-on-surface-variant">
                    Opciones relacionadas con acceso y sesión.
                  </p>
                </div>
              </div>

              <div className="grid gap-4">
                <SecurityAction
                  icon="lock_reset"
                  title="Cambiar contraseña"
                  description="Actualiza la contraseña de acceso del tutor."
                  action="Cambiar"
                />
                <SecurityAction
                  icon="logout"
                  title="Cerrar sesión"
                  description="Finaliza la sesión actual en este dispositivo."
                  action="Cerrar sesión"
                  danger
                  onClick={closeSession}
                />
              </div>
            </article>
          )}

          {activeTab === 'sistema' && (
            <article className="glass-card rounded-2xl border border-outline-variant p-8">
              <div className="mb-8 flex items-center gap-4">
                <div className="rounded-xl bg-primary-fixed p-3 text-primary">
                  <span className="material-symbols-outlined">tune</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Configuración general</h3>
                  <p className="text-sm text-on-surface-variant">
                    Ajustes funcionales del sistema.
                  </p>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <SystemCard icon="notifications" title="Notificaciones" detail="Recordatorios de hidratación y comidas." />
                <SystemCard icon="restaurant_menu" title="Recetas" detail="Filtros por alergias e intolerancias." />
                <SystemCard icon="water_drop" title="Hidratación" detail="Metas diarias según el perfil infantil." />
                <SystemCard icon="monitor_weight" title="Mediciones" detail="Seguimiento de peso y talla." />
              </div>
            </article>
          )}
        </section>
      </div>
    </div>
  )
}

function SettingsTab({ active, icon, label, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 rounded-xl p-4 text-left font-bold transition ${
        active
          ? 'glass-card text-primary shadow-sm'
          : 'text-on-surface-variant hover:bg-surface-container'
      }`}
      type="button"
    >
      <span className="material-symbols-outlined">{icon}</span>
      {label}
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

function PreferenceRow({ icon, title, description, children }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-xl border border-outline-variant bg-surface-container-lowest p-5">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-fixed text-primary">
          <span className="material-symbols-outlined">{icon}</span>
        </div>
        <div>
          <p className="font-bold">{title}</p>
          <p className="text-sm text-on-surface-variant">{description}</p>
        </div>
      </div>
      {children}
    </div>
  )
}

function SecurityAction({ icon, title, description, action, danger = false, onClick }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-xl border border-outline-variant bg-surface-container-lowest p-5">
      <div className="flex items-center gap-4">
        <div className={`flex h-12 w-12 items-center justify-center rounded-full ${danger ? 'bg-error-container text-error' : 'bg-primary-fixed text-primary'}`}>
          <span className="material-symbols-outlined">{icon}</span>
        </div>
        <div>
          <p className="font-bold">{title}</p>
          <p className="text-sm text-on-surface-variant">{description}</p>
        </div>
      </div>
      <button
        onClick={onClick}
        className={`rounded-full px-4 py-2 text-sm font-bold ${
          danger ? 'bg-error text-white' : 'bg-primary text-on-primary'
        }`}
        type="button"
      >
        {action}
      </button>
    </div>
  )
}

function SystemCard({ icon, title, detail }) {
  return (
    <article className="rounded-xl border border-outline-variant bg-surface-container-lowest p-5">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary-container text-secondary">
        <span className="material-symbols-outlined">{icon}</span>
      </div>
      <p className="font-bold">{title}</p>
      <p className="mt-1 text-sm text-on-surface-variant">{detail}</p>
    </article>
  )
}

export default SettingsPage