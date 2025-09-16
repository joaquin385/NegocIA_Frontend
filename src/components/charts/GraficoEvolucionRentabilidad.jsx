import { useAtom } from 'jotai'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import { agrupacionAtom } from '@/stores'

const GraficoEvolucionRentabilidad = ({ 
  datos = [], 
  titulo = "Evolución de Rentabilidad", 
  altura = "450px",
  formatearEjeY = (value) => `${value}%`,
  formatearTooltip = (value, name) => [`${value}%`, name]
}) => {
  const [agrupacion, setAgrupacion] = useAtom(agrupacionAtom)

  // Función para procesar datos por agrupación
  const procesarDatosPorAgrupacion = (datos, agrupacion) => {
    if (agrupacion === 'dia') return datos;
    
    if (agrupacion === 'mes') {
      const datosPorMes = {};
      datos.forEach(item => {
        const fecha = new Date(`2025/${item.fecha.split('/')[1]}/${item.fecha.split('/')[0]}`);
        const mes = fecha.toLocaleDateString('es-ES', { month: 'short' });
        
        if (!datosPorMes[mes]) {
          datosPorMes[mes] = { margenPorcentaje: 0, roi: 0, roa: 0, count: 0 };
        }
        datosPorMes[mes].margenPorcentaje += item.margenPorcentaje;
        datosPorMes[mes].roi += item.roi;
        datosPorMes[mes].roa += item.roa;
        datosPorMes[mes].count += 1;
      });
      
      return Object.entries(datosPorMes).map(([mes, data]) => ({
        fecha: mes,
        margenPorcentaje: Math.round((data.margenPorcentaje / data.count) * 10) / 10,
        roi: Math.round((data.roi / data.count) * 10) / 10,
        roa: Math.round((data.roa / data.count) * 10) / 10
      }));
    }
    
    if (agrupacion === 'año') {
      const datosPorAño = {};
      datos.forEach(item => {
        const fecha = new Date(`2025/${item.fecha.split('/')[1]}/${item.fecha.split('/')[0]}`);
        const año = fecha.getFullYear();
        
        if (!datosPorAño[año]) {
          datosPorAño[año] = { margenPorcentaje: 0, roi: 0, roa: 0, count: 0 };
        }
        datosPorAño[año].margenPorcentaje += item.margenPorcentaje;
        datosPorAño[año].roi += item.roi;
        datosPorAño[año].roa += item.roa;
        datosPorAño[año].count += 1;
      });
      
      return Object.entries(datosPorAño).map(([año, data]) => ({
        fecha: año,
        margenPorcentaje: Math.round((data.margenPorcentaje / data.count) * 10) / 10,
        roi: Math.round((data.roi / data.count) * 10) / 10,
        roa: Math.round((data.roa / data.count) * 10) / 10
      }));
    }
    
    return datos;
  };

  return (
    <div>
      <h4 className="text-base font-semibold mb-4">{titulo}</h4>
      
      {/* Controles del gráfico */}
      <div className="flex items-center space-x-4 mb-4">
        <div className="flex items-center space-x-2">
          <label className="text-xs font-medium text-gray-700">Agrupación:</label>
          <select 
            className="px-3 py-1 border border-gray-300 rounded text-xs"
            value={agrupacion}
            onChange={(e) => setAgrupacion(e.target.value)}
          >
            <option value="dia">Día</option>
            <option value="mes">Mes</option>
            <option value="año">Año</option>
          </select>
        </div>
      </div>
      
      {/* Gráfico */}
      <div style={{ height: altura }} className="bg-transparent rounded-xl shadow-sm border border-gray-100 p-6 relative z-10">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={procesarDatosPorAgrupacion(datos, agrupacion)}>
            <CartesianGrid 
              strokeDasharray="3 3" 
              stroke="#f8fafc" 
              opacity={0.8}
            />
            <XAxis 
              dataKey="fecha" 
              stroke="#64748b"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis 
              stroke="#64748b"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={formatearEjeY}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                fontSize: '12px'
              }}
              formatter={formatearTooltip}
              labelStyle={{ color: '#374151', fontWeight: '600' }}
            />
            <Legend 
              verticalAlign="top" 
              height={36}
              iconType="rect"
              wrapperStyle={{ fontSize: '12px', paddingBottom: '10px' }}
            />
            <Line
              type="monotone"
              dataKey="margenPorcentaje"
              stroke="#8b5cf6"
              strokeWidth={3}
              dot={{ fill: '#8b5cf6', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, stroke: '#8b5cf6', strokeWidth: 2 }}
              name="Margen %"
            />
            <Line
              type="monotone"
              dataKey="roi"
              stroke="#ef4444"
              strokeWidth={3}
              dot={{ fill: '#ef4444', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, stroke: '#ef4444', strokeWidth: 2 }}
              name="ROI"
            />
            <Line
              type="monotone"
              dataKey="roa"
              stroke="#06b6d4"
              strokeWidth={3}
              dot={{ fill: '#06b6d4', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, stroke: '#06b6d4', strokeWidth: 2 }}
              name="ROA"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default GraficoEvolucionRentabilidad
