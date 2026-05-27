function Button({
  children,
  type = 'button',
  variant = 'primary',
  size = 'md',
  icon,
  disabled = false,
  className = '',
  onClick,
}) {
  const variants = {
    primary: 'bg-primary text-on-primary shadow-md hover:opacity-90',
    secondary: 'bg-secondary text-on-secondary shadow-md hover:opacity-90',
    outline: 'border border-outline-variant bg-transparent text-on-surface hover:border-primary hover:text-primary',
    ghost: 'bg-transparent text-on-surface-variant hover:bg-surface-container-high',
    danger: 'bg-error text-on-error shadow-md hover:opacity-90',
  }

  const sizes = {
    sm: 'px-3 py-2 text-xs',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-6 py-3 text-base',
  }

  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-full font-bold transition-all active:scale-95 disabled:pointer-events-none disabled:opacity-60 ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {icon && <span className="material-symbols-outlined text-[20px]">{icon}</span>}
      {children}
    </button>
  )
}

export default Button