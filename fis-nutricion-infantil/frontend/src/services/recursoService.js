import apiClient from './apiClient'

export const recursoService = {
  listar: () =>
    apiClient.get('/recursos').then((response) => response.data),

  agregarRecurso: (data) =>
    apiClient.post('/recursos/educativos', data).then((response) => response.data),

  agregarCategoria: (data) =>
    apiClient.post('/recursos/categorias', data).then((response) => response.data),
}