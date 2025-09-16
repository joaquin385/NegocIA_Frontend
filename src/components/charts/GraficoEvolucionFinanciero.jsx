import { useAtom } from 'jotai'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import { agrupacionAtom } from '@/stores'

const GraficoEvolucionFinanciero = ({ 
  datos = [], 
  titulo = "Evolución Financiera", 
  altura = "450px",
  formatearEjeY = (value) => `$${value.toLocaleString()}`,
  formatearTooltip = (value, name) => [`$${value.toLocaleString()}`, name]
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
          datosPorMes[mes] = { ingresos: 0, gastos: 0, beneficio: 0, count: 0 };
        }
        datosPorMes[mes].ingresos += item.ingresos;
        datosPorMes[mes].gastos += item.gastos;
        datosPorMes[mes].beneficio += item.beneficio;
        datosPorMes[mes].count += 1;
      });
      
      return Object.entries(datosPorMes).map(([mes, data]) => ({
        fecha: mes,
        ingresos: Math.round(data.ingresos / data.count),
        gastos: Math.round(data.gastos / data.count),
        beneficio: Math.round(data.beneficio / data.count)
      }));
    }
    
    if (agrupacion === 'año') {
      const datosPorAño = {};
      datos.forEach(item => {
        const fecha = new Date(`2025/${item.fecha.split('/')[1]}/${item.fecha.split('/')[0]}`);
        const año = fecha.getFullYear();
        
        if (!datosPorAño[año]) {
          datosPorAño[año] = { ingresos: 0, gastos: 0, beneficio: 0, count: 0 };
        }
        datosPorAño[año].ingresos += item.ingresos;
        datosPorAño[año].gastos += item.gastos;
        datosPorAño[año].beneficio += item.beneficio;
        datosPorAño[año].count += 1;
      });
      
      return Object.entries(datosPorAño).map(([año, data]) => ({
        fecha: año,
        ingresos: Math.round(data.ingresos / data.count),
        gastos: Math.round(data.gastos / data.count),
        beneficio: Math.round(data.beneficio / data.count)
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
              dataKey="ingresos"
              stroke="#3b82f6"
              strokeWidth={3}
              dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, stroke: '#3b82f6', strokeWidth: 2 }}
              name="Ingresos"
            />
            <Line
              type="monotone"
              dataKey="gastos"
              stroke="#10b981"
              strokeWidth={3}
              dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, stroke: '#10b981', strokeWidth: 2 }}
              name="Gastos"
            />
            <Line
              type="monotone"
              dataKey="beneficio"
              stroke="#f59e0b"
              strokeWidth={3}
              dot={{ fill: '#f59e0b', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, stroke: '#f59e0b', strokeWidth: 2 }}
              name="Beneficio Neto"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default GraficoEvolucionFinanciero
