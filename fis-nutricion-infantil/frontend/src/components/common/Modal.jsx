function Modal({ open, title, children, onClose, size = 'md' }) {
  if (!open) return null

  const sizes = {
    sm: 'max-w-md',
    md: 'max-w-2xl',
    lg: 'max-w-4xl',
    xl: 'max-w-6xl',
  }

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/40 px-4 backdrop-blur-sm">
      <div className={`max-h-[90vh] w-full overflow-y-auto rounded-2xl bg-surface-container-lowest shadow-2xl ${sizes[size]}`}>
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-outline-variant bg-surface-container-lowest px-6 py-4">
          <h3 className="text-xl font-bold text-on-surface">{title}</h3>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-container-high text-on-surface-variant transition-colors hover:bg-primary hover:text-on-primary"
            type="button"
            onClick={onClose}
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="p-6">{children}</div>
      </div>
    </div>
  )
}

export default Modal