import apiClient from './apiClient'

export const nutricionService = {
  generarAnalisis: () =>
    apiClient.post('/nutricion/analisis').then((response) => response.data),

  consultarEstado: () =>
    apiClient.get('/nutricion/estado').then((response) => response.data),

  consultarParametros: () =>
    apiClient.get('/nutricion/parametros').then((response) => response.data),

  consultarRequerimientos: () =>
    apiClient.get('/nutricion/requerimientos').then((response) => response.data),
}