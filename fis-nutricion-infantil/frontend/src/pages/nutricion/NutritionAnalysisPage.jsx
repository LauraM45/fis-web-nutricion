import { useState } from 'react'
import { Button, SectionHeader } from '../../components/common'
import { NutritionAlert, NutritionSummary } from '../../components/nutricion'

const profiles = ['Mateo García', 'Sofía Ruiz', 'Lucía Méndez']

function NutritionAnalysisPage() {
  const [selectedProfile, setSelectedProfile] = useState(profiles[0])

  const data = {
    imc: '16.2',
    tmb: '984',
    agua: '1250',
    calorias: '1450',
    porcentajeAgua: 72,
    porcentajeCalorias: 84,
  }

  return (
    <div>
      <SectionHeader
        title="Análisis nutricional"
        description="Consulta indicadores calculados como IMC, TMB, hidratación y metas calóricas."
        action={
          <Button icon="calculate">
            Recalcular indicadores
          </Button>
        }
      />

      <div className="mb-8 flex flex-wrap gap-3">
        {profiles.map((profile) => (
          <button
            key={profile}
            className={`rounded-full px-5 py-2 text-sm font-bold transition-colors ${
              selectedProfile === profile
                ? 'bg-primary text-on-primary'
                : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-variant'
            }`}
            type="button"
            onClick={() => setSelectedProfile(profile)}
          >
            {profile}
          </button>
        ))}
      </div>

      <div className="mb-8">
        <NutritionSummary data={data} />
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        <NutritionAlert
          type="success"
          title="Estado general estable"
          message={`${selectedProfile} mantiene indicadores dentro del rango esperado para su edad.`}
        />

        <NutritionAlert
          type="warning"
          title="Revisar hidratación"
          message="La meta de agua diaria todavía no se completa. Se recomienda activar recordatorios."
        />

        <NutritionAlert
          type="info"
          title="Recomendación"
          message="Consultar recetas con alto aporte de fibra y proteínas suaves para complementar el día."
        />
      </div>
    </div>
  )
}

export default NutritionAnalysisPage