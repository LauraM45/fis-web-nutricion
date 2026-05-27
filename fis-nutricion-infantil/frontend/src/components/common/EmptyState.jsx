function EmptyState({
  icon = 'info',
  title = 'Sin información',
  description = 'Todavía no hay datos para mostrar.',
  action,
}) {
  return (
    <div className="flex min-h-[240px] flex-col items-center justify-center rounded-xl border border-dashed border-outline-variant bg-surface-container-lowest p-8 text-center">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary-fixed text-primary">
        <span className="material-symbols-outlined text-3xl">{icon}</span>
      </div>

      <h3 className="text-xl font-bold text-on-surface">{title}</h3>
      <p className="mt-2 max-w-md text-sm text-on-surface-variant">{description}</p>

      {action && <div className="mt-5">{action}</div>}
    </div>
  )
}

export default EmptyState