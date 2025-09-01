import { useAtom } from 'jotai'
import { useEffect } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { atom } from 'jotai'

// Atom local para la métrica (similar a GraficoEvolucion)
const metricaDistribucionHorariaAtom = atom('ventas')

const GraficoDistribucionHoraria = ({
  datos = [],
  titulo = "Distribución Horaria de Ventas",
  color = "#10b981",
  altura = "450px",
  opcionesMetricas = [],
  campoDatos = "ventas",
  campoEtiqueta = "hora",
  formatearEjeY = (value) => `$${(value / 1000).toFixed(0)}k`,
  formatearTooltip = (value, name) => [`$${value.toLocaleString()}`, name],
  onMetricaChange
}) => {
  const [metrica, setMetrica] = useAtom(metricaDistribucionHorariaAtom)

  // Inicializar métrica cuando cambien las opciones
  useEffect(() => {
    if (opcionesMetricas.length > 0 && !opcionesMetricas.find(op => op.value === metrica)) {
      setMetrica(opcionesMetricas[0].value)
    }
  }, [opcionesMetricas, metrica, setMetrica])

  // Sincronizar cambios de métrica con el componente padre
  useEffect(() => {
    if (onMetricaChange) {
      onMetricaChange(metrica)
    }
  }, [metrica, onMetricaChange])

  // Obtener el label de la métrica actual
  const getMetricaLabel = () => {
    const opcion = opcionesMetricas.find(op => op.value === metrica);
    return opcion ? opcion.label : 'Métrica';
  };

  return (
    <div>
      <h4 className="text-base font-semibold mb-4">{titulo}</h4>
      
      {/* Controles del gráfico */}
      {opcionesMetricas.length > 0 && (
        <div className="flex items-center space-x-4 mb-4">
          <div className="flex items-center space-x-2">
            <label className="text-xs font-medium text-gray-700">Métrica:</label>
            <select 
              className="px-3 py-1 border border-gray-300 rounded text-xs"
              value={metrica}
              onChange={(e) => setMetrica(e.target.value)}
            >
              {opcionesMetricas.map(opcion => (
                <option key={opcion.value} value={opcion.value}>
                  {opcion.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
      
      {/* Gráfico */}
      <div style={{ height: altura }} className="bg-transparent rounded-xl shadow-sm border border-gray-100 p-6 relative z-10">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={datos}>
            <CartesianGrid 
              strokeDasharray="3 3" 
              stroke="#f8fafc" 
              opacity={0.8}
              horizontal={true}
              vertical={false}
            />
            <XAxis 
              dataKey={campoEtiqueta}
              stroke="#94a3b8"
              fontSize={11}
              tickLine={false}
              axisLine={false}
              tick={{ fill: '#64748b' }}
              interval={2} // Mostrar cada 2 horas para evitar saturación
            />
            <YAxis 
              stroke="#94a3b8"
              fontSize={11}
              tickLine={false}
              axisLine={false}
              tick={{ fill: '#64748b' }}
              tickFormatter={formatearEjeY}
              domain={[0, 'dataMax + (dataMax * 0.1)']} // Comenzar en 0 y añadir 10% de padding
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'white', 
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                fontSize: '12px',
                padding: '12px 16px'
              }}
              formatear={formatearTooltip}
              labelFormatter={(label) => `Hora: ${label}`}
              cursor={{ fill: color, fillOpacity: 0.1 }}
            />
            <Legend 
              content={() => (
                <div className="flex items-center justify-center mt-4">
                  <div className="flex items-center space-x-2">
                    <div 
                      className="w-3 h-3 rounded"
                      style={{ backgroundColor: color }}
                    />
                    <span className="text-xs text-gray-600 font-medium">
                      {getMetricaLabel()}
                    </span>
                  </div>
                </div>
              )}
            />
            <Bar 
              dataKey={campoDatos}
              fill={color}
              radius={[4, 4, 0, 0]} // Bordes redondeados en la parte superior
              stroke={color}
              strokeWidth={1}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default GraficoDistribucionHoraria 