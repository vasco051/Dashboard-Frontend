export const getProgressColor = (progress: number) => {
  if (progress <= 25) return 'var(--Secondary-Glamour-pink-400)'
  else if (progress <= 50) return 'var(--Secondary-Amber-500-base)'
  else if (progress <= 75) return 'var(--Additional-indigo)'
  else return 'var(--Additional-emerald)'
}