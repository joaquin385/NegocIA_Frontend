import { atom } from 'jotai';

// Estado global para métricas expandibles
export const metricaSeleccionadaAtom = atom(null);
export const panelExpandidoAtom = atom(false);

// Función para limpiar selección
export const limpiarSeleccionAtom = atom(
  null,
  (get, set) => {
    set(metricaSeleccionadaAtom, null);
    set(panelExpandidoAtom, false);
  }
);
