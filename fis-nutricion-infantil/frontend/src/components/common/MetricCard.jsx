function MetricCard({
  label,
  value,
  unit,
  icon,
  tone = 'primary',
}) {
  const tones = {
    primary: 'bg-primary-fixed text-primary',
    secondary: 'bg-secondary-fixed text-secondary',
    warning: 'bg-tertiary-fixed text-tertiary',
    danger: 'bg-error-container text-error',
  }

  return (
    <article className="rounded-xl border border-outline-variant bg-surface-container-lowest p-5 clinical-shadow">
      <div className="mb-4 flex items-center justify-between">
        <div className={`flex h-11 w-11 items-center justify-center rounded-full ${tones[tone]}`}>
          <span className="material-symbols-outlined">{icon}</span>
        </div>
      </div>

      <p className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">
        {label}
      </p>

      <p className="mt-1 text-2xl font-bold text-on-surface">
        {value}
        {unit && <span className="ml-1 text-sm font-normal text-on-surface-variant">{unit}</span>}
      </p>
    </article>
  )
}

export default MetricCard