import apiClient from './apiClient'

export const medicionService = {
  crearHistorial: (data) =>
    apiClient.post('/mediciones/historiales', data).then((response) => response.data),

  buscarHistorial: (idHistorial) =>
    apiClient
      .get(`/mediciones/historiales/${idHistorial}`)
      .then((response) => response.data),

  registrarPeso: (data) =>
    apiClient.post('/mediciones/peso', data).then((response) => response.data),

  registrarTalla: (data) =>
    apiClient.post('/mediciones/talla', data).then((response) => response.data),

  listarPesosPorHistorial: (idHistorial) =>
    apiClient
      .get(`/mediciones/peso/historial/${idHistorial}`)
      .then((response) => response.data),

  listarTallasPorHistorial: (idHistorial) =>
    apiClient
      .get(`/mediciones/talla/historial/${idHistorial}`)
      .then((response) => response.data),
}