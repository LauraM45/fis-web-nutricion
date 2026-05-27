import { useMemo, useState } from 'react'

const recipes = [
  {
    id: 1,
    title: 'Bowl de quinoa y calabaza',
    age: '6+ años',
    kcal: 245,
    time: '20 min',
    difficulty: 'Fácil',
    restriction: 'Sin lactosa',
    favorite: true,
    image:
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80',
    ingredients: ['1/2 taza de quinoa lavada', '100g de calabaza en cubos', '1 cdta de aceite de oliva', 'Verduras suaves al vapor'],
    steps: ['Cocinar la quinoa hasta que esté suave.', 'Asar o cocinar la calabaza.', 'Mezclar con verduras y servir tibio.'],
    nutrition: { protein: '8.2g', fat: '6.5g', carbs: '38g', calories: 245 },
  },
  {
    id: 2,
    title: 'Tiras de pollo con arroz integral',
    age: '8+ años',
    kcal: 310,
    time: '25 min',
    difficulty: 'Media',
    restriction: 'Sin frutos secos',
    favorite: false,
    image:
      'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=80',
    ingredients: ['Pechuga de pollo', 'Arroz integral', 'Zanahoria rallada', 'Aceite de oliva'],
    steps: ['Cocinar el arroz.', 'Dorar el pollo en tiras.', 'Mezclar con vegetales suaves.'],
    nutrition: { protein: '21g', fat: '8g', carbs: '35g', calories: 310 },
  },
  {
    id: 3,
    title: 'Smoothie verde suave',
    age: 'Merienda',
    kcal: 160,
    time: '10 min',
    difficulty: 'Fácil',
    restriction: 'Sin gluten',
    favorite: false,
    image:
      'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?auto=format&fit=crop&w=900&q=80',
    ingredients: ['Banano', 'Espinaca', 'Agua o bebida vegetal', 'Semillas de chía'],
    steps: ['Lavar los ingredientes.', 'Licuar hasta obtener textura suave.', 'Servir frío.'],
    nutrition: { protein: '4g', fat: '3g', carbs: '28g', calories: 160 },
  },
  {
    id: 4,
    title: 'Pasta integral de colores',
    age: '7+ años',
    kcal: 285,
    time: '22 min',
    difficulty: 'Fácil',
    restriction: 'Sin lactosa',
    favorite: true,
    image:
      'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=900&q=80',
    ingredients: ['Pasta integral', 'Pollo desmechado', 'Guisantes', 'Zanahoria'],
    steps: ['Cocinar la pasta.', 'Agregar pollo y vegetales.', 'Servir con poca sal.'],
    nutrition: { protein: '16g', fat: '5g', carbs: '44g', calories: 285 },
  },
]

const filters = ['Todos', 'Favoritas', 'Sin lactosa', 'Sin gluten', 'Sin frutos secos']

function RecipesPage() {
  const [selectedFilter, setSelectedFilter] = useState('Todos')
  const [selectedRecipe, setSelectedRecipe] = useState(null)
  const [favorites, setFavorites] = useState(
    recipes.reduce((acc, recipe) => ({ ...acc, [recipe.id]: recipe.favorite }), {}),
  )

  const filteredRecipes = useMemo(() => {
    if (selectedFilter === 'Todos') return recipes
    if (selectedFilter === 'Favoritas') return recipes.filter((recipe) => favorites[recipe.id])
    return recipes.filter((recipe) => recipe.restriction === selectedFilter)
  }, [selectedFilter, favorites])

  function toggleFavorite(recipeId) {
    setFavorites((current) => ({ ...current, [recipeId]: !current[recipeId] }))
  }

  return (
    <div className="animate-in fade-in duration-500">
      <section className="mb-8 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
        <div>
          <h2 className="text-3xl font-bold text-primary">Recetas y recomendaciones</h2>
          <p className="mt-1 max-w-2xl text-on-surface-variant">
            Consulta recetas saludables, revisa ingredientes y filtra por restricciones alimentarias.
          </p>
        </div>

        <button className="flex w-fit items-center gap-2 rounded-xl bg-primary px-6 py-2.5 font-bold text-on-primary shadow-md transition hover:opacity-90">
          <span className="material-symbols-outlined">add</span>
          Nueva receta
        </button>
      </section>

      <section className="mb-8 rounded-2xl border border-outline-variant bg-surface-container-lowest p-4 shadow-sm">
        <div className="flex gap-3 overflow-x-auto hide-scrollbar">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`whitespace-nowrap rounded-full px-5 py-2 text-xs font-bold transition-colors ${
                selectedFilter === filter
                  ? 'bg-primary text-on-primary'
                  : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-variant'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {filteredRecipes.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-outline-variant p-10 text-center">
          <span className="material-symbols-outlined mb-3 text-5xl text-primary">restaurant_menu</span>
          <h3 className="font-bold">No hay recetas para este filtro</h3>
          <p className="mt-1 text-sm text-on-surface-variant">
            Prueba otra restricción o agrega nuevas recetas al sistema.
          </p>
        </div>
      ) : (
        <section className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {filteredRecipes.map((recipe) => (
            <article
              key={recipe.id}
              className="group overflow-hidden rounded-2xl border border-outline-variant bg-surface-container-lowest shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  alt={recipe.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src={recipe.image}
                />

                <div className="absolute bottom-4 left-4 flex gap-2">
                  <span className="rounded-full border border-white/20 bg-white/80 px-3 py-1 text-[10px] font-bold uppercase backdrop-blur">
                    {recipe.age}
                  </span>
                  <span className="rounded-full border border-white/20 bg-white/80 px-3 py-1 text-[10px] font-bold uppercase backdrop-blur">
                    {recipe.restriction}
                  </span>
                </div>

                <button
                  onClick={() => toggleFavorite(recipe.id)}
                  className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 backdrop-blur transition hover:scale-105"
                  type="button"
                >
                  <span
                    className={`material-symbols-outlined ${
                      favorites[recipe.id] ? 'text-secondary' : 'text-on-surface-variant'
                    }`}
                    style={{
                      fontVariationSettings: favorites[recipe.id] ? "'FILL' 1" : "'FILL' 0",
                    }}
                  >
                    favorite
                  </span>
                </button>
              </div>

              <div className="p-6">
                <h3 className="mb-2 text-lg font-bold">{recipe.title}</h3>
                <p className="mb-4 text-sm text-on-surface-variant">
                  Receta personalizada con aporte energético controlado.
                </p>

                <div className="mb-5 flex justify-between border-t border-outline-variant pt-4">
                  <MiniStat label="Kcal" value={recipe.kcal} />
                  <MiniStat label="Tiempo" value={recipe.time} />
                  <MiniStat label="Dificultad" value={recipe.difficulty} />
                </div>

                <button
                  onClick={() => setSelectedRecipe(recipe)}
                  className="w-full rounded-xl bg-primary px-4 py-3 font-bold text-on-primary transition hover:opacity-90"
                  type="button"
                >
                  Ver receta
                </button>
              </div>
            </article>
          ))}
        </section>
      )}

      {selectedRecipe && (
        <RecipeDetail
          recipe={selectedRecipe}
          favorite={favorites[selectedRecipe.id]}
          onClose={() => setSelectedRecipe(null)}
          onFavorite={() => toggleFavorite(selectedRecipe.id)}
        />
      )}
    </div>
  )
}

function MiniStat({ label, value }) {
  return (
    <div className="text-center">
      <p className="text-[10px] font-bold uppercase text-outline">{label}</p>
      <p className="text-sm font-bold text-primary">{value}</p>
    </div>
  )
}

function RecipeDetail({ recipe, favorite, onClose, onFavorite }) {
  return (
    <div className="fixed inset-0 z-[70] flex justify-end bg-black/40 backdrop-blur-sm" onClick={onClose}>
      <aside
        className="h-screen w-full max-w-2xl overflow-y-auto bg-surface-container-lowest shadow-2xl animate-in slide-in-from-right duration-500"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative h-72">
          <img alt={recipe.title} className="h-full w-full object-cover" src={recipe.image} />
          <button
            onClick={onClose}
            className="absolute left-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg"
            type="button"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
          <button
            onClick={onFavorite}
            className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg"
            type="button"
          >
            <span
              className={`material-symbols-outlined ${favorite ? 'text-secondary' : 'text-on-surface-variant'}`}
              style={{ fontVariationSettings: favorite ? "'FILL' 1" : "'FILL' 0" }}
            >
              favorite
            </span>
          </button>
        </div>

        <div className="p-8">
          <div className="mb-6">
            <span className="mb-3 inline-block rounded-full bg-primary-fixed px-3 py-1 text-[10px] font-bold uppercase text-primary">
              {recipe.restriction}
            </span>
            <h2 className="text-3xl font-bold text-primary">{recipe.title}</h2>
            <p className="mt-2 text-on-surface-variant">
              Preparación saludable recomendada para acompañar el seguimiento nutricional infantil.
            </p>
          </div>

          <section className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            <Nutrient label="Proteína" value={recipe.nutrition.protein} />
            <Nutrient label="Grasas" value={recipe.nutrition.fat} />
            <Nutrient label="Carbs" value={recipe.nutrition.carbs} />
            <Nutrient label="Calorías" value={recipe.nutrition.calories} />
          </section>

          <section className="mb-8">
            <h4 className="mb-4 flex items-center gap-2 font-bold">
              <span className="material-symbols-outlined text-primary">format_list_bulleted</span>
              Ingredientes
            </h4>
            <ul className="space-y-2 text-sm text-on-surface-variant">
              {recipe.ingredients.map((ingredient) => (
                <li className="flex gap-2" key={ingredient}>
                  <span className="text-primary">•</span>
                  {ingredient}
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-8">
            <h4 className="mb-4 flex items-center gap-2 font-bold">
              <span className="material-symbols-outlined text-primary">steps</span>
              Preparación
            </h4>
            <ol className="space-y-3">
              {recipe.steps.map((step, index) => (
                <li className="flex gap-3 text-sm text-on-surface-variant" key={step}>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-on-primary">
                    {index + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </section>

          <button className="w-full rounded-2xl bg-primary py-4 font-bold text-on-primary shadow-lg">
            Asignar a recomendaciones
          </button>
        </div>
      </aside>
    </div>
  )
}

function Nutrient({ label, value }) {
  return (
    <div className="rounded-xl bg-surface-container-low p-4 text-center">
      <p className="text-[10px] font-bold uppercase text-outline">{label}</p>
      <p className="font-bold">{value}</p>
    </div>
  )
}

export default RecipesPage