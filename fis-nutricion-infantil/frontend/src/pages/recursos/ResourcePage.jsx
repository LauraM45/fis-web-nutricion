import { useMemo, useState } from 'react'

const resources = [
  {
    id: 1,
    category: 'Nutrición',
    title: 'Introducción a la alimentación saludable',
    description:
      'Guía para tutores sobre hábitos alimenticios equilibrados durante la infancia.',
    image:
      'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1000&q=80',
    readTime: '6 min',
    content:
      'Una alimentación saludable en la infancia debe incluir variedad de alimentos, porciones adecuadas, hidratación suficiente y seguimiento de restricciones alimentarias. La recomendación general es consultar siempre fuentes confiables y profesionales de salud antes de hacer cambios importantes.',
  },
  {
    id: 2,
    category: 'Hábitos',
    title: 'Rutinas para mejorar la hidratación',
    description:
      'Consejos prácticos para recordar el consumo de agua durante el día.',
    image:
      'https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=1000&q=80',
    readTime: '4 min',
    content:
      'La hidratación puede mejorar con recordatorios visuales, horarios fijos y acompañamiento del tutor. En niños, la meta debe adaptarse a edad, peso, actividad física y clima.',
  },
  {
    id: 3,
    category: 'Crecimiento',
    title: 'Por qué registrar peso y talla',
    description:
      'Importancia del historial biométrico para detectar cambios en el crecimiento.',
    image:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=80',
    readTime: '5 min',
    content:
      'Registrar peso y talla permite observar tendencias de crecimiento. Estos datos ayudan a calcular indicadores como IMC y a estimar necesidades nutricionales básicas.',
  },
  {
    id: 4,
    category: 'Recetas',
    title: 'Cómo elegir recetas seguras',
    description:
      'Recomendaciones para revisar ingredientes cuando existen alergias o intolerancias.',
    image:
      'https://images.unsplash.com/photo-1543353071-10c8ba85a904?auto=format&fit=crop&w=1000&q=80',
    readTime: '7 min',
    content:
      'Antes de elegir una receta, verifica ingredientes, posibles trazas y restricciones alimentarias del menor. El sistema puede ayudar filtrando recetas, pero el tutor debe revisar la información final.',
  },
]

const categories = ['Todos', 'Nutrición', 'Hábitos', 'Crecimiento', 'Recetas']

function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState('Todos')
  const [selectedResource, setSelectedResource] = useState(null)

  const filteredResources = useMemo(() => {
    if (selectedCategory === 'Todos') return resources
    return resources.filter((resource) => resource.category === selectedCategory)
  }, [selectedCategory])

  return (
    <div className="animate-in fade-in duration-500">
      <section className="mb-10 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
        <div>
          <h2 className="mb-2 text-3xl font-bold text-primary">Recursos educativos</h2>
          <p className="max-w-2xl text-on-surface-variant">
            Biblioteca visual con artículos, consejos nutricionales y hábitos saludables para tutores.
          </p>
        </div>

        <button className="flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-2.5 font-bold text-on-primary shadow-sm">
          <span className="material-symbols-outlined">file_download</span>
          Descargar guía
        </button>
      </section>

      <section className="mb-8 flex gap-3 overflow-x-auto pb-2 hide-scrollbar">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`whitespace-nowrap rounded-full px-5 py-2 text-xs font-bold transition-colors ${
              selectedCategory === category
                ? 'bg-primary text-on-primary'
                : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-variant'
            }`}
          >
            {category}
          </button>
        ))}
      </section>

      <section className="grid grid-cols-12 gap-6">
        {filteredResources[0] && (
          <article
            className="group col-span-12 cursor-pointer overflow-hidden rounded-xl border border-outline-variant bg-surface-container-lowest shadow-sm transition-all hover:-translate-y-1 lg:col-span-8"
            onClick={() => setSelectedResource(filteredResources[0])}
          >
            <div className="flex h-full flex-col md:flex-row">
              <div className="relative w-full overflow-hidden md:w-1/2">
                <img
                  alt={filteredResources[0].title}
                  className="h-full min-h-[280px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={filteredResources[0].image}
                />
              </div>

              <div className="flex w-full flex-col justify-center p-8 md:w-1/2">
                <span className="mb-3 w-fit rounded-full bg-secondary px-3 py-1 text-[10px] font-bold text-on-secondary">
                  {filteredResources[0].category}
                </span>
                <h3 className="mb-4 text-xl font-bold transition-colors group-hover:text-primary">
                  {filteredResources[0].title}
                </h3>
                <p className="mb-6 text-sm text-on-surface-variant">
                  {filteredResources[0].description}
                </p>
                <span className="flex items-center gap-1 text-xs font-bold text-primary transition-all group-hover:gap-2">
                  Leer artículo
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </span>
              </div>
            </div>
          </article>
        )}

        {filteredResources.slice(1).map((resource) => (
          <ResourceCard
            key={resource.id}
            resource={resource}
            onClick={() => setSelectedResource(resource)}
          />
        ))}
      </section>

      {selectedResource && (
        <ResourceDetail
          resource={selectedResource}
          onClose={() => setSelectedResource(null)}
        />
      )}
    </div>
  )
}

function ResourceCard({ resource, onClick }) {
  return (
    <article
      className="group col-span-12 cursor-pointer overflow-hidden rounded-xl border border-outline-variant bg-surface-container-lowest p-6 shadow-sm transition-all hover:-translate-y-1 md:col-span-6 lg:col-span-4"
      onClick={onClick}
    >
      <div className="mb-4 h-40 overflow-hidden rounded-lg">
        <img
          alt={resource.title}
          className="h-full w-full object-cover transition-all group-hover:scale-105"
          src={resource.image}
        />
      </div>

      <div className="mb-3 flex items-center justify-between">
        <span className="inline-block rounded-full bg-primary px-3 py-1 text-[10px] font-bold text-on-primary">
          {resource.category}
        </span>
        <span className="text-xs text-on-surface-variant">{resource.readTime}</span>
      </div>

      <h3 className="mb-2 text-lg font-bold transition-colors group-hover:text-primary">
        {resource.title}
      </h3>
      <p className="line-clamp-2 text-xs text-on-surface-variant">
        {resource.description}
      </p>
    </article>
  )
}

function ResourceDetail({ resource, onClose }) {
  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <article
        className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-surface-container-lowest shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative h-72">
          <img alt={resource.title} className="h-full w-full object-cover" src={resource.image} />
          <button
            onClick={onClose}
            className="absolute left-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg"
            type="button"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="p-8">
          <div className="mb-6 flex items-center gap-3">
            <span className="rounded-full bg-primary px-3 py-1 text-[10px] font-bold text-on-primary">
              {resource.category}
            </span>
            <span className="text-xs text-on-surface-variant">{resource.readTime} de lectura</span>
          </div>

          <h2 className="mb-4 text-3xl font-bold text-primary">{resource.title}</h2>
          <p className="mb-8 text-on-surface-variant">{resource.description}</p>

          <div className="rounded-xl border border-outline-variant bg-surface-container-low p-6">
            <p className="leading-relaxed text-on-surface">{resource.content}</p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <button className="rounded-full bg-primary px-6 py-3 font-bold text-on-primary">
              Guardar recurso
            </button>
            <button className="rounded-full border border-primary px-6 py-3 font-bold text-primary">
              Compartir
            </button>
          </div>
        </div>
      </article>
    </div>
  )
}

export default ResourcesPage