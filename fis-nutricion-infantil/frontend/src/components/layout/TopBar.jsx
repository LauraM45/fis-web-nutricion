import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

function Topbar() {
  const [darkMode, setDarkMode] = useState(false)
  const navigate = useNavigate()
  const { logout, user } = useAuth()

  function toggleDarkMode() {
    setDarkMode((current) => !current)
    document.documentElement.classList.toggle('dark')
  }

  function handleLogout() {
    logout()
    navigate('/login')
  }

  return (
    <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-outline-variant bg-surface/90 px-4 backdrop-blur-md md:fixed md:right-0 md:w-[calc(100%-260px)] md:px-8">
      <div className="hidden w-96 items-center gap-4 rounded-full border border-outline-variant bg-surface-container-low px-4 py-2 transition-all focus-within:ring-2 focus-within:ring-primary-container md:flex">
        <span className="material-symbols-outlined text-on-surface-variant">search</span>
        <input
          className="w-full border-none bg-transparent text-sm placeholder:text-on-surface-variant focus:ring-0"
          placeholder="Buscar perfiles, recetas o recursos..."
          type="text"
        />
      </div>

      <Link className="text-lg font-bold text-primary md:hidden" to="/">
        FIS Nutrición
      </Link>

      <div className="flex items-center gap-4">
        <button
          onClick={toggleDarkMode}
          className="p-2 text-on-surface-variant transition-colors hover:text-primary"
          type="button"
        >
          <span className="material-symbols-outlined">
            {darkMode ? 'light_mode' : 'dark_mode'}
          </span>
        </button>

        <button className="relative p-2 text-on-surface-variant transition-colors hover:text-primary" type="button">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-error"></span>
        </button>

        <div className="hidden items-center gap-3 border-l border-outline-variant pl-4 lg:flex">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary-fixed bg-primary-fixed">
            <span className="material-symbols-outlined text-primary">person</span>
          </div>
          <div>
            <p className="text-sm font-bold leading-none">
              {user?.nombre || user?.correo || 'Tutor'}
            </p>
            <p className="text-[10px] uppercase text-on-surface-variant">
              Cuenta activa
            </p>
          </div>
        </div>

        <button
          className="hidden rounded-full border border-outline-variant px-4 py-2 text-sm font-bold text-on-surface-variant transition-colors hover:border-primary hover:text-primary md:block"
          type="button"
          onClick={handleLogout}
        >
          Cerrar sesión
        </button>
      </div>
    </header>
  )
}

export default Topbar