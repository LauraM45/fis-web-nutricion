import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '../../context/AuthContext'

const initialForm = {
  nombre: '',
  apellido: '',
  correo: '',
  contrasena: '',
  confirmarContrasena: '',
  aceptaTerminos: false,
}

function RegisterPage() {
  const [form, setForm] = useState(initialForm)
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { register } = useAuth()

  function updateField(field, value) {
    setForm((current) => ({ ...current, [field]: value }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setMessage('')

    if (form.contrasena !== form.confirmarContrasena) {
      setMessage('Las contraseñas no coinciden.')
      return
    }

    if (!form.aceptaTerminos) {
      setMessage('Debes aceptar los términos para continuar.')
      return
    }

    setLoading(true)

    try {
      await register({
        nombre: form.nombre,
        apellido: form.apellido,
        correo: form.correo,
        contrasena: form.contrasena,
      })

      setMessage('Cuenta creada correctamente.')
      setTimeout(() => navigate('/login'), 700)
    } catch {
      setMessage('No se pudo crear la cuenta. Verifica el endpoint del backend.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-background text-on-background">
      <main className="flex flex-grow items-center justify-center px-margin-mobile py-section-gap md:px-margin-desktop">
        <div className="grid w-full max-w-container-max-width grid-cols-1 items-center gap-gutter lg:grid-cols-12">
          <section className="order-2 flex flex-col gap-6 lg:order-1 lg:col-span-5">
            <Brand />

            <h1 className="text-[34px] font-bold leading-tight text-primary md:text-[48px]">
              Comienza el camino hacia una nutrición saludable
            </h1>

            <p className="max-w-md text-[18px] leading-7 text-on-surface-variant">
              Crea una cuenta para registrar perfiles infantiles, configurar restricciones,
              consultar progreso y recibir recomendaciones personalizadas.
            </p>

            <div className="relative mt-4 h-64 w-full overflow-hidden rounded-xl clinical-shadow md:h-80 lg:h-96">
              <img
                alt="Familia preparando comida saludable"
                className="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=80"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
            </div>
          </section>

          <section className="order-1 flex justify-center lg:order-2 lg:col-span-7 lg:justify-end">
            <div className="w-full max-w-xl rounded-xl border border-surface-container bg-surface-container-low p-8 clinical-shadow md:p-12">
              <div className="flex flex-col gap-8">
                <div>
                  <h2 className="mb-2 text-[32px] font-bold text-primary">Crear cuenta</h2>
                  <p className="text-on-surface-variant">
                    Regístrate para comenzar tu seguimiento personalizado.
                  </p>
                </div>

                <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <Input label="Nombre" id="name" placeholder="Ej. Ana" value={form.nombre} onChange={(value) => updateField('nombre', value)} />
                    <Input label="Apellido" id="lastname" placeholder="Ej. García" value={form.apellido} onChange={(value) => updateField('apellido', value)} />
                  </div>

                  <Input label="Correo electrónico" id="email" type="email" placeholder="hola@ejemplo.com" value={form.correo} onChange={(value) => updateField('correo', value)} />

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <Input label="Contraseña" id="password" type="password" placeholder="********" value={form.contrasena} onChange={(value) => updateField('contrasena', value)} />
                    <Input label="Confirmar contraseña" id="confirm_password" type="password" placeholder="********" value={form.confirmarContrasena} onChange={(value) => updateField('confirmarContrasena', value)} />
                  </div>

                  <div className="flex items-start gap-3 py-2">
                    <input
                      checked={form.aceptaTerminos}
                      className="mt-1 rounded border-outline-variant text-primary focus:ring-primary"
                      id="terms"
                      type="checkbox"
                      onChange={(event) => updateField('aceptaTerminos', event.target.checked)}
                    />
                    <label className="text-[14px] font-normal text-on-surface-variant" htmlFor="terms">
                      Acepto los <a className="font-bold text-primary hover:underline" href="#">Términos de Servicio</a> y la <a className="font-bold text-primary hover:underline" href="#">Política de Privacidad</a>.
                    </label>
                  </div>

                  {message && (
                    <p className="rounded-full bg-primary-fixed/50 px-5 py-3 text-center text-sm font-bold text-primary">
                      {message}
                    </p>
                  )}

                  <button
                    className="w-full rounded-full bg-primary py-4 text-[20px] font-bold text-on-primary shadow-lg transition-all duration-200 hover:scale-[1.02] hover:shadow-xl active:scale-95 disabled:opacity-60"
                    disabled={loading}
                    type="submit"
                  >
                    {loading ? 'Creando cuenta...' : 'Crear cuenta'}
                  </button>
                </form>

                <p className="text-center text-on-surface-variant">
                  ¿Ya tienes una cuenta? <Link className="font-bold text-primary hover:underline" to="/login">Inicia sesión</Link>
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <AuthFooter />
    </div>
  )
}

function Brand() {
  return (
    <div className="mb-4 flex items-center gap-2">
      <span className="material-symbols-outlined text-4xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
        spa
      </span>
      <span className="text-[32px] font-bold tracking-tight text-primary">FIS Nutrición</span>
    </div>
  )
}

function Input({ label, id, value, onChange, type = 'text', placeholder }) {
  return (
    <label className="flex flex-col gap-2" htmlFor={id}>
      <span className="text-[14px] font-bold text-on-surface">{label}</span>
      <input
        className="w-full rounded-full border border-outline-variant bg-background px-6 py-4 text-on-surface outline-none transition-all placeholder:text-outline focus:border-primary focus:ring-1 focus:ring-primary"
        id={id}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  )
}

function AuthFooter() {
  return (
    <footer className="mx-auto flex w-full max-w-container-max-width flex-col items-center justify-between gap-gutter border-t border-outline-variant bg-surface-container-low px-margin-desktop py-section-gap md:flex-row">
      <div className="flex flex-col items-center gap-2 md:items-start">
        <span className="text-[24px] font-semibold text-primary">FIS Nutrición</span>
        <p className="text-on-surface-variant">Monitoreo nutricional infantil para familias y tutores.</p>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        <a className="text-[14px] font-bold text-on-surface-variant hover:text-primary" href="#">Privacidad</a>
        <a className="text-[14px] font-bold text-on-surface-variant hover:text-primary" href="#">Términos</a>
        <a className="text-[14px] font-bold text-on-surface-variant hover:text-primary" href="#">Soporte</a>
      </div>
    </footer>
  )
}

export default RegisterPage