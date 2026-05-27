import { useState } from 'react'

const chartTypes = [
  { id: 'peso', label: 'Peso/Edad', icon: 'monitor_weight' },
  { id: 'talla', label: 'Talla/Edad', icon: 'straighten' },
  { id: 'imc', label: 'IMC', icon: 'accessibility_new' },
  { id: 'tmb', label: 'TMB', icon: 'bolt' },
]

const chartData = {
  peso: [42, 48, 55, 61, 70, 78],
  talla: [38, 45, 51, 64, 72, 84],
  imc: [50, 52, 49, 58, 62, 66],
  tmb: [35, 44, 57, 69, 76, 88],
}

function ProgressPage() {
  const [chartType, setChartType] = useState('peso')
  const [expanded, setExpanded] = useState(false)

  const data = chartData[chartType]

  return (
    <div className="animate-in zoom-in-95 duration-500">
      <section className="mb-8 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
        <div>
          <nav className="mb-2 flex items-center gap-2 text-xs text-on-surface-variant">
            <span>Perfiles</span>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span>Perfil activo</span>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="font-bold text-primary">Progreso nutricional</span>
          </nav>
          <h2 className="text-3xl font-bold text-primary">Visualización de progreso</h2>
          <p className="mt-1 text-on-surface-variant">
            Consulta gráficas de crecimiento, indicadores nutricionales y metas diarias.
          </p>
        </div>

        <div className="flex gap-3">
          <button className="flex items-center gap-2 rounded-lg bg-surface-container-high px-4 py-2 text-sm transition hover:bg-surface-container-highest">
            <span className="material-symbols-outlined">download</span>
            Exportar
          </button>
          <button className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-bold text-on-primary shadow-md transition hover:opacity-90">
            <span className="material-symbols-outlined">add</span>
            Nuevo registro
          </button>
        </div>
      </section>

      <div className="grid grid-cols-12 gap-6">
        <section className="col-span-12 flex flex-col gap-6 lg:col-span-8">
          <div className="flex gap-2 overflow-x-auto rounded-xl border border-outline-variant bg-surface-container-lowest p-2">
            {chartTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setChartType(type.id)}
                className={`flex min-w-fit flex-1 items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-bold transition-all ${
                  chartType === type.id
                    ? 'bg-primary text-on-primary shadow-sm'
                    : 'text-on-surface-variant hover:bg-surface-container'
                }`}
              >
                <span
                  className="material-symbols-outlined"
                  style={{
                    fontVariationSettings: chartType === type.id ? "'FILL' 1" : "'FILL' 0",
                  }}
                >
                  {type.icon}
                </span>
                {type.label}
              </button>
            ))}
          </div>

          <article className="flex min-h-[500px] flex-col overflow-hidden rounded-xl border border-outline-variant bg-surface-container-lowest shadow-sm">
            <div className="flex flex-col justify-between gap-4 border-b border-outline-variant p-6 md:flex-row md:items-center">
              <div>
                <h3 className="text-lg font-bold">
                  Curva de crecimiento: {chartTypes.find((type) => type.id === chartType)?.label}
                </h3>
                <p className="text-xs text-on-surface-variant">
                  Visualización referencial del historial registrado.
                </p>
              </div>

              <div className="flex items-center gap-4 text-xs">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-primary"></span>
                  Perfil
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full border-2 border-secondary"></span>
                  Referencia
                </div>
                <button
                  onClick={() => setExpanded(true)}
                  className="rounded-full bg-primary-fixed px-3 py-1 font-bold text-primary"
                >
                  Ampliar
                </button>
              </div>
            </div>

            <div className="chart-container relative flex-grow p-8">
              <GrowthChart data={data} large={false} />
            </div>
          </article>
        </section>

        <aside className="col-span-12 flex flex-col gap-6 lg:col-span-4">
          <article className="rounded-xl border border-outline-variant bg-surface-container-lowest p-6 shadow-sm">
            <h3 className="mb-6 flex items-center gap-2 font-bold">
              <span className="material-symbols-outlined text-primary">analytics</span>
              Indicadores actuales
            </h3>

            <Indicator label="IMC actual" value="16.2" status="Rango saludable" percent={62} />
            <Indicator label="Hidratación" value="72%" status="Meta diaria" percent={72} />
            <Indicator label="Calorías" value="1450 kcal" status="Requerimiento estimado" percent={80} />

            <div className="mt-6 rounded-xl border border-primary/10 bg-primary-fixed/20 p-4">
              <p className="mb-1 text-xs font-bold text-primary">Tasa Metabólica Basal</p>
              <p className="text-2xl font-bold">
                984 <span className="text-sm font-normal text-on-surface-variant">kcal/día</span>
              </p>
            </div>
          </article>

          <article className="rounded-xl border border-secondary/20 bg-secondary-container/10 p-6 shadow-sm">
            <h4 className="mb-3 flex items-center gap-2 text-xs font-bold uppercase text-secondary">
              <span className="material-symbols-outlined">clinical_notes</span>
              Observaciones nutricionales
            </h4>
            <p className="text-sm leading-relaxed text-on-secondary-container">
              El seguimiento muestra una tendencia estable. Actualiza peso y talla para mejorar los
              cálculos de IMC, TMB, hidratación y calorías recomendadas.
            </p>
          </article>

          <article className="rounded-xl border border-outline-variant bg-surface-container-lowest p-6 shadow-sm">
            <h4 className="mb-4 font-bold">Historial reciente</h4>
            <div className="space-y-3">
              <HistoryItem label="Peso registrado" value="16.5 kg" date="Hoy" />
              <HistoryItem label="Talla registrada" value="102 cm" date="Hace 2 días" />
              <HistoryItem label="Hidratación" value="4/6 vasos" date="Hoy" />
            </div>
          </article>
        </aside>
      </div>

      {expanded && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
          <div className="w-full max-w-5xl rounded-2xl bg-surface-container-lowest shadow-2xl">
            <div className="flex items-center justify-between border-b border-outline-variant p-6">
              <div>
                <h3 className="text-xl font-bold text-primary">
                  Gráfica ampliada: {chartTypes.find((type) => type.id === chartType)?.label}
                </h3>
                <p className="text-sm text-on-surface-variant">
                  Vista detallada del indicador seleccionado.
                </p>
              </div>
              <button
                onClick={() => setExpanded(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-container-high hover:bg-primary hover:text-white"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="chart-container h-[520px] p-8">
              <GrowthChart data={data} large />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function GrowthChart({ data, large }) {
  const width = 800
  const height = 400
  const step = width / (data.length - 1)

  const points = data.map((value, index) => {
    const x = index * step
    const y = height - (value / 100) * height
    return [x, y]
  })

  const path = points
    .map(([x, y], index) => `${index === 0 ? 'M' : 'L'} ${x},${y}`)
    .join(' ')

  return (
    <svg className="h-full w-full" preserveAspectRatio="none" viewBox={`0 0 ${width} ${height}`}>
      <path
        d="M 0,350 Q 200,330 400,260 T 800,90"
        fill="none"
        stroke="#006d36"
        strokeDasharray="8,4"
        strokeWidth="3"
        opacity="0.35"
      />
      <path
        d={path}
        fill="none"
        stroke="#0096ff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={large ? 5 : 4}
      />
      {points.map(([x, y], index) => (
        <circle
          key={`${x}-${y}`}
          cx={x}
          cy={y}
          fill="#0096ff"
          r={index === points.length - 1 ? 8 : 5}
        />
      ))}
    </svg>
  )
}

function Indicator({ label, value, status, percent }) {
  return (
    <div className="mb-6">
      <div className="mb-2 flex items-end justify-between">
        <span className="text-xs text-on-surface-variant">{label}</span>
        <span className="text-lg font-bold text-secondary">{value}</span>
      </div>
      <div className="h-3 w-full overflow-hidden rounded-full bg-surface-container">
        <div className="h-full rounded-full bg-secondary" style={{ width: `${percent}%` }}></div>
      </div>
      <p className="mt-1 text-xs text-on-surface-variant">{status}</p>
    </div>
  )
}

function HistoryItem({ label, value, date }) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-surface-container-low p-3">
      <div>
        <p className="text-sm font-bold">{label}</p>
        <p className="text-xs text-on-surface-variant">{date}</p>
      </div>
      <span className="font-bold text-primary">{value}</span>
    </div>
  )
}

export default ProgressPage