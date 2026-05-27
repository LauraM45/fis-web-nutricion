import apiClient from './apiClient'

export const progresoService = {
  calcularProgresoDiario: (data) =>
    apiClient.post('/progreso/diario', data).then((response) => response.data),

  graficaPesoEdad: () =>
    apiClient.get('/progreso/graficas/peso-edad').then((response) => response.data),

  graficaTallaEdad: () =>
    apiClient.get('/progreso/graficas/talla-edad').then((response) => response.data),
}