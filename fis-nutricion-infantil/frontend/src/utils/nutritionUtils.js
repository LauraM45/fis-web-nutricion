export function getNutritionStatus(imc) {
  if (!imc) return 'Sin datos'
  if (imc < 14) return 'Bajo seguimiento'
  if (imc <= 18) return 'Rango saludable'
  return 'Requiere revisión'
}