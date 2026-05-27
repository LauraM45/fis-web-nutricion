export function formatKg(value) {
  if (value === null || value === undefined || value === '') return 'N/D'
  return `${value} kg`
}

export function formatCm(value) {
  if (value === null || value === undefined || value === '') return 'N/D'
  return `${value} cm`
}