import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthProvider } from '../context/AuthContext'

import AppLayout from '../layouts/AppLayout'
import DashboardPage from '../pages/dashboard/DashboardPage'
import ProfilesPage from '../pages/profiles/ProfilesPage'
import ProgressPage from '../pages/progress/ProgressPage'
import RecipesPage from '../pages/recipes/RecipesPage'
import ResourcesPage from '../pages/resources/ResourcesPage'
import SettingsPage from '../pages/settings/SettingsPage'
import LoginPage from '../pages/auth/LoginPage'
import RegisterPage from '../pages/auth/RegisterPage'
import AlertsPage from '../pages/alertas/AlertsPage'
import BiometryPage from '../pages/biometria/BiometryPage'
import NutritionAnalysisPage from '../pages/nutricion/NutritionAnalysisPage'
import TutorProfilePage from '../pages/tutor/TutorProfilePage'

function AppRoutes() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registro" element={<RegisterPage />} />

          <Route element={<AppLayout />}>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/perfiles" element={<ProfilesPage />} />
            <Route path="/progreso" element={<ProgressPage />} />
            <Route path="/recetas" element={<RecipesPage />} />
            <Route path="/recursos" element={<ResourcesPage />} />
            <Route path="/configuracion" element={<SettingsPage />} />
            <Route path="/alertas" element={<AlertsPage />} />
            <Route path="/biometria" element={<BiometryPage />} />
            <Route path="/nutricion" element={<NutritionAnalysisPage />} />
            <Route path="/tutor" element={<TutorProfilePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default AppRoutes