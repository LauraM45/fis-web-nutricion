import apiClient from './apiClient'

export const alertaService = {
  listar: () =>
    apiClient.get('/alertas').then((response) => response.data),

  programarHidratacion: (data) =>
    apiClient.post('/alertas/hidratacion', data).then((response) => response.data),

  programarComida: (data) =>
    apiClient.post('/alertas/comidas', data).then((response) => response.data),
}