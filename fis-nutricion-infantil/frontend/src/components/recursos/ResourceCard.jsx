import Badge from '../common/Badge'

function ResourceCard({ resource, onClick }) {
  return (
    <button
      className="group overflow-hidden rounded-xl border border-outline-variant bg-surface-container-lowest text-left clinical-shadow transition-all hover:-translate-y-1 hover:shadow-xl"
      type="button"
      onClick={onClick}
    >
      <div className="h-44 overflow-hidden">
        <img
          alt={resource.titulo}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          src={resource.imagen}
        />
      </div>

      <div className="p-5">
        <Badge tone="secondary">{resource.categoria}</Badge>
        <h3 className="mt-3 text-lg font-bold text-on-surface group-hover:text-primary">
          {resource.titulo}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-on-surface-variant">
          {resource.descripcion}
        </p>
      </div>
    </button>
  )
}

export default ResourceCard