function LoadingState({ text = 'Cargando información...' }) {
  return (
    <div className="flex min-h-[220px] flex-col items-center justify-center rounded-xl border border-outline-variant bg-surface-container-lowest p-8 text-center">
      <div className="mb-4 h-10 w-10 animate-spin rounded-full border-4 border-primary-fixed border-t-primary"></div>
      <p className="font-bold text-on-surface">{text}</p>
    </div>
  )
}

export default LoadingState