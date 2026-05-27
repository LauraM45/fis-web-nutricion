function Textarea({
  label,
  id,
  value,
  onChange,
  placeholder = '',
  rows = 4,
  required = false,
  disabled = false,
}) {
  return (
    <label className="flex flex-col gap-2" htmlFor={id}>
      {label && (
        <span className="text-[14px] font-bold text-on-surface">
          {label}
          {required && <span className="text-error"> *</span>}
        </span>
      )}

      <textarea
        className="w-full resize-none rounded-2xl border border-outline-variant bg-background px-5 py-4 text-on-surface outline-none transition-all placeholder:text-outline focus:border-primary focus:ring-1 focus:ring-primary disabled:cursor-not-allowed disabled:opacity-60"
        disabled={disabled}
        id={id}
        placeholder={placeholder}
        required={required}
        rows={rows}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  )
}

export default Textarea