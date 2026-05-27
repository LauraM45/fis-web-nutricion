import apiClient from './apiClient'

export const recetaService = {
  listar: () =>
    apiClient.get('/recetas').then((response) => response.data),

  guardar: (data) =>
    apiClient.post('/recetas', data).then((response) => response.data),

  personalizadas: () =>
    apiClient.get('/recetas/personalizadas').then((response) => response.data),

  recomendadasPorCalorias: (caloriasMaximas) =>
    apiClient
      .get('/recetas/recomendadas', { params: { caloriasMaximas } })
      .then((response) => response.data),

  buscarPorIndice: (indice) =>
    apiClient.get(`/recetas/${indice}`).then((response) => response.data),
}