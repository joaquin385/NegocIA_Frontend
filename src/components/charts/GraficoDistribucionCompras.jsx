import { useAtom } from 'jotai'
import { useMemo } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import { atom } from 'jotai'

// Atoms para el estado del gráfico
const rangoComprasAtom = atom('1-10')
const intervalosAtom = atom(8)

const GraficoDistribucionCompras = ({ 
  datos = [], 
  titulo = "Distribución de Clientes por Cantidad de Compras", 
  altura = "400px",
  formatearEjeY = (value) => `${value}`,
  formatearTooltip = (value, name) => [`${value}`, name]
}) => {
  const [rangoCompras, setRangoCompras] = useAtom(rangoComprasAtom)
  const [intervalos, setIntervalos] = useAtom(intervalosAtom)

  // Función para generar datos de distribución según el rango y intervalos
  const generarDatosDistribucion = (rango, numIntervalos) => {
    const [min, max] = rango.split('-').map(Number)
    const anchoIntervalo = (max - min) / numIntervalos
    const datos = []

    for (let i = 0; i < numIntervalos; i++) {
      const inicio = min + (i * anchoIntervalo)
      const fin = min + ((i + 1) * anchoIntervalo)
      const centro = Math.round((inicio + fin) / 2)
      
      // Generar datos simulados con distribución decreciente (más clientes con pocas compras)
      const valorBase = Math.max(0, 500 - (i * 50)) // Decrece hacia valores altos
      const variacion = Math.random() * 100
      const cantidad = Math.round(valorBase + variacion + Math.random() * 50)
      
      datos.push({
        centro: centro,
        cantidad: Math.max(0, cantidad),
        inicio: Math.round(inicio),
        fin: Math.round(fin)
      })
    }

    return datos
  }

  // Optimización con useMemo para evitar recálculos innecesarios
  const datosProcesados = useMemo(() => 
    generarDatosDistribucion(rangoCompras, intervalos), 
    [rangoCompras, intervalos]
  )

  return (
    <div className="space-y-4">
      {/* Controles */}
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-gray-800">{titulo}</h3>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <label className="text-xs font-medium text-gray-700">Rango de compras:</label>
            <select 
              className="px-3 py-1.5 border border-gray-300 rounded-md text-xs bg-white hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              value={rangoCompras}
              onChange={(e) => setRangoCompras(e.target.value)}
            >
              <option value="1-10">1-10</option>
              <option value="1-20">1-20</option>
              <option value="1-50">1-50</option>
              <option value="0-15">0-15</option>
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <label className="text-xs font-medium text-gray-700">Intervalos:</label>
            <select 
              className="px-3 py-1.5 border border-gray-300 rounded-md text-xs bg-white hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              value={intervalos}
              onChange={(e) => setIntervalos(Number(e.target.value))}
            >
              <option value={5}>5</option>
              <option value={8}>8</option>
              <option value={10}>10</option>
              <option value={12}>12</option>
              <option value={15}>15</option>
            </select>
          </div>
        </div>
      </div>
      
      {/* Gráfico */}
      <div 
        style={{ height: altura }} 
        className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 relative z-10"
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={datosProcesados} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="centro" 
              stroke="#666"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              label={{ value: 'Cantidad de Compras (centro del intervalo)', position: 'insideBottom', offset: -5, style: { textAnchor: 'middle' } }}
            />
            <YAxis 
              stroke="#666"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={formatearEjeY}
              label={{ value: 'Cantidad de Clientes', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle' } }}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                fontSize: '12px'
              }}
              formatter={formatearTooltip}
              labelStyle={{ color: '#374151', fontWeight: 'bold' }}
              labelFormatter={(value) => `Compras: ${value}`}
            />
            <Legend 
              verticalAlign="top" 
              height={36}
              iconType="rect"
              wrapperStyle={{ fontSize: '12px', paddingBottom: '10px' }}
            />
            <Bar 
              dataKey="cantidad" 
              fill="#3b82f6"
              name="Cantidad de Clientes"
              radius={[2, 2, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default GraficoDistribucionCompras
