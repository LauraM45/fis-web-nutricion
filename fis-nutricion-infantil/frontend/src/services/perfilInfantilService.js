import apiClient from './apiClient'

export const perfilInfantilService = {
  listar: () =>
    apiClient.get('/perfiles-infantiles').then((response) => response.data),

  listarPorTutor: (idPerfilTutor) =>
    apiClient
      .get(`/perfiles-infantiles/tutor/${idPerfilTutor}`)
      .then((response) => response.data),

  buscarPorId: (id) =>
    apiClient.get(`/perfiles-infantiles/${id}`).then((response) => response.data),

  crear: (data) =>
    apiClient.post('/perfiles-infantiles', data).then((response) => response.data),

  actualizar: (id, data) =>
    apiClient.put(`/perfiles-infantiles/${id}`, data).then((response) => response.data),

  eliminar: (id) =>
    apiClient.delete(`/perfiles-infantiles/${id}`).then((response) => response.data),
}