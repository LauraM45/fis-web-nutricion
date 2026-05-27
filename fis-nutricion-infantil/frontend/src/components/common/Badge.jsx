function Badge({ children, tone = 'primary', className = '' }) {
  const tones = {
    primary: 'bg-primary-fixed text-on-primary-fixed-variant',
    secondary: 'bg-secondary-fixed text-on-secondary-fixed-variant',
    warning: 'bg-tertiary-fixed text-on-tertiary-fixed-variant',
    danger: 'bg-error-container text-on-error-container',
    neutral: 'bg-surface-container-high text-on-surface-variant',
  }

  return (
    <span className={`inline-flex w-fit items-center rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-tight ${tones[tone]} ${className}`}>
      {children}
    </span>
  )
}

export default Badge