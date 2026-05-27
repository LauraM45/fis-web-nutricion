import apiClient from './apiClient'

export const authService = {
  registrar: (data) =>
    apiClient.post('/auth/registro', data).then((response) => response.data),

  login: (credentials) =>
    apiClient.post('/auth/login', credentials).then((response) => response.data),

  logout: (idPerfilTutor) =>
    apiClient.post(`/auth/logout/${idPerfilTutor}`).then((response) => response.data),

  generarRecuperacion: (data) =>
    apiClient.post('/auth/recuperacion', data).then((response) => response.data),

  validarToken: (token) =>
    apiClient
      .get('/auth/recuperacion/validar', { params: { token } })
      .then((response) => response.data),
}