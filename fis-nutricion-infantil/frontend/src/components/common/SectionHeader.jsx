function SectionHeader({
  title,
  description,
  action,
  eyebrow,
}) {
  return (
    <section className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
      <div>
        {eyebrow && (
          <p className="mb-2 text-xs font-bold uppercase tracking-wider text-primary">
            {eyebrow}
          </p>
        )}

        <h1 className="text-3xl font-bold text-on-surface md:text-4xl">
          {title}
        </h1>

        {description && (
          <p className="mt-2 max-w-2xl text-on-surface-variant">
            {description}
          </p>
        )}
      </div>

      {action && <div>{action}</div>}
    </section>
  )
}

export default SectionHeader