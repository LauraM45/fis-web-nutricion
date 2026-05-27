import apiClient from './apiClient'

export const tutorService = {
  listar: () =>
    apiClient.get('/tutores').then((response) => response.data),

  buscarPorId: (id) =>
    apiClient.get(`/tutores/${id}`).then((response) => response.data),

  guardar: (data) =>
    apiClient.post('/tutores', data).then((response) => response.data),

  actualizar: (id, data) =>
    apiClient.put(`/tutores/${id}`, data).then((response) => response.data),

  eliminar: (id) =>
    apiClient.delete(`/tutores/${id}`).then((response) => response.data),
}