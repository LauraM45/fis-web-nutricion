import MetricCard from '../common/MetricCard'
import IndicatorBar from '../progreso/IndicatorBar'

function NutritionSummary({ data = {} }) {
  return (
    <section className="rounded-xl border border-outline-variant bg-surface-container-lowest p-6 clinical-shadow">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-on-surface">Resumen nutricional</h3>
        <p className="text-sm text-on-surface-variant">
          Indicadores calculados para el perfil infantil seleccionado.
        </p>
      </div>

      <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-4">
        <MetricCard label="IMC" value={data.imc || '16.2'} icon="accessibility_new" tone="secondary" />
        <MetricCard label="TMB" value={data.tmb || '980'} unit="kcal" icon="bolt" tone="primary" />
        <MetricCard label="Agua" value={data.agua || '1200'} unit="ml" icon="water_drop" tone="primary" />
        <MetricCard label="Calorías" value={data.calorias || '1450'} unit="kcal" icon="local_fire_department" tone="warning" />
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <IndicatorBar label="Progreso de hidratación" value={data.porcentajeAgua || 70} />
        <IndicatorBar label="Consumo calórico estimado" value={data.porcentajeCalorias || 82} tone="warning" />
      </div>
    </section>
  )
}

export default NutritionSummary