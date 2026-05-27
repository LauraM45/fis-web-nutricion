function StatCard({
  title,
  value,
  description,
  icon,
  tone = 'primary',
  className = '',
}) {
  const tones = {
    primary: 'bg-primary-fixed text-primary',
    secondary: 'bg-secondary-fixed text-secondary',
    warning: 'bg-tertiary-fixed text-tertiary',
    danger: 'bg-error-container text-error',
  }

  return (
    <article className={`glass-card rounded-xl border border-outline-variant p-6 clinical-shadow ${className}`}>
      <div className="flex items-center gap-5">
        <div className={`flex h-14 w-14 items-center justify-center rounded-full ${tones[tone]}`}>
          <span className="material-symbols-outlined text-3xl">{icon}</span>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">
            {title}
          </p>
          <p className="text-3xl font-bold text-on-surface">{value}</p>
          {description && (
            <p className="mt-1 text-xs text-on-surface-variant">{description}</p>
          )}
        </div>
      </div>
    </article>
  )
}

export default StatCard