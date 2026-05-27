function ErrorMessage({ message = 'Ocurrió un error.', onRetry }) {
  return (
    <div className="rounded-xl border border-error-container bg-error-container/50 p-5 text-error">
      <div className="flex items-start gap-3">
        <span className="material-symbols-outlined">error</span>

        <div className="flex-1">
          <p className="font-bold">No se pudo completar la acción</p>
          <p className="mt-1 text-sm">{message}</p>

          {onRetry && (
            <button
              className="mt-3 rounded-full bg-error px-4 py-2 text-sm font-bold text-on-error"
              type="button"
              onClick={onRetry}
            >
              Reintentar
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default ErrorMessage