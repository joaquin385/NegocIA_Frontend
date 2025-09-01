import { useAtom } from 'jotai'
import { useEffect } from 'react'
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { atom } from 'jotai'

// Atom local para la métrica (similar a otros gráficos)
const metricaDispersionAtom = atom('ventas')

const GraficoDispersion = ({
  datos = [],
  titulo = "Dispersión: Ventas vs Ticket Promedio",
  color = "#ec4899",
  altura = "450px",
  opcionesMetricas = [],
  campoX = "ventas",
  campoY = "ticketPromedio",
  formatearEjeX = (value) => `$${(value / 1000).toFixed(0)}k`,
  formatearEjeY = (value) => `$${value.toLocaleString()}`,
  formatearTooltip = (ventas, ticketPromedio) => [`$${ventas.toLocaleString()}`, `$${ticketPromedio.toLocaleString()}`],
  onMetricaChange
}) => {
  const [metrica, setMetrica] = useAtom(metricaDispersionAtom)

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

  // Calcular dominio para el eje Y (ticket promedio)
  const calcularDominioY = () => {
    if (!datos || datos.length === 0) return ['auto', 'auto'];
    
    const valores = datos.map(item => item[campoY]).filter(val => !isNaN(val) && val !== undefined);
    if (valores.length === 0) return ['auto', 'auto'];
    
    const min = Math.min(...valores);
    const max = Math.max(...valores);
    const rango = max - min;
    const padding = rango * 0.1; // 10% de padding arriba y abajo
    
    return [Math.max(0, min - padding), max + padding];
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
          <ScatterChart data={datos}>
            <CartesianGrid 
              strokeDasharray="3 3" 
              stroke="#f1f5f9" 
              opacity={0.8}
              horizontal={true}
              vertical={true}
            />
            <XAxis 
              dataKey={campoX}
              stroke="#94a3b8"
              fontSize={11}
              tickLine={false}
              axisLine={false}
              tick={{ fill: '#64748b' }}
              tickFormatter={formatearEjeX}
              type="number"
              domain={['dataMin - (dataMin * 0.05)', 'dataMax + (dataMax * 0.05)']} // 5% de padding
            />
            <YAxis 
              dataKey={campoY}
              stroke="#94a3b8"
              fontSize={11}
              tickLine={false}
              axisLine={false}
              tick={{ fill: '#64748b' }}
              tickFormatter={formatearEjeY}
              type="number"
              domain={calcularDominioY()}
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
              cursor={{ fill: color, fillOpacity: 0.1 }}
              formatter={(value, name, props) => {
                if (name === campoX) {
                  return [`$${value.toLocaleString()}`, 'Ventas'];
                } else if (name === campoY) {
                  return [`$${value.toLocaleString()}`, 'Ticket Promedio'];
                }
                return [value, name];
              }}
              labelFormatter={(label) => `Fecha: ${label}`}
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
                      {getMetricaLabel()} vs Ticket Promedio
                    </span>
                  </div>
                </div>
              )}
            />
            <Scatter 
              dataKey={campoY}
              fill={color}
              stroke={color}
              strokeWidth={1}
              r={4} // Radio de los puntos
            />
          </ScatterChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default GraficoDispersion 