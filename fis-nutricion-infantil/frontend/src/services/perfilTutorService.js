import apiClient from './apiClient'

export const perfilTutorService = {
  listar: () =>
    apiClient.get('/perfiles-tutor').then((response) => response.data),

  buscarPorId: (id) =>
    apiClient.get(`/perfiles-tutor/${id}`).then((response) => response.data),

  buscarPorCorreo: (correo) =>
    apiClient
      .get('/perfiles-tutor/buscar', { params: { correo } })
      .then((response) => response.data),

  guardar: (data) =>
    apiClient.post('/perfiles-tutor', data).then((response) => response.data),

  actualizar: (id, data) =>
    apiClient.put(`/perfiles-tutor/${id}`, data).then((response) => response.data),

  eliminar: (id) =>
    apiClient.delete(`/perfiles-tutor/${id}`).then((response) => response.data),
}