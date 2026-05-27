function GrowthChart({ title = 'Curva de crecimiento', activeType = 'peso', expanded = false }) {
  const lineColor = activeType === 'talla' ? '#006d36' : activeType === 'imc' ? '#855316' : '#0096ff'

  return (
    <div className={`chart-container relative rounded-xl border border-outline-variant bg-surface-container-lowest p-6 ${expanded ? 'h-[620px]' : 'h-[420px]'}`}>
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="font-bold text-on-surface">{title}</h3>
          <p className="text-xs text-on-surface-variant">Datos comparados por edad</p>
        </div>

        <div className="flex items-center gap-3 text-xs text-on-surface-variant">
          <span className="flex items-center gap-1">
            <span className="h-3 w-3 rounded-full bg-primary"></span>
            Perfil
          </span>
          <span className="flex items-center gap-1">
            <span className="h-3 w-3 rounded-full border-2 border-secondary"></span>
            Referencia
          </span>
        </div>
      </div>

      <svg className="h-[calc(100%-70px)] w-full" preserveAspectRatio="none" viewBox="0 0 800 400">
        <path d="M 0,360 Q 180,335 350,290 T 800,110" fill="none" stroke="#bfc7d5" strokeWidth="2" opacity="0.7" />
        <path d="M 0,310 Q 180,290 350,240 T 800,70" fill="none" stroke="#006d36" strokeDasharray="8,4" strokeWidth="3" opacity="0.45" />
        <path d="M 0,320 Q 160,300 320,250 T 700,130" fill="none" stroke={lineColor} strokeLinecap="round" strokeWidth="4" />
        {[130, 260, 390, 520, 650].map((cx, index) => (
          <circle key={cx} cx={cx} cy={300 - index * 38} r={index === 4 ? 7 : 5} fill={lineColor} />
        ))}
      </svg>
    </div>
  )
}

export default GrowthChart