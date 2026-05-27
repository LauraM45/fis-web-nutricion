import { createContext, useContext, useMemo, useState } from 'react'
import { authService } from '../services/authService'

const AuthContext = createContext(null)

const storedUser = localStorage.getItem('user')
const storedToken = localStorage.getItem('token')

export function AuthProvider({ children }) {
  const [user, setUser] = useState(storedUser ? JSON.parse(storedUser) : null)
  const [token, setToken] = useState(storedToken || null)
  const [loading, setLoading] = useState(false)

  const isAuthenticated = Boolean(user || token)

  async function login(credentials) {
    setLoading(true)

    try {
      const response = await authService.login(credentials)

      const nextUser = response?.user ?? response ?? { correo: credentials.correo }
      const nextToken = response?.token ?? response?.tokenSesion ?? null

      if (nextToken) {
        localStorage.setItem('token', nextToken)
        setToken(nextToken)
      }

      localStorage.setItem('user', JSON.stringify(nextUser))
      setUser(nextUser)

      return nextUser
    } finally {
      setLoading(false)
    }
  }

  async function register(data) {
    setLoading(true)

    try {
      return await authService.registrar(data)
    } finally {
      setLoading(false)
    }
  }

  function logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setToken(null)
    setUser(null)
  }

  const value = useMemo(
    () => ({
      user,
      token,
      loading,
      isAuthenticated,
      login,
      register,
      logout,
    }),
    [user, token, loading, isAuthenticated],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth debe usarse dentro de AuthProvider')
  }

  return context
}