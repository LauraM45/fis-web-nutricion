import { useEffect, useState } from 'react'
import { api } from './api'
import './App.css'

const tutorInicial = {
  nombre: '',
  apellido: '',
  fechaNacimiento: '',
  sexo: '',
  tipoDocumento: '',
}

const infanteInicial = {
  nombre: '',
  apellido: '',
  fechaNacimiento: '',
  sexo: '',
  tipoDocumento: '',
}

function App() {
  const [estadoApi, setEstadoApi] = useState('Probando conexion...')
  const [tutores, setTutores] = useState([])
  const [perfilesInfantiles, setPerfilesInfantiles] = useState([])
  const [tutorForm, setTutorForm] = useState(tutorInicial)
  const [infanteForm, setInfanteForm] = useState(infanteInicial)
  const [mensaje, setMensaje] = useState('')

  async function cargarDatos() {
    try {
      const [tutoresData, perfilesData] = await Promise.all([
        api.listarTutores(),
        api.listarPerfilesInfantiles(),
      ])

      setTutores(tutoresData)
      setPerfilesInfantiles(perfilesData)
      setEstadoApi('Backend conectado')
    } catch (error) {
      setEstadoApi('Backend no disponible')
      setMensaje(error.message)
    }
  }

  useEffect(() => {
    cargarDatos()
  }, [])

  function actualizarTutor(campo, valor) {
    setTutorForm((actual) => ({ ...actual, [campo]: valor }))
  }

  function actualizarInfante(campo, valor) {
    setInfanteForm((actual) => ({ ...actual, [campo]: valor }))
  }

  async function guardarTutor(event) {
    event.preventDefault()

    try {
      await api.crearTutor(tutorForm)
      setTutorForm(tutorInicial)
      setMensaje('Tutor guardado correctamente.')
      await cargarDatos()
    } catch (error) {
      setMensaje(error.message)
    }
  }

  async function guardarPerfilInfantil(event) {
    event.preventDefault()

    try {
      await api.crearPerfilInfantil({
        infante: infanteForm,
      })

      setInfanteForm(infanteInicial)
      setMensaje('Perfil infantil guardado correctamente.')
      await cargarDatos()
    } catch (error) {
      setMensaje(error.message)
    }
  }

  return (
    <main className="app-shell">
      <section className="topbar">
        <div>
          <p className="eyebrow">Nutricion infantil</p>
          <h1>Panel de conexion React + Spring Boot</h1>
        </div>

        <span className={estadoApi === 'Backend conectado' ? 'status ok' : 'status'}>
          {estadoApi}
        </span>
      </section>

      {mensaje && <p className="notice">{mensaje}</p>}

      <section className="grid">
        <form className="panel" onSubmit={guardarTutor}>
          <h2>Registrar tutor</h2>

          <Input
            label="Nombre"
            value={tutorForm.nombre}
            onChange={(value) => actualizarTutor('nombre', value)}
          />

          <Input
            label="Apellido"
            value={tutorForm.apellido}
            onChange={(value) => actualizarTutor('apellido', value)}
          />

          <Input
            label="Fecha nacimiento"
            type="date"
            value={tutorForm.fechaNacimiento}
            onChange={(value) => actualizarTutor('fechaNacimiento', value)}
          />

          <Input
            label="Sexo"
            value={tutorForm.sexo}
            onChange={(value) => actualizarTutor('sexo', value)}
          />

          <Input
            label="Tipo documento"
            value={tutorForm.tipoDocumento}
            onChange={(value) => actualizarTutor('tipoDocumento', value)}
          />

          <button type="submit">Guardar tutor</button>
        </form>

        <form className="panel" onSubmit={guardarPerfilInfantil}>
          <h2>Crear perfil infantil</h2>

          <Input
            label="Nombre"
            value={infanteForm.nombre}
            onChange={(value) => actualizarInfante('nombre', value)}
          />

          <Input
            label="Apellido"
            value={infanteForm.apellido}
            onChange={(value) => actualizarInfante('apellido', value)}
          />

          <Input
            label="Fecha nacimiento"
            type="date"
            value={infanteForm.fechaNacimiento}
            onChange={(value) => actualizarInfante('fechaNacimiento', value)}
          />

          <Input
            label="Sexo"
            value={infanteForm.sexo}
            onChange={(value) => actualizarInfante('sexo', value)}
          />

          <Input
            label="Tipo documento"
            value={infanteForm.tipoDocumento}
            onChange={(value) => actualizarInfante('tipoDocumento', value)}
          />

          <button type="submit">Guardar perfil</button>
        </form>
      </section>

      <section className="grid">
        <DataList
          title="Tutores registrados"
          items={tutores}
          empty="No hay tutores guardados."
        />

        <DataList
          title="Perfiles infantiles"
          items={perfilesInfantiles}
          empty="No hay perfiles infantiles guardados."
        />
      </section>
    </main>
  )
}

function Input({ label, value, onChange, type = 'text' }) {
  return (
    <label className="field">
      <span>{label}</span>
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  )
}

function DataList({ title, items, empty }) {
  return (
    <article className="panel">
      <h2>{title}</h2>

      {items.length === 0 ? (
        <p className="muted">{empty}</p>
      ) : (
        <ul className="data-list">
          {items.map((item, index) => (
            <li key={item.id ?? item.idPerfil ?? index}>
              <strong>
                {item.nombre ?? item.infante?.nombre ?? `Registro ${index + 1}`}
              </strong>
              <span>
                {item.apellido ?? item.infante?.apellido ?? 'Sin detalle'}
              </span>
            </li>
          ))}
        </ul>
      )}
    </article>
  )
}

export default App