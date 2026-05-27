function Input({
  label,
  id,
  value,
  onChange,
  type = 'text',
  placeholder = '',
  icon,
  required = false,
  disabled = false,
  className = '',
}) {
  return (
    <label className={`flex flex-col gap-2 ${className}`} htmlFor={id}>
      {label && (
        <span className="text-[14px] font-bold text-on-surface">
          {label}
          {required && <span className="text-error"> *</span>}
        </span>
      )}

      <div className="flex items-center gap-3 rounded-full border border-outline-variant bg-background px-5 py-3 transition-all focus-within:border-primary focus-within:ring-1 focus-within:ring-primary">
        {icon && (
          <span className="material-symbols-outlined text-[20px] text-on-surface-variant">
            {icon}
          </span>
        )}

        <input
          className="w-full border-none bg-transparent p-0 text-on-surface outline-none placeholder:text-outline focus:ring-0 disabled:cursor-not-allowed"
          disabled={disabled}
          id={id}
          placeholder={placeholder}
          required={required}
          type={type}
          value={value}
          onChange={(event) => onChange(event.target.value)}
        />
      </div>
    </label>
  )
}

export default Input