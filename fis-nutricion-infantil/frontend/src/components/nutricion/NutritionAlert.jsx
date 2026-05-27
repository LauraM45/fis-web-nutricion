function NutritionAlert({ type = 'info', title, message }) {
  const styles = {
    info: 'border-primary-fixed bg-primary-fixed/30 text-primary',
    success: 'border-secondary-fixed bg-secondary-fixed/30 text-secondary',
    warning: 'border-tertiary-fixed bg-tertiary-fixed/40 text-tertiary',
    danger: 'border-error-container bg-error-container/60 text-error',
  }

  const icons = {
    info: 'info',
    success: 'check_circle',
    warning: 'warning',
    danger: 'error',
  }

  return (
    <article className={`rounded-xl border p-5 ${styles[type]}`}>
      <div className="flex items-start gap-3">
        <span className="material-symbols-outlined">{icons[type]}</span>
        <div>
          <h4 className="font-bold">{title}</h4>
          <p className="mt-1 text-sm opacity-90">{message}</p>
        </div>
      </div>
    </article>
  )
}

export default NutritionAlert