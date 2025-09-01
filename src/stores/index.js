import { atom } from 'jotai'

// Estado global del sidebar
export const sidebarOpenAtom = atom(false)

// Estado global de la aplicación
export const userAtom = atom(null)
export const themeAtom = atom('light')

// Átomos para el gráfico de evolución
export const agrupacionAtom = atom('dia')
export const metricaAtom = atom('ventas') 