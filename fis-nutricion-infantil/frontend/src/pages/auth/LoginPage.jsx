import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '../../context/AuthContext'

const initialForm = {
  correo: '',
  contrasena: '',
}

function LoginPage() {
  const [form, setForm] = useState(initialForm)
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { login } = useAuth()

  function updateField(field, value) {
    setForm((current) => ({ ...current, [field]: value }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setLoading(true)
    setMessage('')

    try {
      await login({
        correo: form.correo,
        contrasena: form.contrasena,
      })

      navigate('/')
    } catch {
      setMessage('No se pudo iniciar sesión. Verifica tus datos o el endpoint del backend.')
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
              Bienvenido de nuevo a FIS Nutrición Infantil
            </h1>

            <p className="max-w-md text-[18px] leading-7 text-on-surface-variant">
              Accede al panel para consultar perfiles infantiles, seguimiento nutricional,
              recetas, alertas y recursos educativos.
            </p>

            <div className="relative mt-4 h-64 w-full overflow-hidden rounded-xl clinical-shadow md:h-80 lg:h-96">
              <img
                alt="Tutor revisando información nutricional infantil"
                className="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
            </div>
          </section>

          <section className="order-1 flex justify-center lg:order-2 lg:col-span-7 lg:justify-end">
            <div className="w-full max-w-xl rounded-xl border border-surface-container bg-surface-container-low p-8 clinical-shadow md:p-12">
              <div className="flex flex-col gap-8">
                <div>
                  <h2 className="mb-2 text-[32px] font-bold text-primary">Iniciar sesión</h2>
                  <p className="text-on-surface-variant">Ingresa con la cuenta del tutor responsable.</p>
                </div>

                <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                  <Input label="Correo electrónico" id="email" type="email" placeholder="hola@ejemplo.com" value={form.correo} onChange={(value) => updateField('correo', value)} />
                  <Input label="Contraseña" id="password" type="password" placeholder="********" value={form.contrasena} onChange={(value) => updateField('contrasena', value)} />

                  <div className="flex justify-end">
                    <Link className="text-sm font-bold text-primary hover:underline" to="/recuperar">
                      ¿Olvidaste tu contraseña?
                    </Link>
                  </div>

                  {message && (
                    <p className="rounded-full bg-error-container px-5 py-3 text-center text-sm font-bold text-error">
                      {message}
                    </p>
                  )}

                  <button
                    className="w-full rounded-full bg-primary py-4 text-[20px] font-bold text-on-primary shadow-lg transition-all duration-200 hover:scale-[1.02] hover:shadow-xl active:scale-95 disabled:opacity-60"
                    disabled={loading}
                    type="submit"
                  >
                    {loading ? 'Ingresando...' : 'Entrar'}
                  </button>
                </form>

                <p className="text-center text-on-surface-variant">
                  ¿No tienes una cuenta? <Link className="font-bold text-primary hover:underline" to="/registro">Regístrate</Link>
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

export default LoginPage