import { Input, Select, Button } from '../common'

const sexOptions = [
  { value: 'Femenino', label: 'Femenino' },
  { value: 'Masculino', label: 'Masculino' },
]

function ProfileForm({ form, onChange, onSubmit, loading = false }) {
  function update(field, value) {
    onChange({ ...form, [field]: value })
  }

  return (
    <form className="grid grid-cols-1 gap-4 md:grid-cols-2" onSubmit={onSubmit}>
      <Input
        label="Nombre"
        id="profile-name"
        value={form.nombre}
        placeholder="Ej. Mateo"
        required
        onChange={(value) => update('nombre', value)}
      />

      <Select
        label="Sexo"
        id="profile-sex"
        value={form.sexo}
        options={sexOptions}
        required
        onChange={(value) => update('sexo', value)}
      />

      <Input
        label="Fecha de nacimiento"
        id="profile-birthdate"
        type="date"
        value={form.fechaNacimiento}
        required
        onChange={(value) => update('fechaNacimiento', value)}
      />

      <Input
        label="Documento"
        id="profile-document"
        value={form.tipoDocumento || ''}
        placeholder="Opcional"
        onChange={(value) => update('tipoDocumento', value)}
      />

      <div className="md:col-span-2">
        <Button type="submit" disabled={loading} icon="save">
          {loading ? 'Guardando...' : 'Guardar perfil'}
        </Button>
      </div>
    </form>
  )
}

export default ProfileForm