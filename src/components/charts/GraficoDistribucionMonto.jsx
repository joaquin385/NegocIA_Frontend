import { useAtom } from 'jotai'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import { atom } from 'jotai'

// Atoms para el estado del gráfico
const rangoMontosAtom = atom('0-500')
const intervalosAtom = atom(10)
const metricaAtom = atom('costo-unitario')

const GraficoDistribucionMonto = ({ 
  datos = [], 
  titulo = "Distribución de Montos de Tickets", 
  altura = "400px",
  etiquetaEjeY = "Cantidad de tickets",
  etiquetaLeyenda = "Cantidad de tickets",
  formatearEjeY = (value) => `${value}`,
  formatearTooltip = (value, name) => [`${value}`, name]
}) => {
  const [rangoMontos, setRangoMontos] = useAtom(rangoMontosAtom)
  const [intervalos, setIntervalos] = useAtom(intervalosAtom)
  const [metrica, setMetrica] = useAtom(metricaAtom)

  // Función para generar datos de distribución según el rango y intervalos
  const generarDatosDistribucion = (rango, numIntervalos, metricaSeleccionada) => {
    const [min, max] = rango.split('-').map(Number)
    const anchoIntervalo = (max - min) / numIntervalos
    const datos = []

    for (let i = 0; i < numIntervalos; i++) {
      const inicio = min + (i * anchoIntervalo)
      const fin = min + ((i + 1) * anchoIntervalo)
      
      let cantidad
      if (metricaSeleccionada === 'costo-unitario') {
        // Para costo unitario: distribución sesgada hacia valores bajos (más productos baratos)
        const valorBase = Math.max(0, 200 - (i * 15)) // Decrece más dramáticamente
        const variacion = Math.random() * 40
        cantidad = Math.round(valorBase + variacion + Math.random() * 30)
      } else {
        // Para costo total: distribución normal sesgada hacia valores bajos
        const valorBase = Math.max(0, 100 - (i * 2))
        const variacion = Math.random() * 30
        cantidad = Math.round(valorBase + variacion + Math.random() * 20)
      }
      
      datos.push({
        rango: `${Math.round(inicio)}-${Math.round(fin)}`,
        cantidad: Math.max(0, cantidad),
        inicio: Math.round(inicio),
        fin: Math.round(fin)
      })
    }

    return datos
  }

  const datosProcesados = generarDatosDistribucion(rangoMontos, intervalos, metrica)

  return (
    <div className="space-y-4">
      {/* Controles */}
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-gray-800">{titulo}</h3>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <label className="text-xs font-medium text-gray-700">Rango de montos:</label>
            <select 
              className="px-3 py-1 border border-gray-300 rounded text-xs"
              value={rangoMontos}
              onChange={(e) => setRangoMontos(e.target.value)}
            >
              <option value="0-500">$0-$500</option>
              <option value="0-1000">$0-$1000</option>
              <option value="0-2000">$0-$2000</option>
              <option value="500-1500">$500-$1500</option>
              <option value="0-50">$0-$50</option>
              <option value="0-100">$0-$100</option>
              <option value="0-200">$0-$200</option>
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <label className="text-xs font-medium text-gray-700">Intervalos:</label>
            <select 
              className="px-3 py-1 border border-gray-300 rounded text-xs"
              value={intervalos}
              onChange={(e) => setIntervalos(Number(e.target.value))}
            >
              <option value={10}>10</option>
              <option value={15}>15</option>
              <option value={20}>20</option>
              <option value={25}>25</option>
              <option value={30}>30</option>
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <label className="text-xs font-medium text-gray-700">Métrica:</label>
            <select 
              className="px-3 py-1 border border-gray-300 rounded text-xs"
              value={metrica}
              onChange={(e) => setMetrica(e.target.value)}
            >
              <option value="costo-total">Costo Total</option>
              <option value="costo-unitario">Costo Unitario</option>
            </select>
          </div>
        </div>
      </div>
      
      {/* Gráfico */}
      <div style={{ height: altura }} className="bg-transparent rounded-xl shadow-sm border border-gray-100 p-6 relative z-10">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={datosProcesados} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="rango" 
              stroke="#666"
              fontSize={10}
              tickLine={false}
              axisLine={false}
              angle={-45}
              textAnchor="end"
              height={60}
            />
            <YAxis 
              stroke="#666"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={formatearEjeY}
              label={{ value: etiquetaEjeY, angle: -90, position: 'insideLeft', style: { textAnchor: 'middle' } }}
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
              labelFormatter={(value) => `Rango: $${value}`}
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
              name={etiquetaLeyenda}
              radius={[2, 2, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default GraficoDistribucionMonto
