import { useState } from 'react'
import { Button, Input, SectionHeader } from '../../components/common'
import { useAuth } from '../../context/AuthContext'

const initialForm = {
  nombre: '',
  apellido: '',
  correo: '',
  contrasenaActual: '',
  nuevaContrasena: '',
}

function TutorProfilePage() {
  const { user } = useAuth()
  const [form, setForm] = useState({
    ...initialForm,
    nombre: user?.nombre || '',
    apellido: user?.apellido || '',
    correo: user?.correo || '',
  })
  const [message, setMessage] = useState('')

  function update(field, value) {
    setForm((current) => ({ ...current, [field]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    setMessage('Datos actualizados visualmente. Luego lo conectamos al endpoint del tutor.')
  }

  return (
    <div>
      <SectionHeader
        title="Perfil del tutor"
        description="Administra la información personal del adulto responsable de la cuenta."
      />

      <div className="grid grid-cols-1 gap-8 xl:grid-cols-12">
        <section className="xl:col-span-4">
          <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-6 text-center clinical-shadow">
            <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-primary-fixed text-primary">
              <span className="material-symbols-outlined text-6xl">person</span>
            </div>

            <h2 className="text-xl font-bold text-on-surface">
              {form.nombre || 'Tutor'} {form.apellido}
            </h2>
            <p className="text-sm text-on-surface-variant">{form.correo || 'Correo no registrado'}</p>

            <div className="mt-6 rounded-xl bg-surface-container-low p-4 text-left">
              <p className="text-xs font-bold uppercase text-on-surface-variant">Rol</p>
              <p className="font-bold text-primary">Tutor responsable</p>
            </div>
          </div>
        </section>

        <section className="xl:col-span-8">
          <form
            className="rounded-xl border border-outline-variant bg-surface-container-lowest p-6 clinical-shadow"
            onSubmit={handleSubmit}
          >
            <h2 className="mb-6 text-xl font-bold text-on-surface">
              Información personal
            </h2>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Input
                label="Nombre"
                id="tutor-name"
                value={form.nombre}
                onChange={(value) => update('nombre', value)}
              />

              <Input
                label="Apellido"
                id="tutor-lastname"
                value={form.apellido}
                onChange={(value) => update('apellido', value)}
              />

              <Input
                label="Correo electrónico"
                id="tutor-email"
                type="email"
                value={form.correo}
                onChange={(value) => update('correo', value)}
              />

              <Input
                label="Contraseña actual"
                id="tutor-current-password"
                type="password"
                value={form.contrasenaActual}
                placeholder="********"
                onChange={(value) => update('contrasenaActual', value)}
              />

              <Input
                label="Nueva contraseña"
                id="tutor-new-password"
                type="password"
                value={form.nuevaContrasena}
                placeholder="********"
                onChange={(value) => update('nuevaContrasena', value)}
              />
            </div>

            {message && (
              <p className="mt-5 rounded-xl bg-primary-fixed/40 p-3 text-sm font-bold text-primary">
                {message}
              </p>
            )}

            <div className="mt-6 flex justify-end">
              <Button type="submit" icon="save">
                Guardar cambios
              </Button>
            </div>
          </form>
        </section>
      </div>
    </div>
  )
}

export default TutorProfilePage