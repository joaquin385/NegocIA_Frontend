import { useAtom } from 'jotai'
import { useMemo } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import { agrupacionAtom } from '@/stores'

const GraficoEvolucionClientes = ({ 
  datos = [], 
  titulo = "Evolución de Clientes Nuevos vs Recurrentes", 
  altura = "400px",
  formatearEjeY = (value) => `${value}`,
  formatearTooltip = (value, name) => [`${value}`, name]
}) => {
  const [agrupacion, setAgrupacion] = useAtom(agrupacionAtom)

  // Función para calcular el dominio del eje Y con padding porcentual
  const calcularDominio = (datos) => {
    if (!datos || datos.length === 0) return ['auto', 'auto'];
    
    const valores = [
      ...datos.map(item => item['Clientes Nuevos']).filter(val => !isNaN(val) && val !== undefined),
      ...datos.map(item => item['Clientes Recurrentes']).filter(val => !isNaN(val) && val !== undefined)
    ];
    
    if (valores.length === 0) return ['auto', 'auto'];
    
    const min = Math.min(...valores);
    const max = Math.max(...valores);
    const rango = max - min;
    const padding = rango * 0.15; // 15% de padding arriba y abajo
    
    return [min - padding, max + padding];
  };

  // Función para procesar datos por agrupación
  const procesarDatosPorAgrupacion = (datos, agrupacion) => {
    if (agrupacion === 'dia') return datos;
    
    if (agrupacion === 'mes') {
      const agrupados = {};
      datos.forEach(item => {
        const [dia, mes] = item.fecha.split('/');
        const clave = `${mes}/${new Date().getFullYear()}`;
        if (!agrupados[clave]) {
          agrupados[clave] = {
            fecha: clave,
            'Clientes Nuevos': 0,
            'Clientes Recurrentes': 0
          };
        }
        agrupados[clave]['Clientes Nuevos'] += item['Clientes Nuevos'];
        agrupados[clave]['Clientes Recurrentes'] += item['Clientes Recurrentes'];
      });
      return Object.values(agrupados);
    }
    
    if (agrupacion === 'año') {
      const agrupados = {};
      datos.forEach(item => {
        const año = new Date().getFullYear().toString();
        if (!agrupados[año]) {
          agrupados[año] = {
            fecha: año,
            'Clientes Nuevos': 0,
            'Clientes Recurrentes': 0
          };
        }
        agrupados[año]['Clientes Nuevos'] += item['Clientes Nuevos'];
        agrupados[año]['Clientes Recurrentes'] += item['Clientes Recurrentes'];
      });
      return Object.values(agrupados);
    }
    
    return datos;
  };

  // Optimización con useMemo para evitar recálculos innecesarios
  const datosProcesados = useMemo(() => 
    procesarDatosPorAgrupacion(datos, agrupacion), 
    [datos, agrupacion]
  );
  
  const dominio = useMemo(() => 
    calcularDominio(datosProcesados), 
    [datosProcesados]
  );

  return (
    <div className="space-y-4">
      {/* Controles */}
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-gray-800">{titulo}</h3>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <label className="text-xs font-medium text-gray-700">Agrupación temporal:</label>
            <select 
              className="px-3 py-1.5 border border-gray-300 rounded-md text-xs bg-white hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              value={agrupacion}
              onChange={(e) => setAgrupacion(e.target.value)}
            >
              <option value="dia">Día</option>
              <option value="mes">Mes</option>
              <option value="año">Año</option>
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
          <LineChart data={datosProcesados} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="fecha" 
              stroke="#666"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis 
              stroke="#666"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              domain={dominio}
              tickFormatter={formatearEjeY}
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
            />
            <Legend 
              verticalAlign="top" 
              height={36}
              iconType="rect"
              wrapperStyle={{ fontSize: '12px', paddingBottom: '10px' }}
            />
            <Line 
              type="monotone" 
              dataKey="Clientes Nuevos" 
              stroke="#3b82f6" 
              strokeWidth={3}
              dot={{ fill: '#3b82f6', strokeWidth: 0, r: 0 }}
              activeDot={{ r: 8, stroke: '#3b82f6', strokeWidth: 3, fill: 'white' }}
              name="Clientes Nuevos"
              strokeDasharray="0"
            />
            <Line 
              type="monotone" 
              dataKey="Clientes Recurrentes" 
              stroke="#10b981" 
              strokeWidth={3}
              dot={{ fill: '#10b981', strokeWidth: 0, r: 0 }}
              activeDot={{ r: 8, stroke: '#10b981', strokeWidth: 3, fill: 'white' }}
              name="Clientes Recurrentes"
              strokeDasharray="0"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default GraficoEvolucionClientes
