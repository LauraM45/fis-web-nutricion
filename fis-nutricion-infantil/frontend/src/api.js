const API_BASE_URL = 'http://localhost:8080/api'

async function request(path, options = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  })

  if (!response.ok) {
    const message = await response.text()
    throw new Error(message || `Error ${response.status}`)
  }

  if (response.status === 204) {
    return null
  }

  return response.json()
}

export const api = {
  listarTutores: () => request('/tutores'),

  crearTutor: (tutor) =>
    request('/tutores', {
      method: 'POST',
      body: JSON.stringify(tutor),
    }),

  listarPerfilesInfantiles: () => request('/perfiles-infantiles'),

  crearPerfilInfantil: (perfilInfantil) =>
    request('/perfiles-infantiles', {
      method: 'POST',
      body: JSON.stringify(perfilInfantil),
    }),

  consultarParametrosNutricionales: () => request('/nutricion/parametros'),

  listarAlergias: () => request('/restricciones/alergias'),
}
