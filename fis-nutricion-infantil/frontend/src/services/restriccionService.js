import apiClient from './apiClient'

export const restriccionService = {
  guardarAlergia: (data) =>
    apiClient.post('/restricciones/alergias', data).then((response) => response.data),

  guardarIntolerancia: (data) =>
    apiClient.post('/restricciones/intolerancias', data).then((response) => response.data),

  listarAlergias: () =>
    apiClient.get('/restricciones/alergias').then((response) => response.data),

  listarIntolerancias: () =>
    apiClient.get('/restricciones/intolerancias').then((response) => response.data),

  buscarAlergiaPorNombre: (nombre) =>
    apiClient
      .get('/restricciones/alergias/buscar', { params: { nombre } })
      .then((response) => response.data),

  buscarIntoleranciaPorNombre: (nombre) =>
    apiClient
      .get('/restricciones/intolerancias/buscar', { params: { nombre } })
      .then((response) => response.data),

  eliminarAlergia: (id) =>
    apiClient.delete(`/restricciones/alergias/${id}`).then((response) => response.data),

  eliminarIntolerancia: (id) =>
    apiClient.delete(`/restricciones/intolerancias/${id}`).then((response) => response.data),
}