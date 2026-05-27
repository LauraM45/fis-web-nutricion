import { Badge, Button } from '../common'

function RecipeDetail({ recipe, onClose }) {
  if (!recipe) return null

  return (
    <div className="fixed inset-0 z-[80] flex justify-end bg-black/40 backdrop-blur-sm">
      <aside className="h-screen w-full max-w-2xl overflow-y-auto bg-surface-container-lowest shadow-2xl">
        <div className="relative h-72">
          <img alt={recipe.nombre} className="h-full w-full object-cover" src={recipe.imagen} />

          <button
            className="absolute left-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg"
            type="button"
            onClick={onClose}
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="p-8">
          <Badge>{recipe.categoria || 'Receta'}</Badge>
          <h2 className="mt-4 text-3xl font-bold text-primary">{recipe.nombre}</h2>
          <p className="mt-2 text-on-surface-variant">{recipe.descripcion}</p>

          <div className="my-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            <Nutrient label="Calorías" value={recipe.calorias || '--'} />
            <Nutrient label="Proteína" value={recipe.proteina || '--'} />
            <Nutrient label="Grasas" value={recipe.grasas || '--'} />
            <Nutrient label="Carbs" value={recipe.carbohidratos || '--'} />
          </div>

          <h3 className="mb-4 flex items-center gap-2 font-bold">
            <span className="material-symbols-outlined text-primary">format_list_bulleted</span>
            Ingredientes
          </h3>

          <ul className="mb-8 space-y-2 text-sm text-on-surface-variant">
            {(recipe.ingredientes || []).map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-primary">•</span>
                {item}
              </li>
            ))}
          </ul>

          <h3 className="mb-4 flex items-center gap-2 font-bold">
            <span className="material-symbols-outlined text-primary">menu_book</span>
            Preparación
          </h3>

          <ol className="mb-8 space-y-3 text-sm text-on-surface-variant">
            {(recipe.pasos || []).map((step, index) => (
              <li key={step} className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-on-primary">
                  {index + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>

          <Button className="w-full" icon="restaurant">
            Guardar recomendación
          </Button>
        </div>
      </aside>
    </div>
  )
}

function Nutrient({ label, value }) {
  return (
    <div className="rounded-xl bg-surface-container-low p-4 text-center">
      <p className="text-[10px] font-bold uppercase text-outline">{label}</p>
      <p className="font-bold text-on-surface">{value}</p>
    </div>
  )
}

export default RecipeDetail