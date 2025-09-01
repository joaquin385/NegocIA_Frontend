import React, { useState, useEffect } from 'react'
import { useAtom } from 'jotai'
import { atom } from 'jotai'

const metricaMapaCalorAtom = atom('ventas')

const GraficoMapaCalor = ({ 
  datos, 
  titulo, 
  altura = "400px",
  opcionesMetricas = [],
  onMetricaChange 
}) => {
  const [metrica, setMetrica] = useAtom(metricaMapaCalorAtom)

  useEffect(() => {
    if (onMetricaChange) {
      onMetricaChange(metrica)
    }
  }, [metrica, onMetricaChange])

  const handleMetricaChange = (e) => {
    const nuevaMetrica = e.target.value
    setMetrica(nuevaMetrica)
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="text-lg font-semibold text-gray-800">{titulo}</h4>
        {opcionesMetricas.length > 0 && (
          <div className="flex items-center space-x-2">
            <label className="text-sm font-medium text-gray-700">Métrica:</label>
            <select
              value={metrica}
              onChange={handleMetricaChange}
              className="px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {opcionesMetricas.map(opcion => (
                <option key={opcion.value} value={opcion.value}>
                  {opcion.label}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      <div style={{ height: altura }} className="bg-white rounded-lg border p-4">
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <div className="text-6xl mb-4">🔥</div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Mapa de Calor</h3>
            <p className="text-gray-500 text-sm">
              Visualización de datos por día y hora
            </p>
            <p className="text-gray-400 text-xs mt-2">
              Métrica seleccionada: {metrica}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GraficoMapaCalor