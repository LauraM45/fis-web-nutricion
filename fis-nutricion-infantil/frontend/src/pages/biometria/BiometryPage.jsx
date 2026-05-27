import { useState } from 'react'
import { Button, Input, SectionHeader } from '../../components/common'
import { GrowthChart } from '../../components/progreso'

const initialForm = {
  perfil: '',
  peso: '',
  talla: '',
  fecha: '',
}

const history = [
  { id: 1, perfil: 'Mateo García', fecha: '2026-05-01', peso: '18.2 kg', talla: '106 cm' },
  { id: 2, perfil: 'Mateo García', fecha: '2026-04-01', peso: '17.8 kg', talla: '105 cm' },
  { id: 3, perfil: 'Sofía Ruiz', fecha: '2026-04-18', peso: '13.1 kg', talla: '93 cm' },
]

function BiometryPage() {
  const [form, setForm] = useState(initialForm)
  const [message, setMessage] = useState('')

  function update(field, value) {
    setForm((current) => ({ ...current, [field]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    setMessage('Medición registrada visualmente. Luego la conectamos al endpoint real.')
    setForm(initialForm)
  }

  return (
    <div>
      <SectionHeader
        title="Biometría infantil"
        description="Registro de peso, talla y seguimiento histórico de mediciones."
        action={
          <Button icon="history">
            Ver historial completo
          </Button>
        }
      />

      <div className="grid grid-cols-1 gap-8 xl:grid-cols-12">
        <section className="xl:col-span-4">
          <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-6 clinical-shadow">
            <h2 className="mb-2 text-xl font-bold text-on-surface">Registrar medición</h2>
            <p className="mb-6 text-sm text-on-surface-variant">
              Ingresa los datos biométricos del perfil infantil seleccionado.
            </p>

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <Input
                label="Perfil infantil"
                id="biometry-profile"
                value={form.perfil}
                placeholder="Ej. Mateo García"
                onChange={(value) => update('perfil', value)}
              />

              <Input
                label="Peso en kg"
                id="biometry-weight"
                type="number"
                value={form.peso}
                placeholder="Ej. 18.5"
                onChange={(value) => update('peso', value)}
              />

              <Input
                label="Talla en cm"
                id="biometry-height"
                type="number"
                value={form.talla}
                placeholder="Ej. 106"
                onChange={(value) => update('talla', value)}
              />

              <Input
                label="Fecha"
                id="biometry-date"
                type="date"
                value={form.fecha}
                onChange={(value) => update('fecha', value)}
              />

              {message && (
                <p className="rounded-xl bg-primary-fixed/40 p-3 text-sm font-bold text-primary">
                  {message}
                </p>
              )}

              <Button type="submit" icon="save">
                Registrar medición
              </Button>
            </form>
          </div>
        </section>

        <section className="xl:col-span-8">
          <GrowthChart title="Evolución biométrica" activeType="peso" />

          <div className="mt-6 rounded-xl border border-outline-variant bg-surface-container-lowest clinical-shadow">
            <div className="border-b border-outline-variant p-5">
              <h3 className="font-bold text-on-surface">Últimas mediciones</h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-surface-container-low text-on-surface-variant">
                  <tr>
                    <th className="p-4">Perfil</th>
                    <th className="p-4">Fecha</th>
                    <th className="p-4">Peso</th>
                    <th className="p-4">Talla</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant">
                  {history.map((item) => (
                    <tr key={item.id}>
                      <td className="p-4 font-bold">{item.perfil}</td>
                      <td className="p-4">{item.fecha}</td>
                      <td className="p-4">{item.peso}</td>
                      <td className="p-4">{item.talla}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default BiometryPage