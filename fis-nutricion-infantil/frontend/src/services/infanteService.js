import apiClient from './apiClient'

export const infanteService = {
  listar: () =>
    apiClient.get('/infantes').then((response) => response.data),

  buscarPorId: (id) =>
    apiClient.get(`/infantes/${id}`).then((response) => response.data),

  guardar: (data) =>
    apiClient.post('/infantes', data).then((response) => response.data),

  actualizar: (id, data) =>
    apiClient.put(`/infantes/${id}`, data).then((response) => response.data),

  eliminar: (id) =>
    apiClient.delete(`/infantes/${id}`).then((response) => response.data),
}