function IndicatorBar({ label, value = 0, tone = 'primary' }) {
  const tones = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    warning: 'bg-tertiary',
    danger: 'bg-error',
  }

  const safeValue = Math.max(0, Math.min(100, Number(value)))

  return (
    <div>
      <div className="mb-2 flex justify-between text-sm">
        <span className="font-bold text-on-surface">{label}</span>
        <span className="text-on-surface-variant">{safeValue}%</span>
      </div>

      <div className="h-3 overflow-hidden rounded-full bg-surface-container-high">
        <div className={`h-full rounded-full ${tones[tone]}`} style={{ width: `${safeValue}%` }}></div>
      </div>
    </div>
  )
}

export default IndicatorBar