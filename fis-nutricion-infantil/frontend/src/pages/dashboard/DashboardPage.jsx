const quickStats = [
  {
    icon: 'child_care',
    label: 'Perfiles infantiles',
    value: '4',
    detail: 'Niños en seguimiento',
    color: 'bg-primary-fixed text-primary',
  },
  {
    icon: 'water_drop',
    label: 'Hidratación',
    value: '72%',
    detail: 'Promedio diario',
    color: 'bg-secondary-container text-secondary',
  },
  {
    icon: 'priority_high',
    label: 'Alertas pendientes',
    value: '2',
    detail: 'Revisar recordatorios',
    color: 'bg-error-container text-error',
  },
]

const alerts = [
  {
    title: 'Recordatorio de hidratación',
    description: 'Mateo tiene pendiente completar su meta de agua diaria.',
    icon: 'water_drop',
  },
  {
    title: 'Registro biométrico',
    description: 'Actualiza peso y talla para mejorar los cálculos nutricionales.',
    icon: 'monitor_weight',
  },
  {
    title: 'Restricciones alimentarias',
    description: 'Revisa alergias antes de sugerir nuevas recetas.',
    icon: 'warning',
  },
]

const recommendedRecipes = [
  {
    title: 'Bowl de quinoa y calabaza',
    age: '6+ años',
    kcal: 245,
    image:
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Pasta integral con pollo',
    age: '8+ años',
    kcal: 310,
    image:
      'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Smoothie verde',
    age: 'Merienda',
    kcal: 160,
    image:
      'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?auto=format&fit=crop&w=900&q=80',
  },
]

function DashboardPage() {
  return (
    <div className="animate-in fade-in duration-500">
      <section className="mb-10">
        <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <div>
            <div className="flex items-end gap-2">
              <h2 className="text-3xl font-bold text-primary">
                Inicio
              </h2>
              <span className="material-symbols-outlined mb-1 text-primary">
                dashboard
              </span>
            </div>
            <p className="mt-2 max-w-2xl text-on-surface-variant">
              Resumen general del monitoreo nutricional, crecimiento, hidratación,
              alertas y recomendaciones para los perfiles infantiles registrados.
            </p>
          </div>

          <div className="flex w-fit items-center gap-2 rounded-full bg-primary-fixed px-4 py-2 text-sm font-bold text-on-primary-fixed-variant">
            <span className="material-symbols-outlined text-[18px]">calendar_today</span>
            Panel de hoy
          </div>
        </div>
      </section>

      <section className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        {quickStats.map((item) => (
          <article
            className="glass-card rounded-xl border border-outline-variant p-6 shadow-sm"
            key={item.label}
          >
            <div className="flex items-center gap-6">
              <div className={`flex h-14 w-14 items-center justify-center rounded-full ${item.color}`}>
                <span className="material-symbols-outlined text-3xl">{item.icon}</span>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-on-surface-variant">
                  {item.label}
                </p>
                <p className="text-3xl font-bold text-primary">{item.value}</p>
                <p className="mt-1 text-xs text-on-surface-variant">{item.detail}</p>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="space-y-8 lg:col-span-2">
          <article className="glass-card rounded-xl border border-outline-variant p-8 shadow-sm">
            <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
              <div>
                <h3 className="text-lg font-bold">Resumen general de crecimiento</h3>
                <p className="text-sm text-on-surface-variant">
                  Tendencia visual de registros recientes.
                </p>
              </div>

              <div className="flex gap-2">
                <button className="rounded-full bg-primary px-3 py-1 text-xs font-bold text-on-primary">
                  Mensual
                </button>
                <button className="rounded-full px-3 py-1 text-xs text-on-surface-variant hover:bg-surface-container">
                  Trimestral
                </button>
              </div>
            </div>

            <div className="flex h-64 items-end justify-between gap-4 border-b border-outline-variant px-4">
              {[60, 45, 85, 70, 95, 80].map((height, index) => (
                <div className="group flex w-full flex-col items-center gap-2" key={index}>
                  <div
                    className={`w-12 rounded-t-lg transition-all duration-700 ${
                      index === 5 ? 'bg-primary' : 'bg-primary-fixed-dim group-hover:bg-primary'
                    }`}
                    style={{ height: `${height}%` }}
                  />
                  <span className="text-xs text-on-surface-variant">
                    {['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'][index]}
                  </span>
                </div>
              ))}
            </div>
          </article>

          <article className="glass-card rounded-xl border border-outline-variant p-8 shadow-sm">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold">Accesos rápidos</h3>
                <p className="text-sm text-on-surface-variant">
                  Acciones frecuentes del sistema.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <QuickAction icon="person_add" title="Nuevo perfil" detail="Crear perfil infantil" />
              <QuickAction icon="monitor_weight" title="Medición" detail="Registrar peso y talla" />
              <QuickAction icon="restaurant_menu" title="Recetas" detail="Ver recomendaciones" />
            </div>
          </article>
        </div>

        <aside className="space-y-6">
          <article className="overflow-hidden rounded-xl border border-outline-variant bg-surface-container-lowest shadow-sm">
            <div className="flex items-center justify-between border-b border-error/10 bg-error-container/20 p-4">
              <h3 className="flex items-center gap-2 text-sm font-bold text-error">
                <span className="material-symbols-outlined text-sm">report</span>
                Alertas importantes
              </h3>
              <span className="rounded-full bg-error px-2 py-0.5 text-[10px] font-bold text-white">
                {alerts.length} HOY
              </span>
            </div>

            <div className="divide-y divide-outline-variant">
              {alerts.map((alert) => (
                <div className="p-4 transition hover:bg-surface-container-low" key={alert.title}>
                  <div className="flex gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-error-container text-error">
                      <span className="material-symbols-outlined text-[20px]">{alert.icon}</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold">{alert.title}</p>
                      <p className="text-xs text-on-surface-variant">{alert.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-xl border border-secondary/20 bg-secondary-container/10 p-6 shadow-sm">
            <h4 className="mb-3 flex items-center gap-2 text-xs font-bold uppercase text-secondary">
              <span className="material-symbols-outlined">clinical_notes</span>
              Observación
            </h4>
            <p className="text-sm leading-relaxed text-on-secondary-container">
              Mantén actualizadas las mediciones biométricas para que los cálculos de IMC,
              TMB, hidratación y calorías recomendadas sean más precisos.
            </p>
          </article>
        </aside>
      </section>

      <section className="mt-10">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-primary">Recetas recomendadas</h3>
            <p className="text-sm text-on-surface-variant">
              Sugerencias visuales para el módulo de recetas.
            </p>
          </div>
          <button className="flex items-center gap-1 text-sm font-bold text-primary">
            Ver todas
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {recommendedRecipes.map((recipe) => (
            <article
              className="group overflow-hidden rounded-2xl border border-outline-variant bg-surface-container-lowest shadow-sm transition hover:shadow-xl"
              key={recipe.title}
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  alt={recipe.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  src={recipe.image}
                />
                <span className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-white/80 px-3 py-1 text-[10px] font-bold uppercase backdrop-blur">
                  {recipe.age}
                </span>
              </div>
              <div className="p-6">
                <h4 className="mb-2 font-bold">{recipe.title}</h4>
                <div className="flex justify-between border-t border-outline-variant pt-4">
                  <div>
                    <p className="text-[10px] font-bold uppercase text-outline">Kcal</p>
                    <p className="text-sm font-bold text-primary">{recipe.kcal}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase text-outline">Tiempo</p>
                    <p className="text-sm font-bold">20m</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase text-outline">Tipo</p>
                    <p className="text-sm font-bold">Saludable</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

function QuickAction({ icon, title, detail }) {
  return (
    <button className="rounded-xl border border-outline-variant bg-surface-container-lowest p-5 text-left transition hover:border-primary hover:shadow-md">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-fixed text-primary">
        <span className="material-symbols-outlined">{icon}</span>
      </div>
      <p className="font-bold">{title}</p>
      <p className="text-sm text-on-surface-variant">{detail}</p>
    </button>
  )
}

export default DashboardPage