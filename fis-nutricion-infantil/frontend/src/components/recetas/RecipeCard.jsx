import Badge from '../common/Badge'

function RecipeCard({ recipe, favorite = false, onToggleFavorite, onClick }) {
  return (
    <article className="group overflow-hidden rounded-xl border border-outline-variant bg-surface-container-lowest clinical-shadow transition-all hover:-translate-y-1 hover:shadow-xl">
      <button className="block w-full text-left" type="button" onClick={onClick}>
        <div className="relative h-48 overflow-hidden">
          <img
            alt={recipe.nombre}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            src={recipe.imagen}
          />
          <div className="absolute bottom-4 left-4">
            <Badge>{recipe.categoria || 'Saludable'}</Badge>
          </div>
        </div>
      </button>

      <div className="p-5">
        <div className="mb-3 flex items-start justify-between gap-3">
          <button className="text-left" type="button" onClick={onClick}>
            <h3 className="text-lg font-bold text-on-surface">{recipe.nombre}</h3>
            <p className="text-sm text-on-surface-variant">{recipe.descripcion}</p>
          </button>

          <button
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface-container-low text-secondary transition-colors hover:bg-secondary hover:text-on-secondary"
            type="button"
            onClick={onToggleFavorite}
          >
            <span className="material-symbols-outlined" style={{ fontVariationSettings: favorite ? "'FILL' 1" : "'FILL' 0" }}>
              favorite
            </span>
          </button>
        </div>

        <div className="grid grid-cols-3 gap-2 border-t border-outline-variant pt-4 text-center">
          <MiniStat label="Kcal" value={recipe.calorias || '--'} />
          <MiniStat label="Tiempo" value={recipe.tiempo || '20m'} />
          <MiniStat label="Edad" value={recipe.edad || '2+'} />
        </div>
      </div>
    </article>
  )
}

function MiniStat({ label, value }) {
  return (
    <div>
      <p className="text-[10px] font-bold uppercase text-outline">{label}</p>
      <p className="text-sm font-bold text-primary">{value}</p>
    </div>
  )
}

export default RecipeCard