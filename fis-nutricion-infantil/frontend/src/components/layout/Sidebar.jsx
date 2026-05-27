import { NavLink } from 'react-router-dom'

const navItems = [
  { path: '/', icon: 'home', label: 'Inicio' },
  { path: '/perfiles', icon: 'child_care', label: 'Perfiles infantiles' },
  { path: '/progreso', icon: 'trending_up', label: 'Progreso' },
  { path: '/nutricion', icon: 'analytics', label: 'Nutrición' },
  { path: '/biometria', icon: 'monitor_weight', label: 'Biometría' },
  { path: '/recetas', icon: 'restaurant_menu', label: 'Recetas' },
  { path: '/alertas', icon: 'notifications', label: 'Alertas' },
  { path: '/recursos', icon: 'menu_book', label: 'Recursos' },
  { path: '/configuracion', icon: 'settings', label: 'Configuración' },
]

function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 z-50 hidden h-screen w-[260px] flex-col overflow-y-auto border-r border-outline-variant bg-surface-container-lowest py-8 shadow-sm md:flex">
      <div className="mb-10 px-6">
        <h1 className="text-2xl font-bold text-primary">FIS Nutrición</h1>
        <p className="text-xs uppercase tracking-widest text-on-surface-variant">
          Gestión Pediátrica
        </p>
      </div>

      <nav className="flex flex-grow flex-col">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-6 py-3 transition-all ${
                isActive
                  ? 'border-l-4 border-primary bg-primary-fixed text-on-primary-fixed-variant'
                  : 'text-on-surface-variant hover:bg-surface-container-high'
              }`
            }
          >
            <span className="material-symbols-outlined">{item.icon}</span>
            <span className="font-medium">{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar