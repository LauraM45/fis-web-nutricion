import { Button, Input } from '../common'

function MeasurementForm({ form, onChange, onSubmit, loading = false }) {
  function update(field, value) {
    onChange({ ...form, [field]: value })
  }

  return (
    <form className="grid grid-cols-1 gap-4 md:grid-cols-3" onSubmit={onSubmit}>
      <Input
        label="Peso"
        id="weight"
        type="number"
        value={form.peso}
        placeholder="Ej. 18.5"
        onChange={(value) => update('peso', value)}
      />

      <Input
        label="Talla"
        id="height"
        type="number"
        value={form.talla}
        placeholder="Ej. 105"
        onChange={(value) => update('talla', value)}
      />

      <div className="flex items-end">
        <Button className="w-full" type="submit" disabled={loading} icon="monitor_weight">
          {loading ? 'Registrando...' : 'Registrar'}
        </Button>
      </div>
    </form>
  )
}

export default MeasurementForm