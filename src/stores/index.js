import { atom } from 'jotai'

// Estado global del sidebar
export const sidebarOpenAtom = atom(false)

// Estado global de la aplicación
export const userAtom = atom(null)
export const themeAtom = atom('light') 