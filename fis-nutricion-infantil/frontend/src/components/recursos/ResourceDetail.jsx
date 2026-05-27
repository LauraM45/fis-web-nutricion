import { Button, Badge } from '../common'

function ResourceDetail({ resource, onClose }) {
  if (!resource) return null

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/40 px-4 backdrop-blur-sm">
      <article className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-surface-container-lowest shadow-2xl">
        <div className="relative h-72">
          <img alt={resource.titulo} className="h-full w-full object-cover" src={resource.imagen} />

          <button
            className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg"
            type="button"
            onClick={onClose}
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="p-8">
          <Badge tone="secondary">{resource.categoria}</Badge>
          <h2 className="mt-4 text-3xl font-bold text-primary">{resource.titulo}</h2>
          <p className="mt-4 leading-7 text-on-surface-variant">{resource.contenido}</p>

          <div className="mt-8">
            <Button icon="open_in_new">Abrir recurso completo</Button>
          </div>
        </div>
      </article>
    </div>
  )
}

export default ResourceDetail