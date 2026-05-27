const tabs = [
  { value: 'peso', label: 'Peso', icon: 'monitor_weight' },
  { value: 'talla', label: 'Talla', icon: 'straighten' },
  { value: 'imc', label: 'IMC', icon: 'accessibility_new' },
  { value: 'tmb', label: 'TMB', icon: 'bolt' },
]

function ProgressTabs({ active, onChange }) {
  return (
    <div className="grid grid-cols-2 gap-2 rounded-xl border border-outline-variant bg-surface-container-lowest p-2 md:grid-cols-4">
      {tabs.map((tab) => {
        const selected = active === tab.value

        return (
          <button
            key={tab.value}
            className={`flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-bold transition-all ${
              selected
                ? 'bg-primary text-on-primary shadow-sm'
                : 'text-on-surface-variant hover:bg-surface-container'
            }`}
            type="button"
            onClick={() => onChange(tab.value)}
          >
            <span className="material-symbols-outlined">{tab.icon}</span>
            {tab.label}
          </button>
        )
      })}
    </div>
  )
}

export default ProgressTabs