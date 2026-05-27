function Select({
  label,
  id,
  value,
  onChange,
  options = [],
  required = false,
  disabled = false,
  placeholder = 'Selecciona una opción',
}) {
  return (
    <label className="flex flex-col gap-2" htmlFor={id}>
      {label && (
        <span className="text-[14px] font-bold text-on-surface">
          {label}
          {required && <span className="text-error"> *</span>}
        </span>
      )}

      <select
        className="w-full rounded-full border border-outline-variant bg-background px-5 py-3 text-on-surface outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary disabled:cursor-not-allowed disabled:opacity-60"
        disabled={disabled}
        id={id}
        required={required}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        <option value="">{placeholder}</option>

        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  )
}

export default Select